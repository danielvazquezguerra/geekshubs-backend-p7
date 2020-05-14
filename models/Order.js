import mongoose from 'mongoose';
const ObjectId = mongoose.SchemaTypes.ObjectId;
const OrderSchema = new mongoose.Schema({
    status: String,
    deliveryDate: Date,
    userId: ObjectId,
    products: [{
        type: String,
        ref: 'Product'
    }]

},
{
    timestamps: true
});

const OrderModel = mongoose.model('Order', OrderSchema);

export default OrderModel;