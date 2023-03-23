import React from 'react'
import s from "./navbar.module.css"
import { Link } from "react-router-dom"

const Navbar = (props) => {
  const { val, setVal, searchClick, homeClick, user, logout } = props
  const keyPress = e => e.key === "Enter" ? searchClick() : null
  return (
    <nav className={s.navbar}>
      <div className='container'>
        <ul className={s.menu}>
          <h2 onClick={() => homeClick()}><Link to="/">Home</Link></h2>
          <li><Link to="/cart" >Cart</Link></li>
          <div className={s.form_action}>
            <input value={val} onKeyPress={(e) => keyPress(e)} onChange={(e) => setVal(e.target.value)} type="text" placeholder="Search" />
            <button
              className={s.btn}
              onClick={() => searchClick()}
            >Search</button>
          </div>
          <div className={s.form_auth}>
            {
              user ?
                <h2 onClick={logout}>logout</h2> :
                <>
                  <Link to="/login"><button type='submit' className={s.btn1}>Login</button></Link>
                  <Link to="/register"><button type='submit' className={s.btn1}>Register</button></Link></>
            }
          </div>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar