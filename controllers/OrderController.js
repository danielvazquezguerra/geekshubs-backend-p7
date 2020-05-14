import OrderModel from '../models/Order.js'

const OrderController = {

    OrderCreate(req, res) {
        OrderModel.create(req.body)
        .then( order => res.status(201).send(order))
        .catch(error => {
            console.error(error);
            res.send(error)
        })
    },

    OrderDelete(req, res) {
        OrderModel.findByIdAndDelete(req.params)
        .then(order => res.status(200).send(order))
        .catch(error => {
            console.error(error);
            res.send(error);
        })
    }


}

export default OrderController;