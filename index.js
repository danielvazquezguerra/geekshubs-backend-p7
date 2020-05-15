import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import morgan from 'morgan';
import skatesRouter from './routes/SkateBoards.js'
import usersRouter from './routes/Users.js'
import ordersRouter from './routes/Orders.js'
import categoriesRouter from './routes/Categories.js'
dotenv.config();
import mongoose from 'mongoose';
const app = express();
const PORT = 3001;


//.env
const { ECOMMERCE_APP_MONGODB_HOST, ECOMMERCE_APP_MONGODB_DATABASE } = process.env
const MONGODB_URI = `mongodb://${ECOMMERCE_APP_MONGODB_HOST}/${ECOMMERCE_APP_MONGODB_DATABASE}`;

//settings


//middlewares
app.use(express.urlencoded({extended:false}));

//Routes
app.get('/', (req, res) => {
    res.send('BANZAI!!!');
})


//warnings
mongoose.connect(MONGODB_URI, {
        useCreateIndex: true,
        useNewUrlParser: true,
        useFindAndModify: false,
        useUnifiedTopology: true,
    })
    .then(() => console.log('MONEYBALL'))
    .catch(error => console.error(error));

const db = mongoose.connection;

db.once('open', _ => {
    console.log('Database is connected to', MONGODB_URI);
    
})

db.on('error', err => {
    console.log(error);
    
})

app.use(express.json()); 
app.use(morgan('dev'));
app.use(cors());
app.use('/skateboards', skatesRouter);
app.use('/users', usersRouter);
app.use('/orders', ordersRouter);
app.use('/categories', categoriesRouter);

app.set('port', process.env.PORT || 3001);




app.listen(PORT, () => console.log(`Server on port ${PORT}`));