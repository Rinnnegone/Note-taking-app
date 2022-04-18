const PORT = process.env.PORT || 3001;
const express = require ('express');
const fs = require('fs');
const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');
const app = express();
const path = require('path');