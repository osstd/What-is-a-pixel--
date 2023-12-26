var x = widthData
var y = heightData
var colors = colorData

var datasets = {
        red: [],
        green: [],
        blue: []
    };

    for (var i = 0; i < x.length; i++) {
        for (var j = 0; j < y.length; j++) {
            for (var k = 0; k < 3; k++) {
                var colorValue = (colors[j][i][k].toFixed(3));
                if (k === 0) {
                    datasets.red.push({ x: x[i], y: y[j], r: colorValue });
                } else if (k === 1) {
                    datasets.green.push({ x: x[i], y: y[j], r: colorValue});
                } else {
                    datasets.blue.push({ x: x[i], y: y[j], r:colorValue });
                }
            }
        }
    }

    var ctx = document.getElementById('RedChart').getContext('2d');
    var chartRed = new Chart(ctx, {
        type: 'bubble',
        data: {
                  datasets: [{
                    label:'Red Plot',
                    data: datasets.red,
                    backgroundColor: 'rgb(255, 0, 0)'
                  }]
                },

        options: {
            scales: {
                x: {
                    type: 'linear',
                    position: 'bottom',
                    title: {
                        display: true,
                        text: 'Width',
                    },
                },
                y: {
                    type: 'linear',
                    position: 'left',
                    reverse: true,
                    title: {
                        display: true,
                        text: 'Height',
                    },
                }
            },
        }
    });

    var ctx = document.getElementById('GreenChart').getContext('2d');
    var chartGreen = new Chart(ctx, {
        type: 'bubble',
        data: {
                  datasets: [{
                    label:'Green Plot',
                    data: datasets.green,
                    backgroundColor: 'rgb(0, 255, 0)'
                  }]
                },
        options: {
            scales: {
                x: {
                    type: 'linear',
                    position: 'bottom',
                    title: {
                        display: true,
                        text: 'Width',
                    },
                },
                y: {
                    type: 'linear',
                    position: 'left',
                    reverse: true,
                    title: {
                        display: true,
                        text: 'Height',
                    },
                }
            },
        }
    });

    var ctx = document.getElementById('BlueChart').getContext('2d');
    var chartBlue = new Chart(ctx, {
        type: 'bubble',
        data: {
                  datasets: [{
                    label:'Blue Plot',
                    data: datasets.blue,
                    backgroundColor: 'rgb(0, 0, 255)'
                  }]
                },
        options: {
            scales: {
                x: {
                    type: 'linear',
                    position: 'bottom',
                    title: {
                        display: true,
                        text: 'Width',
                    },
                },
                y: {
                    type: 'linear',
                    position: 'left',
                    reverse: true,
                    title: {
                        display: true,
                        text: 'Height',
                    },
                }
            },
        }
    });









