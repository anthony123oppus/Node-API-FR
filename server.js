const express = require('express')
const app = express()

 //routes

 app.get('/', (req, res) => {
    res.send('Hello NODE API')
 })

 //kanang 4000 - gamit na sa localhost:4000  4000
app.listen(4000, () => {
    console.log('Node API app is running on port 3000')
})