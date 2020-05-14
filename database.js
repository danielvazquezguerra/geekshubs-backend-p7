import dotenv from 'dotenv';
dotenv.config();

import mongoose from 'mongoose';


const MONGODB_URI = process.env.MONGODB_URI;


mongoose.connect(MONGODB_URI, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
})
.then(() => console.log('Conectado a MongoDB con éxito'))
.catch(error => console.error(error));