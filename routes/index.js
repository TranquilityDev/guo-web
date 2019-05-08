var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', {
        title: 'Express'
    });
});

router.get('/new', function(req, res, next) {
    res.render('new', {
        title: 'Express'
    });
});
var i = 0;
router.post('/getData', function(req, res, next) {
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

    var org_time = ['x', getRandomInt(16, 21), getRandomInt(19, 20), getRandomInt(19, 21), getRandomInt(19, 20), getRandomInt(18, 21), getRandomInt(19, 22), getRandomInt(19, 21), getRandomInt(19, 20), getRandomInt(19, 21), getRandomInt(19, 20), getRandomInt(18, 21), getRandomInt(19, 22)];
    var co2 = ['VCO2', getRandomArbitrary(0.03, 6)];
    var o2 = ['VO2', getRandomInt(16, 21), getRandomInt(19, 20), getRandomInt(19, 21), getRandomInt(19, 20), getRandomInt(18, 21), getRandomInt(19, 22), getRandomInt(19, 21), getRandomInt(19, 20), getRandomInt(19, 21), getRandomInt(19, 20), getRandomInt(18, 21), getRandomInt(19, 22)];
    var ve = ['VE', getRandomInt(5, 15), getRandomInt(5, 15), getRandomInt(5, 15), getRandomInt(5, 15), getRandomInt(5, 15), getRandomInt(5, 15), getRandomInt(5, 15), getRandomInt(5, 15), getRandomInt(5, 15), getRandomInt(5, 15), getRandomInt(5, 15), getRandomInt(5, 15)];

    i++;
    // co2.splice(1, 1);
    res.json({
        name: 'www.site1.com',
        x: i,
        upload: getRandomArbitrary(0.03, 6).toFixed(2),
        download: getRandomArbitrary(0.03, 6).toFixed(2),
        total: getRandomArbitrary(0.03, 6).toFixed(2)
    });
});

module.exports = router;
