import instance from "./settings";
import Cookies from "js-cookie";

const register = (data) => {
    return instance.post("users/register", data)
}

const login = (data) => {
    return instance.post("users/login", data)
        .then(res => {
            Cookies.set("token", res.data.token)
        })
}

const getMe=()=>{
    return instance.get("users")
}

const services = {
    register,
    login,
    getMe
}
export default services