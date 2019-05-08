function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
}

/**
 * Returns a random integer between min (inclusive) and max (inclusive).
 * The value is no lower than min (or the next integer greater than min
 * if min isn't an integer) and no greater than max (or the next integer
 * lower than max if max isn't an integer).
 * Using Math.round() will give you a non-uniform distribution!
 */
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
var chart = c3.generate({
    data: {
        x: 'x',
        columns: [
            ['x', 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19],
            ['upload', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            ['download'],
            ['total']
        ],
        axes: {
            data1: 'VO2',
            data2: 'VCO2'
        },
        colors: {
            VCO2: '#10e610',
            VO2: '#ff0000',
            VE: '#0000ff'
        },
        type: 'spline',
        labels: true
    },
    axis: {
        y: {
            tick: {
                format: function(x) {
                    return x % 1 === 0 ? x : '';
                }
            }
        },
        y2: {
            show: true
        }
    }
});

let data = [];
setInterval(function() {
    fetch('/getData', {
            method: 'POST',
            headers: {
                "Accept": 'application/json, text/plain, */*',
                "Content-Type": 'application/json',
            }
        })
        .then(res => res.json())
        .then(function(newData) {
            data.push(newData);
            let arr = data.slice(Math.max(data.length - 10, 1))
            // alert(JSON.stringify(data));
            chart.load({
                json: arr,
                keys: {
                    value: ['x', 'upload', 'download', 'total'],
                }
            })
        });
}, 1000);
