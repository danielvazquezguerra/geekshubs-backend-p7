import express from 'express';
import dotenv from 'dotenv';
import morgan from 'morgan';
import skatesRouter from './routes/SkateBoards.js'
import usersRouter from './routes/Users.js'
import ordersRouter from './routes/Orders.js'
dotenv.config();
import mongoose from 'mongoose';
const app = express();
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
app.use(morgan('dev'));
app.use('/', skatesRouter);
app.use('/', usersRouter);
app.use('/', ordersRouter);

app.set('port', process.env.PORT || 3001);




app.listen(PORT, () => console.log(`Server on port ${PORT}`));