const express = require('express');
const fileupload = require('express-fileupload')
const cors = require('cors');
const path = require('path');

const db = require('./config/database');
const middleware = require('./helper/middleware');
const webRouter = require('./routes/web.route');

const app = express();

db.connect();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(fileupload({ createParentPath: true }));
app.use(cors());

app.use(express.static(path.join(__dirname, '/views')))

app.use('/web', middleware, webRouter);

module.exports = app;
