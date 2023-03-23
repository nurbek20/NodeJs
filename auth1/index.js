import express from "express"
import mongoose from "mongoose"
import UserModel from "./models/User.js"
import jwt from 'jsonwebtoken';
import checkAuth from "./utils/checkAuth.js";
import cors from "cors"

const app = express()
app.use(express.json())
app.use(cors())

mongoose
    .connect('mongodb+srv://admin:admin@cluster0.1pb1kpn.mongodb.net/users?retryWrites=true&w=majority')
    .then(() => console.log("DB ok"))
    .catch((err) => console.log("DB error", err))

    
app.post("/api/users/register", async (req, res) => {
    try {
        const doc = new UserModel({
            fullName: req.body.fullName,
            email: req.body.email,
            password: req.body.password
        })
        const user = await doc.save()
        const { ...userData } = user._doc
        res.json({ ...userData })

    } catch (err) {
        console.log(err)
        res.status(500).json({
            message: 'Не удалось зарегистрироваться'
        })
    }
})

app.post("/api/users/login", async (req, res) => {
    try {
        const user = await UserModel.findOne({ email: req.body.email })
        if (!user) {
            return res.status(404).json({
                message: 'Пользователь не найден'
            })
        }
        const token = jwt.sign(
            { _id: user._id },
            "secret123",
            { expiresIn: "30d" }
        )
        const { ...userData } = user._doc

        res.json({ ...userData, token })

    } catch (err) {
        console.log(err)
        res.status(500).json({
            message: 'Не удалось авторизоваться'
        })
    }
})

app.get('/api/users', checkAuth, async (req, res) => {
    try {
        const user = await UserModel.findById(req.userId)
        if (!user) {
            return res.status(404).json({
                message: 'Пользователь не найден'
            })
        }
        const { ...userData } = user._doc
        res.json({ ...userData })
    } catch (err) {
        console.log(err)
        res.status(500).json({
            message: 'Нет доступа'
        })
    }
})

const PORT = 5555
app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
})