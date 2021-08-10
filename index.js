const express = require('express')
const app = express()
app.use(express.json())
 
app.use('/api/courses', require('./router/courses.js'))
app.listen(3000)