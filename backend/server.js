require('dotenv').config()
const express = require('express')
const connectDB = require('./config/database')
const productRoutes = require('./routes/productRoutes')
const morgan = require('morgan')

connectDB()

const app = express()

app.use(morgan('dev'))

app.use(express.json())
app.use('/api/products', productRoutes )


const PORT = process.env.PORT || 5000

app.listen (PORT, () => console.log(`Server running on port ${PORT}`))