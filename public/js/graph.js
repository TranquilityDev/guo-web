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
        url: 'https://c3js.org/data/c3_test.csv',
        type: 'line'
    }
});
setInterval(function() {
    chart.load({
        columns: [
            ['data1', getRandomInt(10, 500), getRandomInt(10, 500), getRandomInt(10, 500), getRandomInt(10, 500), getRandomInt(10, 500), getRandomInt(10, 500)],
            ['data2', getRandomInt(10, 500), getRandomInt(10, 500), getRandomInt(10, 500), getRandomInt(10, 500), getRandomInt(10, 500), getRandomInt(10, 500)],
        ]
    });
}, 1000);
