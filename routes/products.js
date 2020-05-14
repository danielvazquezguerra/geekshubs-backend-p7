import express from 'express';
import Skateboard from '../models/Skateboard.js';
const router = express.Router();

router.post('/', (req, res) => {
    Skateboard.create(req.body)
        .then(skateboard => res.status(201).send(skateboard))
        .catch(console.error)
})

export default router;