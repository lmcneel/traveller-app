const router = require('express').Router();
const sequelize = require('../../config/connection');
const { Traveller, Location, Trip } = require('../../models');

router.route('/')
    .get((req, res) => {
        res.send('GET API TRAVELLERS');
    })
    .post((req, res) => {
        res.send('POST API TRAVELLERS');
    });

router.route('/:id')
    .get((req, res) => {
        res.send('GET API A TRAVELLER');
    })
    .delete((req, res) => {
        res.send('DELETE API A TRAVELLER');
    });

module.exports = router;
