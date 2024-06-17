# Pixelizer

This is a Flask application that allows users to upload images and apply downsampling to them. The application provides
an interface for users to upload images, specify a downsampling factor, and visualize the pixels of the processed
images.

## Features

- User-friendly interface for uploading images.
- Allows users to specify a downsampling factor for image processing.
- Supports image formats: JPG, JPEG, PNG.
- Displays the down sampled image in a web page.
- Option to reverse the dimensions of the displayed image.
- Integrated Bootstrap 5 and custom CSS for styling.

## Technology Used

- **Programming Language:** Python
- **Framework:** Flask
- **Image Processing:** NumPy, PIL (Pillow)
- **Form Handling:** Flask-WTF
- **Styling:** Bootstrap 5
- **Environment Configuration:** python-dotenv

## Requirements

- Python 3.7+
- Flask
- Flask-Bootstrap
- Flask-WTF
- Pillow (PIL)
- NumPy

## Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/osstd/What-is-a-pixel--.git
    cd pixelizer
    ```

2. Create and activate a virtual environment:

    ```bash
    python -m venv venv
    source venv/bin/activate # On Windows use `venv\Scripts\activate`
    ```

3. Install the required packages:

    ```bash
    pip install -r requirements.txt
    ```

4. Set up environment variables. Create a `.env` file in the project root directory and add the following:

    ```env
    SECRET_KEY=your_secret_key
    ```

   Replace `your_secret_key` with a secret key for your Flask application.

5. Run the application:

    ```bash
    flask run
    ```
   
## Examples

![Demonstration](https://i.imgur.com/mac8amv.png)

![Demonstration](https://i.imgur.com/B4ZJuDS.png)

## Usage

### Routes

- `/` : Home page
- `/upload` : Upload and process image page
- `/visualize2` : Explanation of 2d Visualization
- `/visualize3` : Explanation of 3d Visualization and the available 3d visualization tools for local use

### Forms

- `UploadForm` : For uploading images and specifying downsampling factor

### Image Processing Function

- `open_image(image, down_sampler)` : Function to downs sample the image based on the specified factor

### Templates

- `index.html` : Home page template
- `upload.html` : Image upload form template
- `result.html` : Processed image display template
- `visualize2.html` : Visualization page 2 template
- `visualize3.html` : Visualization page 3 template

## Contributing

Contributions are welcome! Please fork the repository and submit a pull request.

## License

This project is licensed under the MIT License.
