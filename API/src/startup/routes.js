const express = require('express')

module.exports = function(app){
    app.use(express.json())

    app.use('/api/users', require ('../routes/users'))
    app.use('/api/links', require ('../routes/links'))

}