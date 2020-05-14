import SkateModel from '../models/Skateboard.js'

const SkateboardController = {
    getAll(req, res) {
        SkateModel.find() // Todos los productos. 
        .then(skateboards => res.send(skateboards))
        .catch(error => {
            console.error(error);
            res.send(error)
        })
    },
    getById(req, res) {
        SkateModel.findById(req.params._id)
        .populate('userId')
        .then(skateboard => res.send(skateboard))
        .catch(error => {
            console.error(error);
            res.send(error);
        })
    },
    SkateAdd(req, res) {
        SkateModel.create(req.body)
        .then(skateboard => res.status(201).send(skateboard))
        .catch(error => {
            console.error(error);
            res.send(error);
        })
    }

}

export default SkateboardController;