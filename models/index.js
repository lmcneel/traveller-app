const Traveller = require('./traveller');
const Location = require('./location');
const Trip = require('./trip');

Traveller.belongsToMany(Location, {
    through: {
        model: Trip,
        unique: false
    },
    as: 'planned_trips',
});
Location.belongsToMany(Traveller, {
    through: {
        model: Trip,
        unique: false
    },
    as: 'travellers_locations'
});

module.exports = { Traveller, Location, Trip };
