require('dotenv').config()
const express = require('express')
const connectDB = require('./config/database')
const productRoutes = require('./routes/productRoutes')
const morgan = require('morgan')

connectDB()

app.use(morgan('dev'))

const app = express()

app.use(express.json())
app.use('/api/products', productRoutes )


const PORT = process.env.PORT || 5000

app.listen (PORT, () => console.log(`Server running on port ${PORT}`))