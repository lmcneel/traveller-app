const router = require('express').Router();
const api = require('./api');

router.use('/api', api);

router.get('/', (req, res) => {
    const instructions = `
        <h1>Hello!</h1>
        <p>This is an traveller's api</p>
        <p>The following routes are available:</p>
        <ul>
            <li>GET route /api/travellers</li>
            <li>POST route /api/travellers</li>
            <li>GET route /api/travellers/:id</li>
            <li>DELETE route /api/travellers/:id</li>
            <li>GET route /api/locations</li>
            <li>POST route /api/locations</li>
            <li>GET route /api/locations/:id</li>
            <li>DELETE route /api/locations/:id</li>
            <li>POST route /api/trips</li>
            <li>DELETE route /api/trips/:id</li>
        </ul>
    `;

    res.send(instructions);
});

module.exports = router;
