import express from 'express';
import path from 'path';
import './database.js'

// initializations. 

const app = express();
const PORT = 3001;

//middlewares.

app.use(express.urlencoded({extended:false}));

//routes

app.get('/', (req, res) => {
    res.send('hello mongodb');
})

app.set(PORT, process.env.PORT || 3001);

export default app;
