const mongoose = require('mongoose')

mongoose.Promise = global.Promise

mongoose.connect('mongodb+srv://aman1706:60718991Zebram@cluster0-8t0yk.mongodb.net/test?retryWrites=true&w=majority',{useNewUrlParser: true})
    .then(()=>{
        console.log('succesfully connected to db')
    })
    .catch(()=>{
        console.log('error connecting to db')
    })

module.exports = mongoose