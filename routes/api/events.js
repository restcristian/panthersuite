const router = require('express').Router();
const data = require('../../data.json');

router.get('/', (req, res) => {
    res.json({msg:'hello man!'});
});

// Upcoming events
router.get('/upcoming-events', (req, res) => {
    res.send({
        events:data["upcoming_events"]
    });
});

module.exports = router;