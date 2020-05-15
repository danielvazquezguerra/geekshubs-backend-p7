import mongoose from 'mongoose';
const ObjectId = mongoose.SchemaTypes.ObjectId;
const CategorySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true, 
    },
    skateboardId: [{
        type: ObjectId,
        ref: 'SkateModel'
    }]
});
const Category = mongoose.model('Category', CategorySchema);

export default Category;