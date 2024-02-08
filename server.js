const app = require('./app')
const dotenv = require('dotenv');
dotenv.config('./config.env')

const mongoose = require('mongoose')
const DB = process.env.DATABASE.replace('<password>', process.env.DATABASE_PASSWORD)
 
mongoose.connect(DB)
.then(con=>{
    console.log(con.connections);
    console.log('connectet')
})

/** DB demo **/

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

const testHotel = new Hotel({
    "name": "aaaaa",
    "adress": "bbbb",
    "room_price": 3
})

testHotel.save()
.then(doc=>console.log(doc))
.catch(err=>{
    console.log(err)
})

const port = process.env.PORT
app.listen(port,()=>{
    console.log(`Server runing at port: ${port}`);
})

