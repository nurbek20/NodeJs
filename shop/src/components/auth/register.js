import React from 'react';
import s from './login.module.css'
import { useForm } from "react-hook-form"

const Register = () => {
    const {register, handleSubmit, formState:{errors}, reset}=useForm()
    const onSubmit=(data)=>{
        console.log("data>>>", data)
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
                                </div>
                                <div>
                                    <input 
                                    {...register("email", {required:"not empty"})}
                                    className={s.input} placeholder='Email' type="email" />
                                </div>
                                <div>
                                    <input 
                                    {...register("password", {required:"not empty"})}
                                    className={s.input} placeholder='Password' type="password" />
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