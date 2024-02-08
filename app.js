const fs = require('fs');
const express = require ('express');

const app = express();

app.use(express.json()) // prisidedam ir matom body kuri issiuncia

// server

const port = "8889";

// middlewares

app.use((req, res, next)=>{
    console.log('veikia')
    next();
})

// routes 

app.get('/', (req, res)=>{
    res
    .status(200)
    .send('labas')
});

app.get('/about-project', (req, res)=>{
    res
    .status(200)
    .json({
        status: 'sucess',
        data: {
            project: "hotel catalog",
            version: 0.1
        }
    })
});

const hotels = fs.readFileSync('./data/hotels.json',{encoding: 'utf8'})
hotelsData = JSON.parse(hotels)


app.get('/api/v1/hotels', (req, res)=>{
    res
    .status(200)
    .json({
        status: 'success',
        results: hotelsData.length,
        data: {
            hotelsData
        }
    })
});

// pasitikrint
/*app.get('/api/v1/hotels/:id', (req, res)=>{
    const hotel = hotels.find(el=>el.id === Number(req.params.id))
    if(!hotel){
        return res.status(404).json({
            status : 'failed',
            message: 'ivalid data'
        })
    }
    res
    .status(200)
    .json({
        status: 'success',
        data: {
            hotel
        }
    })
})
*/



app.post('/api/v1/hotels', (req, res)=>{
    console.log(req.body);
    res
    .status(201)
    .json({
        status: 'success',
        message: 'new hotel created',
        data : req.body
    })
})







app.listen(port, ()=>{console.log('server runing on port', port)})