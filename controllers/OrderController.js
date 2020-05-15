import Order from '../models/Order.js'

const OrderController = {

    OrderCreate(req, res) {
        Order.create(req.body)
        .then( order => res.status(201).send(order))
        .catch(error => {
            console.error(error);
            res.send(error)
        })
    },

    OrderDelete(req, res) {
        Order.findByIdAndDelete(req.params)
        .then(order => res.status(200).send(order))
        .catch(error => {
            console.error(error);
            res.send(error);
        })
    }


}

export default OrderController;