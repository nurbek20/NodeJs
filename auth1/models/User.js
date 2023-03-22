import { model, Schema } from "mongoose"

const UserSchema = new Schema({
    fullName: {
        type: String,
        required: true
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
    created:{
        type:Date,
        default:Date.now()
    }
})

export default model("Users", UserSchema)