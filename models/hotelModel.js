/** DB demo **/
const mongoose = require('mongoose')

const hotelSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'hotel must have name'],
        unique: true
    },
    adress: {
        type: String,
        required: [true, 'hotel must have adress']
    },
    room_price: {
        type: Number,
        require: [true]
    }
})


const Hotel = mongoose.model('Hotel', hotelSchema)

module.exports = hotelSchema

/*
const testHotel = new Hotel({
    "name": "aaaaa",
    "adress": "bbbb",
    "room_price": 3
})

*/