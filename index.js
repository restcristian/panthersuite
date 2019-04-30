const express = require('express');

const app = express();

const PORT = process.env.PORT || 5000;

app.listen(()=> {
    console.log(`Server listing on port ${PORT}`);
});