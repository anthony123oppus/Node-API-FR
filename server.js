require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const productRoute = require('./routes/productRoute')
const userRoute = require('./routes/userRoute')
const errorMiddleware = require('./middleware/errorMiddleware')
const cors = require('cors') // para sa cross-origin
const app = express()

//kani kay para sa .env na file declaration  //-- process.env.PORT AND process.env syntax sa pag itarget  dayun ang PORT kay ang variable na gi declare sa .env na file
const MONGO_URLI = process.env.MONGO_URL
const PORTe = process.env.PORT || 4000
const FRONTEND = process.env.FRONTEND //para sa variable na FRONTEND sa .env na file

const corsOption = {
    // origin: ['http://example.com', 'http://exampleph.com', ' http://myportfolio'], -- kani para sa kung daghan ang tagaan nimo ug muaccess sa imong backend
    // origin: FRONTEND -- inani pamaagi kung ang link sa frontend ilahi nimo ug butang sa env nimo ibutang
    origin: 'http://example.com', //kani kay para only sa http://example.com ang maka access sa node.app --ang kani na link kay sa frontend na
    optionSuccessStatus: 200 // soma legacy browsers
}
 app.use(cors()) //para magamit and cors para sa cross-origin
// app.use(cors(corsOption)) //para magamit and cors para sa cross-origin -- kani kay kung naa kay i set na frontend na only makaaccess

//middleware para mubasa or mu send siya ug json na format
app.use(express.json()) // this middleware will allow to send json data
app.use(express.urlencoded({extended: false})) //this middleware code will allow to to form urlencoded data

//routes{
app.use('/api', productRoute); // two type of router the /api and the /product is in the productRoute.js  
app.use('/api/users', userRoute); // gibutangan daan ug /api/users -- users ani para makas a ka ug dili na magbutang sa userRoute.js /users

//need routes to display in the browser the url is localhost:4000
 app.get('/', (req, res) => {
    res.send('Hello NODE API')
 })

 //the url in this route is localhost:4000/blog
 app.get('/blog',(req,res) => {
    res.send('Hello Blog')
 })

 //}routes

 //errorMiddleware how to connect
 app.use(errorMiddleware)

// mongoose.set("strictQuery", false) - this will won't display the strictQuery in the terminal
 mongoose.connect(MONGO_URLI)
 .then(() => {
     console.log('connected successfully')
    //kanang 4000 - gamit na sa localhost:4000  4000
   app.listen(PORTe, () => {
       console.log(`Node API app is running on port ${PORTe}`)
   })
}).catch((error) => {
    console.log(error)
})