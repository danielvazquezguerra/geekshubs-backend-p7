import jsonwebtoken from 'jsonwebtoken';
import UserModel from '../models/User.js'

const authentication = async (req, res, next) => {
    try {
        const token = req.headers.authorization;
        const payload = jsonwebtoken.verify(token, 'BanZaiMadafaker');
        const user = await UserModel.findOne({
            _id: payload._id,
            tokens: token
        });
        if (!user) {
            return res.status(401).send({
                message: 'You are not authorized'
            });

        }
        req.user = user;
        next();
    }catch (error) {
        console.error(error)
        res.status(401).send({
            message: 'You are not authorized',
            error
        })
    }
}


export default authentication;