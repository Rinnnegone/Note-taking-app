const PORT = process.env.PORT || 3001;
const express = require ('express');
const fs = require('fs');
const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');
const app = express();
const path = require('path');

app.use(express.urlencoded({
    extended: true
}));

app.use(express.static('public'));
app.use(express.json());
app.use('api', apiRoutes);
app.use('/', htmlRoutes);

app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}!`);
})