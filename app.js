const express = require('express');
const app = express();
const router = express.Router();
app.use(express.json())
const hotelsRouter = express.Router();
const morgan = require('morgan')
 
hotelsRouter.param('id', checkHotel)
 
app.use(morgan('dev'))
app.use('/api/v1/hotels',hotelsRouter);

module.exports = app;