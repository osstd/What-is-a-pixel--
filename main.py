import numpy as np
from PIL import Image
from flask import Flask, render_template, request
from wtforms import SubmitField, IntegerField, validators
from flask_wtf import FlaskForm
from flask_wtf.file import FileField, FileRequired, FileAllowed, FileSize
from flask_bootstrap import Bootstrap5
import os

app = Flask(__name__)
app.config['SECRET_KEY'] = os.environ.get('F_KEY')
Bootstrap5(app)


class UploadForm(FlaskForm):
    file = FileField('Image File',
                     validators=[
                         FileRequired(),
                         FileAllowed(['jpg', 'jpeg', 'png'], message='Image is not .JPG or .JPEG or .PNG'),
                         FileSize(max_size=2.5 * 1024 * 1024, message='Image must be less than 2.5 MB')
                     ])
    down_sampler = IntegerField("Sampler Factor",
                                description="Enter a value for down sampling.",
                                validators=[
                                    validators.Optional(),
                                    validators.NumberRange(min=10, message="Value must be greater than or equal to 10.")
                                ]
                                )
    submit = SubmitField("Submit/Process")
    reverse = SubmitField("Reverse")


def open_image(image, down_sampler):
    # Convert the image to a NumPy array
    image_array = np.array(image)

    # Get the dimensions of the image
    height, width, channels = image_array.shape
    if width > 600:
        w = 600
        h = (height / width) * 600
    elif width < 400:
        w = 400
        h = (height / width) * 400
    else:
        w = width
        h = height

    if down_sampler and down_sampler >= 10:
        downsampling_factor = down_sampler
    else:
        if height < 200 or width < 200:
            downsampling_factor = 5
        elif height < 100 or width < 100:
            downsampling_factor = 3
        else:
            downsampling_factor = 10

    # Create a NumPy array to store RGB values
    rgb_values = np.zeros(((height // downsampling_factor) + 1, (width // downsampling_factor) + 1, 3))
    height_cor = [value for value in range(0, height, downsampling_factor)]
    width_cor = [value for value in range(0, width, downsampling_factor)]

    for i in range(0, height, downsampling_factor):
        for j in range(0, width, downsampling_factor):
            if channels == 4:  # RGB with Alpha channel
                r, g, b, _ = image_array[i, j] / 255.0
            else:  # RGB without Alpha
                r, g, b = image_array[i, j, :3] / 255.0
            rgb_values[i // downsampling_factor, j // downsampling_factor] = np.array([r, g, b])

    rgb = rgb_values.tolist()
    return height_cor, width_cor, rgb, w, h


@app.route('/upload', methods=['GET', 'POST'])
def upload():
    form = UploadForm()
    if form.validate_on_submit():
        height, width, colors, w, h = open_image(Image.open(form.file.data), form.down_sampler.data)
        if 'reverse' in request.form:
            return render_template('result.html', height=height, width=width, colors=colors, w=h, h=w, reverse='true')
        return render_template('result.html', height=height, width=width, colors=colors, w=w, h=h)
    return render_template('upload.html', form=form)


@app.route('/visualize3')
def visualize3():
    return render_template('visualize3.html')


@app.route('/visualize2')
def visualize2():
    return render_template('visualize2.html')


@app.route('/')
def home():
    return render_template('index.html')


if __name__ == '__main__':
    app.run(debug=False)
