const router = require('express').Router();
const data = require('../../data.json');

router.get('/', (req, res) => {
    res.json({msg:'hello man!'});
});

// Upcoming events
router.get('/upcoming-events', (req, res) => {
    res.send({
        upcoming_events:data["upcoming_events"]
    });
});
// Spotlight Event
router.get('/spotlight-event', (req, res) => {
    res.send({
        spotlight_event:data["spotlight_event"]
    });
});
module.exports = router;