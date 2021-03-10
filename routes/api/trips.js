const router = require('express').Router();

router.post('/', (req, res) => {
        res.send('POST API TRIPS');
    });

router.delete('/:id', (req, res) => {
        res.send('DELETE API A TRIP');
    });

module.exports = router;
