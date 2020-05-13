import express from 'express';
const app = express();
import mongoose from 'mongoose';
import productsRouter from './routes/products.js'
const PORT = 3001

mongoose.connect('mongodb://localhost:27017/repaso-mongodb', {
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