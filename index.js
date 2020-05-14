import express from 'express';
import dotenv from 'dotenv';
dotenv.config();

const app = express();
import mongoose from 'mongoose';
import productsRouter from './routes/products.js'
import path from 'path';
const PORT = 3001;


// const ECOMMERCE_APP_MONGODB_HOST = process.env.ECOMMERCE_APP_MONGODB_HOST;
// const ECOMMERCE_APP_DATABASE = process.env.ECOMMERCE_APP_MONGODB_DATABASE;

const { ECOMMERCE_APP_MONGODB_HOST, ECOMMERCE_APP_MONGODB_DATABASE } = process.env
const MONGODB_URI = `mongodb://${ECOMMERCE_APP_MONGODB_HOST}/${ECOMMERCE_APP_MONGODB_DATABASE}}`;

//settings


//middlewares
app.use(express.urlencoded({extended:false}));

//Routes
app.get('/', (req, res) => {
    res.send('hello mongodb');
})


//global variables




mongoose.connect(MONGODB_URI, {
        useCreateIndex: true,
        useNewUrlParser: true,
        useFindAndModify: false,
        useUnifiedTopology: true,
    })
    .then(() => console.log('Conectado a MongoDB con éxito'))
    .catch(error => console.error(error));

app.use(express.json());
app.use('/products', productsRouter);

app.set('port', process.env.PORT || 3001);




app.listen(PORT, () => console.log(`Server on port ${PORT}`));