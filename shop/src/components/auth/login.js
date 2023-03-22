import React from 'react'
import {Link} from 'react-router-dom'
import s from './login.module.css'

const Login = () => {


    return (
        <>
            <section>
                <div className='container'>
                    <div className={s.form__content}>
                        <div className={s.form}>
                            <form >
                                <div>
                                    <input  className={s.input} placeholder='Email' type="email" />
                                    
                                </div>
                                <div>
                                    <input  className={s.input} placeholder='Password' type="password" />
                                </div>
                                <div className={s.register}><button className={s.btnlogin} type='submit'>Войти</button>
                                <Link to="/register"><button  className={s.btnlogin}>Регистрация</button></Link>
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