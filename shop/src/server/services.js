import instance from "./settings";

const register=(data)=>{
    console.log("data>>>", data)
    return instance.post("users/register", data)
}

const services={
    register
}
export default services