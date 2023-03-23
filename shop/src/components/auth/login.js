import React from 'react'
import { Link } from 'react-router-dom'
import s from './login.module.css'
import { useForm } from "react-hook-form";
import services from '../../server/services';


const Login = (props) => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm()
    const onSubmit = async (data) => {
        const object = {
            email: data.email,
            password: data.password
        }
        await services.login(object).then(res => {
                props.getMe(res.data)
            }).catch(e => console.log(e))
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
                                        {...register("email", { required: "not empty" })}
                                        className={s.input} placeholder='Email' type="email" />
                                    {errors.email && <span>{errors.email.message}</span>}
                                </div>
                                <div>
                                    <input
                                        {...register("password", { required: "not empty", minLength: { value: 6, message: "at least 6 characters" } })}
                                        className={s.input} placeholder='Password' type="password" />
                                    {errors.password && <span>{errors.password.message}</span>}
                                </div>
                                <div className={s.register}><button className={s.btnlogin} type='submit'>Войти</button>
                                    <Link to="/register"><button className={s.btnlogin}>Регистрация</button></Link>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Login;