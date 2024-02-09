const fs = require('fs');
const Hotel = require('./../models/hotelModel')

const hotels = JSON.parse(fs.readFileSync(`${__dirname}/data/hotels.json`));



exports.getAllHotels =  async (req,res)=>{
    try{
        const hotels = await Hotel.find();
        res
    .status(200)
    .json({
        status:'sucess',
        results:hotels.length,
        data:{
          hotels
        }
    })
    }catch(err){
        res.status(404).json({
            status: 'failed',
            message: err
        })
    }
};
 
exports.getHotel = async (req,res)=>{
    try{
        const hotel = await Hotel.findByID(req.params.id)
        //const hotel = hotels.find(el=>el.id === Number(req.params.id));
    res
    .status(200)
    .json({
        status:'success',
        data:{
            hotel
        }
    })
    }catch(err){
        res.status(404).json({
            status: 'failed',
            message: err
        })
    }
};

exports.createHotel = async (req, res)=>{
    try{
        const newHotel = await Hotel.create(req.body)
        res
        .status(201)
        .json({
            status:'success',
            message: "New hotel created",
            data: newHotel
        })
    }catch(err){
        res.status(404).json({
            status: 'failed',
            message: err
        })
    }
}

exports.updateHotel = async (req,res)=>{
    try{
        const hotel = await Hotel.findByIdAndUpdate(req.params.id, req.body,{
            new: true,
            runValidators: true
        });
        res
        .status(200)
        .json({
        status:'success',
        message: "Hotel Updated",
        data: {
            hotel
        }
    })
    }catch(err){
        res
        .status(404).json({
        status: 'failed',
        message: err
        })
    }
}

exports.deleteHotel = async (req,res)=>{
    try{
        await Hotel.findByIdAndDelete(req.params.id);
        res
    }catch(err){
        res
        .status(404).json({
        status: 'failed',
        message: err
        })
    }
};



/*
exports.checkHotel = (req, res, next) => {
    const hotel = hotels.find((hotel) => hotel.id == req.params.id);
    if (req.params.id > hotels.length)
    {
        res.status(404).json({
            status: 'failure',
            message: 'invalid ID',
        })
 
        return
    }
 
    req.hotel = hotel
    next()
}
*/
/*
exports.createHotel = (req, res)=>{
    const newId = hotels[hotels.length-1].id+1;
    console.log(newId);
    const hotelData = Object.assign({id:newId}, req.body);
    hotels.push(hotelData);
    fs.writeFile(`${__dirname}/data/hotels.json`,JSON.stringify(hotels),err=>{
        res
        .status(201)
        .json({
            status:'success',
            message: "New hotel created",
            data: hotelData
        })
    })
};
*/