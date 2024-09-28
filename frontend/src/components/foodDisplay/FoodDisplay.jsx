import React, { useContext } from 'react'
import './FoodDisplay.css'
import { StoreContext } from '../../context/StoreContext'
import FoodIteam from '../FoodItem/FoodIteam'
const FoodDisplay = ({category}) => {
    const {food_list} = useContext(StoreContext)
  return (
    <div className='food-display ' id='food-display'>
      <h2>Top dises near you</h2>
      <div className="food-display-list">
        {food_list.map((item, ind)=>{
          if(category==="All" || category === item.category){
            return <FoodIteam key={ind} id={item._id} name={item.name} description={item.description} price={item.price} image={item.image}/>

          }   
        })}
      </div>
    </div>
  )
}

export default FoodDisplay
