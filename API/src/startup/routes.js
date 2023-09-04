const express = require('express')
const cors=  require("cors")


module.exports = function(app){
    app.use(express.json())
    app.use(cors())

    app.use('/api/users', require ('../routes/users'))
    app.use('/api/links', require ('../routes/links'))

}