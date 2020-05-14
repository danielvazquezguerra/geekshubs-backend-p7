import mongoose from 'mongoose';
const ObjectId = mongoose.SchemaTypes.ObjectId;
const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    categories: [ObjectId]
    },
    {
        timestamps: true
    });

    const UserModel = mongoose.model('User', UserSchema);

    // UserSchema.methods.encrypPass = password => {
    //  const salt =  await bcryptjs.genSalt();
    //  return await bcryptjs.hash(password, salt);
    // }

    // UserSchema.methods.matchPass = (password,hash ) => {
    //   return bcryptjs.compare(password, hash)
    // }

    export default UserModel;