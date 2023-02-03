const express=require('express')
const app=express()
const cors=require('cors')
const mongoose=require('mongoose')

//midleware

app.use(express.json());
app.use(cors());


//route

const packageRoute=require('./Route/package.route')


// 
app.use('/api/v1/package',packageRoute)


module.exports =app