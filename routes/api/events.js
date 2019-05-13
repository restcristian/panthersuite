const router = require('express').Router();
const data = require('../../data.json');

router.get('/', (req, res) => {
    res.json({ msg: 'hello man!' });
});

// Upcoming events
router.get('/upcoming-events', (req, res) => {
    res.send({
        upcoming_events: data["upcoming_events"]
    });
});
// Spotlight Event
router.get('/spotlight-event', (req, res) => {
    res.send({
        spotlight_event: data["spotlight_event"]
    });
});
//Concert Page Upcoming events
router.get('/concerts-upcoming-events', (req, res) => {
    res.send({
        concerts_upcoming_events: data["concerts_upcoming_events"]
    });
});
// POST: Concert Page upcoming events
router.post('/concerts-upcoming-events', (req, res) => {

    const { searchText, filter } = req.body;
    const upcoming_events = data["concerts_upcoming_events"];

    const textToSearch = searchText.toLowerCase();

    let result = upcoming_events;

    if (textToSearch !== '') {
        result = upcoming_events.filter(item => {

            return (item.name.toLowerCase().includes(textToSearch) && filter.artist.isActive) ||
                (item.venue.toLowerCase().includes(textToSearch) && filter.venue.isActive) ||
                (item.location.toLowerCase().includes(textToSearch) && filter.location.isActive)
        });
    }

    res.send({
        concerts_upcoming_events: result
    });
});
module.exports = router;