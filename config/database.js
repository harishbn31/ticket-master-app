const mongoose = require('mongoose')

mongoose.Promise = global.Promise

mongoose.connect('mongodb://localhost:27017/ticket-master-bk',{useNewUrlParser: true})
    .then(()=>{
        console.log('succesfully connected to db')
    })
    .catch(()=>{
        console.log('error connecting to db')
    })

module.exports = mongoose