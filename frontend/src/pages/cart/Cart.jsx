import React, { useContext } from 'react'
import './Cart.css'
import { StoreContext } from '../../context/StoreContext'
import { useNavigate } from 'react-router-dom'
const Cart = () => {
  const{ food_list,cartItem, removefromcart,gettotalcartamount,url} = useContext(StoreContext)
  const navigate = useNavigate();
  return (   
    <div className='cart'>
      <div className="cart-item">
        <div className="cart-items-title">
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>qauntity</p>
          <p>Total</p>
          <p>remove</p>      
        </div>
        <br />
        <hr />
        {
          food_list.map((item, ind)=>{
          if(cartItem[item._id]>0){
            return (
              <div>
                <div className="cart-items-title cart-items-item">
                <img src={url+"/images/"+item.image} alt="" />
                <p>{item.name}</p>
                <p>${item.price}</p>
                <p>{cartItem[item._id]}</p>
                {/* <p>{item.price}</p> */}
                <p>${item.price*cartItem[item._id]}</p>
                <p onClick={()=>removefromcart(item._id)} className='cross'>{"X"}</p>
              </div>
              <hr />

              </div>
              
            )
          }

          })
        }
      </div>
      <div className="cart-bottom">
        <div className="cart-total">
          <h2>Cart Total</h2>
          <div>
            <div className="cart-total1">
              <p>subtotal</p>
              <p>${gettotalcartamount()}</p>
            </div>
            
            <div className="cart-total-details">
              <p>Delivery fee</p>
              <p>{2}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <p>Total</p>
              <p>${gettotalcartamount()+2}</p>
            </div>
          </div>
          <button onClick={()=>navigate("/order")}>PROCEED TO CHECKOUT</button>
        </div>
        <div className="cart-promocode">
          <div>
            <p>if you have , Enter it here</p>
            <div className="cart-promocode-input">
              <input type="text" placeholder='enter permocode'/>
              <button>Submit</button>
            </div>
          </div>
        </div>
      </div>
       
      
    </div>
  )
}

export default Cart
