import instance from "./settings";

const register=(data)=>{
    console.log("data>>>", data)
    return instance.post("users/register", data)
}

const login=(data)=>{
    return instance.post("users/login", data)
}

const services={
    register,
    login
}
export default services