const express = require('express');//v
const bodyParser = require('body-parser')//we added
const  cors =require ('cors')


const app = express()//initialise app with express

//Routes

// const index= require('./routes/index')

const postRoute= require('./routes/tasks.routes')
const gainRoute= require('./routes/gains.routes')


let corsOptions = {
    origin: 'http://localhost:3000',   //This is for frontend
    optionsSuccessStatus: 200 // For legacy browser support
  };
app.get('/', (req,res)=>{
res.send('hello from server')
})
  app.use(cors(corsOptions));


app.use(bodyParser.json());//we added
app.use(bodyParser.urlencoded({ extended: false }));//we added

app.use('/posts', postRoute)
app.use('/gains', gainRoute)

 
app.use(function (req, res, next) {
    req.headers['content-type'] = 'application/json';
    next();
  });

 

module.exports = app




