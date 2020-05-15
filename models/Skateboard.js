import mongoose from 'mongoose';
const ObjectId = mongoose.SchemaTypes.ObjectId;
const SkateboardSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    description: {
      type: String,
      required: true,  
    },
    price: {
        type: Number,
        required: true,
    },
    brand: {
        type: String,
        required: true,
    },
    image_path: [{
        type: String,
        required: true
    }],
    categoryId: [{
        type: ObjectId,
        ref: 'Category'
    }]
    },  
    {
        timestamps: true
    });
const Skateboard = mongoose.model('Skateboards', SkateboardSchema);
export default Skateboard;