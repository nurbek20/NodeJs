import React, { useState, useEffect } from 'react'
import Cart from "./cart/cart"
import Home from './home/home';
import { Routes, Route } from 'react-router-dom';
import Navbar from '../components/navbar';
import Data from "../data/products.json";
import { category } from "../category"
import Login from '../components/auth/login';
import Register from '../components/auth/register';
import Cookies from 'js-cookie';
import services from "../server/services"

const Main = () => {
  const [data, setData] = useState(Data)
  const [card, setCard] = useState([])
  const [val, setVal] = useState("")
  const [user, setUser] = useState("")

  useEffect(()=>{
    getMe()
  },[user])

  const getMe=async()=>{
    await services.getMe().then(res =>{
      setUser(res.data.fullName)
    })
  }

  const logout=()=>{
    setUser("")
    Cookies.remove("token")
  }

  const categoryClick = (elem) => {
    const filterData = Data.filter((item) => item.category === elem)
    setData([...filterData])
  }
  const addToCard = (id) => {
    const data = Data.find((item) => item.id === id)
    setCard([...card, data])
    alert("add to card")
  }
  const deleteCard = (id) => {
    console.log("delete", id)
    const conf = window.confirm("delete")
    if (conf) {
      setCard([...card.filter((item) => item.id !== id)])
    }
  }

  const searchClick = () => {
    const search = Data.filter(elem => {
      return elem.title.toLocaleLowerCase().indexOf(val.toLocaleLowerCase()) > -1
    })
    setData(search)
    setVal("")
  }
  const homeClick = () => {
    setData(Data)
  }

  return (
    <div>
      <Navbar
        setVal={setVal}
        val={val}
        searchClick={searchClick}
        homeClick={homeClick}
        user={user}
        logout={logout}
      />
      <Routes>
        <Route path="/" element={<Home
          data={data}
          category={category}
          categoryClick={categoryClick}
          addToCard={addToCard}
        />} />
        <Route path="/cart" element={<Cart
          card={card}
          deleteCard={deleteCard}
        />} />
        <Route path="/login" element={<Login getMe={getMe} />} />
        <Route path="/register" element={<Register />} />
      </Routes>

    </div>
  )
}
export default Main