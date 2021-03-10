const router = require('express').Router();

router.route('/')
    .get((req, res) => {
        res.send('GET API LOCATIONS');
    })
    .post((req, res) => {
        res.send('POST API LOCATIONS');
    });

router.route('/:id')
    .get((req, res) => {
        res.send('GET API A LOCATION');
    })
    .delete((req, res) => {
        res.send('DELETE API A LOCATION');
    });

module.exports = router;
