const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');

const app = express()
dotenv.config()

app.use(cors())
app.use(express.json())

require('./db/connectDB')
app.route('/').get((req,res) => {
    res.send('Test API call');
})

const adminRoutes = require('./routes/Admin.route')

app.use("/admin",adminRoutes())

const port = process.env.PORT || 5000
app.listen(port,() => {
    console.log(`Service One started port ${port}`)
})