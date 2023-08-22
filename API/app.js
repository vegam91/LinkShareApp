require ("dotenv").config()
const express = require('express')

const app = express()

require ('../API/src/startup/db')()
require('../API/src/startup/routes')(app)




app.listen(3000, () => console.log('Server on...'))