import React from 'react';
import s from './login.module.css';
import { useForm } from "react-hook-form";
import services from '../../server/services';

const Register = () => {
    const {register, handleSubmit, formState:{errors}, reset}=useForm()
    const onSubmit=async(data)=>{
        const object={
            fullName:data.fullName,
            email:data.email,
            password:data.password
        }
        const doc=await services.register(object)
        console.log("doc>>>", doc)
    }
    return (
        <>
            <section>
                <div className='container'>
                    <div className={s.form__content}>
                        <div className={s.form}>
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <div>
                                    <input 
                                    {...register("fullName", {required:"not empty"})}
                                    className={s.input} placeholder='Full Name' type="text" />
                                    {errors.fullName && <span>{errors.fullName.message}</span>}
                                </div>
                                <div>
                                    <input 
                                    {...register("email", {required:"not empty"})}
                                    className={s.input} placeholder='Email' type="email" />
                                    {errors.email && <span>{errors.email.message}</span>}
                                </div>
                                <div>
                                    <input 
                                    {...register("password", {required:"not empty", minLength:{value:6, message:"at least 6 characters"}})}
                                    className={s.input} placeholder='Password' type="password" />
                                    {errors.password && <span>{errors.password.message}</span>}
                                </div>
                                <button className={s.btnlogin} type='submit'>Регистрация</button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Register;