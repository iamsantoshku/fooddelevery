import React, { useState } from 'react'
import './Home.css'
import Header from '../../components/header/Header'
import FoodDisplay from '../../components/foodDisplay/FoodDisplay'
import Footer from '../../components/Footer/Footer'
const Home = () => {
  const [category, setcategry] = useState("All")
  return (
    <div>
       <Header category={category} setcategry={setcategry}/>
       <FoodDisplay category={category}/>
       {/* <Footer/> */}
    </div>
  )
}

export default Home
