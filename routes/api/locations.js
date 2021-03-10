const router = require('express').Router();
const to = require('await-to-js').default;
const sequelize = require('../../config/connection');
const { Traveller, Location, Trip } = require('../../models');

router.route('/')
    .get(async (req, res) => {
        const [err, locations] = await to(Location.findAll());
        if (err) return res.status(500).json(err);
        res.json(locations);
    })
    .post(async (req, res) => {
        const { name } = req.body;
        const [err, location] = await to(Location.create({ name }));
        if (err) return res.status(500).json(err);
        res.json(location);
    });

router.route('/:id')
    .get(async (req, res) => {
        const { id } = req.params;
        const [err, location] = await to(Location.findByPk(id, {
            include: [{
                model: Traveller,
                through: Trip,
                as: "travellers_locations"
            }]
        }));
        if (err) {
            console.log(err);
            return res.status(500).json(err);
        };
        res.json(location);
    })
    .delete(async (req, res) => {
        const { id } = req.params;
        const [err, location] = await to(Location.destroy({
            where: {
                id,
            }
        }));

        if (err) return res.status(500).send(location);
        res.json(location);
    });

module.exports = router;
