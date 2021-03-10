const router = require('express').Router();
const to = require('await-to-js').default;
const sequelize = require('../../config/connection');
const { Traveller, Location, Trip } = require('../../models');

router.post('/', async (req, res) => {
    const {
        trip_budget,
        traveller_amount,
        traveller_id,
        location_id
    } = req.body;

    const [err, trip] = await to(Trip.create({
        trip_budget,
        traveller_amount,
        traveller_id,
        location_id
    }));

    if (err) return res.status(500).json(err);
    res.json(trip);
});

router.delete('/:id', async (req, res) => {
    const { id } = req.params;

    const [err, trip] = await to(Trip.destroy({
        where: {
            id
        }
    }));

    if (err) return res.status(500).json(err);

    res.json(trip);
});

module.exports = router;
