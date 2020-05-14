import UserModel from '../models/User';
import bcryptjs from 'bcrypt';
import jsonwebtoken from 'jsonwebtoken';

const UserController = {
    getAll(req, res) {
        UserModel.find({})
        .then(users => res.send(users));
    },

    async signup(req, res) {
        try {
            const hash = await bcryptjs.hash(req.body.params, 9); //con esto generamos el hash a partir de la contraseña
            req.body.password = hash; // ahora el password es el hash obtenido con el password introducido. 

            const user = await UserModel.create(req.body); // creamos el usuario a partir del mail y el hash siminisrtados en MongoDB.
            res.status(201).send({
                message: 'User successfully created',
                user
            });
        
        }catch (error) {
            console.error(error);
            res.status(500).send({
                message: 'There was a problem trying to sign up'
            })
        }
    },
    async login(req, res) {
        try {
            const user = await UserModel.findOne({ // buscamos el usuario con este email. 
                email: req.body.email
            });

            if (!user) {
                return res.status(400).send({
                    message: 'Wrong Credentials'
                });

            }
            const isMatch = await bcrypt.compare(req.body.password, user.password);
            if(!isMatch) {
                return res.status(400).send({
                    message: 'Wrong Credentials'
                });
            }
            const token = jsonwebtoken.sign({
                _id: user._id
            }, 'BanZaiMadafaker', {
                expiresIn: '2y'
            });
            if(user.tokens.length > 4) user.tokens.shift(); //si hay 5 tokens eliminamos el PRIMERO de la lista. 
            user.tokens.push(token); // añadimos el token al final de la lista.
            await user.save();
            res.send({
                message: `Banzai Mr. ${user.mail}`,
                user,
                token
            });
        }catch (error) {
            console.error(error)
            res.status(500).send({
                message: 'There was a problem trying to log in.'
            })
        }
    },

//aqui seguimos con los metodos
}

export default UserController;

