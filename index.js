const express =  require('express')
const mongoose = require('./config/database')
const router = require('./config/routes')
const cors = require('cors')
const app = express()
const port = 3015

app.use(express.json())
app.use(cors())

app.get('/',(req,res)=>{
    res.send('welcome to the ticket master app')
})

app.use('/',router)

app.listen(port,()=>{
    console.log('listening on port ',port)
})