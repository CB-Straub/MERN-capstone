require('dotenv').config()

const productsData = require('./data/products')
const connectDB = require('./config/database')
const Product = require('./models/Product')


connectDB()

const importData = async () => {
    try{
        await Product.deleteMany({})

        await Product.insertMany(productsData)

        console.log('Data import Successful')
        process.exit()
    }catch {
        console.error('Data import Failed')
        process.exit(1)
    }
}

importData()