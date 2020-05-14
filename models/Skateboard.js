import mongoose from 'mongoose';
const ObjectId = mongoose.SchemaTypes.ObjectId;
const SkateboardSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    description: String,
    price: {
        type: Number,
        required: true,
    },
    image_path: {
        type: String,
        required: true
    },
    categories: [ObjectId]
    },
    {
        timestamps: true
    });
const Skateboard = mongoose.model('Skateboard', SkateboardSchema);
export default Skateboard;