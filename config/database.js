const mongoose = require('mongoose')

mongoose.Promise = global.Promise
// 'mongodb+srv://aman1706:60718991Zebram@cluster0-8t0yk.mongodb.net/test?retryWrites=true&w=majority'
const CONNECTION_URI= process.env.MONGODB_URI || "mongodb://localhost:27017/ticket-master-bk"
mongoose.connect(CONNECTION_URI,{useNewUrlParser: true})
    .then(()=>{
        console.log('succesfully connected to db')
    })
    .catch(()=>{
        console.log('error connecting to db')
    })

module.exports = mongoose