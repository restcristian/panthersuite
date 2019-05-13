const express = require('express');
const events = require('./routes/api/events');
const path = require('path');

const app = express();

app.use(express.static(path.join(__dirname, 'public/')))

app.use(express.static(path.join(__dirname, "client", "build")));

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

// Routes to API
app.use('/api', events);

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, "client", "build", "index.html"))
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server listing on port ${PORT}`);
});