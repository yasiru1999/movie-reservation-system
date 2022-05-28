const express = require("express");
const cors = require('cors');
const dotenv = require('dotenv');

const app = express()
dotenv.config()

app.use(cors())
app.use(express.json())

require('./db/connectDB')

const apiRoutes = require('./routes/apiRoutes')
const auth = require('./routes/auth')
app.use("/cus",apiRoutes)
app.use("/customer",auth)
const port = process.env.PORT || 5000
app.listen(port,() => {
    console.log(`Service One started port ${port}`)
})
