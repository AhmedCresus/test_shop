const express = require('express')
const app = express()
const cors = require('cors')
const bodyParser = require("body-parser");

app.use(bodyParser.json());

app.use(cors())
app.use(express.json())


app.use('/influencers', require('./Routes/influencers'))

const PORT =  4000
app.listen(PORT,(err)=>
err ? console.error(err) : console.log(`🚀 is 🏃 on port ${PORT}`)
)