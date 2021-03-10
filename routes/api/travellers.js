const router = require('express').Router();
const to = require('await-to-js').default;
const sequelize = require('../../config/connection');
const { Traveller, Location, Trip } = require('../../models');

router.route('/')
    .get(async (req, res) => {
        const [err, travellers] = await to(Traveller.findAll({include: [{
                model: Location,
                through: Trip,
                as: "planned_trips"
            }]}));
        if (err) return res.status(500).send(err);
        res.json(travellers);
    })
    .post(async (req, res) => {
        const { name, email } = req.body;
        const [err, traveller] = await to(Traveller.create({ name, email }));
        if (err) return res.status(500).send(err);
        res.json(traveller);
    });

router.route('/:id')
    .get(async (req, res) => {
        const [err, traveller] = await to(Traveller.findByPk(req.params.id, {
            include: [{
                model: Location,
                through: Trip,
                as: "planned_trips"
            }]
        }));
        if (err) {
            console.log(err);
            return res.status(500).send(err)
        };
        res.json(traveller);
    })
    .delete(async (req, res) => {
        const [err, traveller] = await to(Traveller.destroy({
            where: {
                id: req.params.id
            }
        }));
        if (err) {
            console.log(err);
            return res.status(500).send(err)
        };
        res.json(traveller);
    });

module.exports = router;
