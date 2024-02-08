const express = require('express');
const router = express.Router();
const hotelController = require('../../controllers/hotelControler')

router.param('id', hotelController.checkId)

router
.route('/')
.get(hotelController.getAllHotels)
.post(hotelController.createHotel)
hotelsRouter
.route('/:id')
.get(hotelController.getHotel)
.patch(hotelController.updateHotel)
.delete(hotelController.deleteHotel)

module.exports = router