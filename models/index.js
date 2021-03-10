const Traveller = require('./traveller');
const Location = require('./location');
const Trip = require('./trip');

Traveller.hasMany(Trip, {
    foreignKey: 'traveller_id',
    onDelete: 'CASCADE',
});

Trip.belongsTo(Traveller, {
    foreignKey: 'traveller_id',
});

Location.hasMany(Trip, {
    foreignKey: 'location_id'
});

Trip.belongsTo(Location, {
    foreignKey: 'location_id'
});

Traveller.belongsToMany(Location, {through: 'Trip'});
Location.belongsToMany(Traveller, {through: 'Trip'});

module.exports = { Traveller, Location, Trip };
