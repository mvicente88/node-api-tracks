const { httpError } = require('../helpers/handleError')
const { encrypt, compare } = require('../helpers/handleBcrypt')
const { tokenSign } = require('../helpers/generateToken')
const userModel = require('../models/users')

//TODO: Login!
const loginCtrl = async(req, res) => {
    try {

        const mockUser = {
            name: 'Marisa',
            email: 'test@test.com',
            password: '123456789',
            avatar: 'https://media.licdn.com/dms/image/D4D03AQFCBtBhuzxZuw/profile-displayphoto-shrink_200_200/0/1690194665378?e=1698883200&v=beta&t=Au64pjtKWbLu5eZb0ejXFESqRZuZC58aqa-9laZqp1w'
        }

        const { email, password } = req.body


        if (mockUser.email !== 'test@test.com') {
            res.status(404)
            res.send({ error: 'User not found' })
        }

        const checkPassword = (mockUser.password === password)

        //TODO JWT 👉
        const tokenSession = await tokenSign(mockUser) //TODO: 2d2d2d2d2d2d2

        if (checkPassword) { //TODO Contraseña es correcta!
            res.send({
                data: mockUser,
                tokenSession
            })
            return
        }

        if (!checkPassword) {
            res.status(409)
            res.send({
                error: 'Invalid password'
            })
            return
        }

    } catch (e) {
        httpError(res, e)
    }
}

//TODO: Registramos usuario!
const registerCtrl = async(req, res) => {
    try {
        //TODO: Datos que envias desde el front (postman)
        const { email, password, name } = req.body

        const passwordHash = await encrypt(password) //TODO: (123456)<--- Encriptando!!
        const registerUser = await userModel.create({
            email,
            name,
            password: passwordHash
        })

        res.send({ data: registerUser })

    } catch (e) {
        httpError(res, e)
    }
}



module.exports = { loginCtrl, registerCtrl }