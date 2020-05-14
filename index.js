import express from 'express';
const app = express();
import mongoose from 'mongoose';
import productsRouter from './routes/products.js'
import path from 'path';
const PORT = 3001;


//settings


//middlewares
app.use(express.urlencoded({extended:false}));

//Routes
app.get('/', (req, res) => {
    res.send('hello mongodb');
})


//global variables




mongoose.connect('mongodb://localhost:/repaso-mongodb', {
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