import mongoose from 'mongoose';
const ObjectId = mongoose.SchemaTypes.ObjectId;
const UserSchema = new mongoose.Schema({
    // name: {
    //     type: String,
    //     required: true
    // },
    username: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    // address: {
    //     type: String,
    //     required: true
    // },
    tokens: {
        type: [String],
        required: true
    },
    // productId: [{
    //     type: ObjectId,
    //     ref: 'Skateboard'
    // }],
    // orderId: [{
    //     type: ObjectId,
    //     ref: 'Order'
    // }]
    },
    {
        timestamps: true
    });

    const UserModel = mongoose.model('User', UserSchema);


    export default UserModel;