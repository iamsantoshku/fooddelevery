import React, { useContext, useState } from 'react'
import './FoodItem.css'
import { assets } from '../../assets/assets'
import { StoreContext } from '../../context/StoreContext';

const FoodIteam = ({id,name,price,description,image}) => {
    // const[itemcount, setitemcount] = useState(0);
    const {cartItem, addtocart, removefromcart,url} = useContext(StoreContext)
       
       
  return (
    <div className='food-item'>
        <div className="food-item-img-container">
            <img className='food-item-image' src={url+"/images/"+image} alt="" />
            {!cartItem[id]
            ?<img className='add' onClick={()=>addtocart(id)} src={assets.add_icon_white} alt=''/>
            :
            <div className="food-item-count">
                <img onClick={()=>removefromcart(id)}  src={assets.remove_icon_red} alt="" />
                <p>{cartItem[id]}</p>
                <img onClick={()=>addtocart(id)}   src={assets.add_icon_green} alt="" />

            </div>
                
            }
        </div>
        <div className="food-item-info">
            <div className="food-item-name-rating">
                <p>{name}</p>
                <img src={assets.rating_starts} alt="" />
            </div>
            <p className="food-item-discription">{description}</p>
            <p className="food-iteam-price">${price}</p>
            {/* <p>{id}</p> */}
        </div>
      
    </div>
  )
}

export default FoodIteam
