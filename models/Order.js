import mongoose from 'mongoose';
const ObjectId = mongoose.SchemaTypes.ObjectId;
const OrderSchema = new mongoose.Schema({
    status: String,
    deliveryDate: Date,
    userId: ObjectId,
    products: [{
        type: ObjectId,
        ref: 'UserModel'
    }]

},
{
    timestamps: true
});

const Order = mongoose.model('Order', OrderSchema);

export default Order;