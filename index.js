const express = require('express');
const events = require('./routes/api/events');
const path = require('path');

const app = express();

app.use(express.static(path.join(__dirname, 'public/')))
// Routes to API
app.use('/api', events);

const PORT = process.env.PORT || 5000;

app.listen(PORT,()=> {
    console.log(`Server listing on port ${PORT}`);
});