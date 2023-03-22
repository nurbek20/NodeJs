import React from 'react';
import s from './login.module.css'

const Register = () => {
 
    return (
        <>
            <section>
                <div className='container'>
                    <div className={s.form__content}>
                        <div className={s.form}>
                            <form >
                                <div>
                                    <input  className={s.input} placeholder='Full Name' type="text" />
                                </div>
                                <div>
                                    <input  className={s.input} placeholder='Email' type="email" />
                                </div>
                                <div>
                                    <input   className={s.input} placeholder='Password' type="password" />
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