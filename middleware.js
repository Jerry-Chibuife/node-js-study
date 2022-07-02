const express = require('express')
const app = express()
const morgan = require('morgan')
const {products} = require('./data')
const {people} = require('./data')

app.use(morgan('tiny'))

const logger = (req, res, next) =>{
    console.log(req.method, req.url)
    next()
}

app.get('/', (req, res) => {
    res.send("Home Page")
})

app.listen(5000, ()=>{
    console.log('>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>')
    console.log('Server is running on port 5000...')
    console.log('>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>')
})