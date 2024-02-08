const http = require('http');
const url = require('url');
const fs = require('fs');
const superagent = require('superagent')

const fetchBread = url => {
    return new Promise((resolve, reject)=>{
        superagent
        .get(url)
        .then(response => {
            resolve(response.body)
        })
        .catch(err => {
            reject(err)
        })
    })
}

//console.log(fetchBread('https://dog.ceo/api/breed/labrador/images/random'))

fetchBread('https://dog.ceo/api/breed/labrador/images/random')
.then(res => {
    console.log(res.message)
    return res.message;        
    })
.then(data => {
    fs.writeFile('./data/breeds.txt', data, err => {
        if(err){
            console.log('fatal err:', err)
        }else{
            console.log('olrait')
        }
    })
})


const syHI = async () => {
    return 15
}

syHI()
.then(data=> console.log(data))


const getBread = async () => {
    try{
        const data = await(fetchBread('https://dog.ceo/api/breed/labrador/images/random'))
        console.log(data)
    }catch(err){
        console.log(err)
    }
}

getBread()

const hostname = 'localhost';
const port = '8800';

const server = http.createServer((req, res) => {
    const {query, pathname} = url.parse(req.url, true);

    switch(pathname){
        case '/':
            res.writeHead(200,{'Content-Type' : 'text/html'})
            res.end('<h1>haaa</h1>')
            break;


        default:
            res.writeHead(404,{'Content-Type' : 'text/html'})
            res.end('<h1>Something went wrong</h1>')
        
        }
})

server.listen(port, hostname, ()=>{console.log(`server listening port ${port}`)})