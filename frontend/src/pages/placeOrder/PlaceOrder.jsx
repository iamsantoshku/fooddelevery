
import React, { useContext, useState } from 'react';
import './PlaceOrder.css';
import { StoreContext } from '../../context/StoreContext';
import axios from 'axios';

const PlaceOrder = () => {
  const { gettotalcartamount, token, food_list, cartItem, url } = useContext(StoreContext);

  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    street: "",
    city: "",
    state: "",
    zipcode: "",
    country: "",
    phone: ""
  });

  const onchangehandle = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setData((data) => ({ ...data, [name]: value }));
  };

  const placeorder = async (e) => {
    e.preventDefault();
    let orderItems = [];
    food_list.map((item) => {
      if (cartItem[item._id] > 0) {
        let iteminfo = { ...item, quantity: cartItem[item._id] };
        orderItems.push(iteminfo);
      }
    });

    // const userId = localStorage.getItem('userId');

    let orderdata = {
      // userId,
      address: data,
      items: orderItems,
      amount: gettotalcartamount() + 2,
    };
    console.log(orderdata);

    try {
      let response = await axios.post(url + "/api/order/place", orderdata, {
        headers:{token} // Use Authorization header with Bearer token
      });
      console.log(response.data)

      if (response.data.success) {
        const { session_url } = response.data;
        window.location.replace(session_url);
        console.log(session_url)
      } else {
        alert("Error");
      }
      
    } catch (error) {
      console.error("Order placement error:", error); // Detailed error logging
      alert("Unauthorized: Please log in again.");
    }
  };

  // const placeorder = async (e) => {
  //   e.preventDefault();
  //   let orderItems = [];
  //   food_list.forEach((item) => {
  //     if (cartItem[item._id] > 0) {
  //       let iteminfo = { ...item, quantity: cartItem[item._id] };
  //       orderItems.push(iteminfo);
  //     }
  //   });
  
  //   const userId = localStorage.getItem('userId');
  //   const token = localStorage.getItem('token'); // Ensure the token is retrieved correctly
  
  //   let orderdata = {
  //     userId,
  //     address: data,
  //     items: orderItems,
  //     amount: gettotalcartamount() + 2,
  //   };
  
  //   try {
  //     let response = await axios.post("http://localhost:4000/api/order/place", orderdata, {
  //       headers: { Authorization: `Bearer ${token}` }, // Use Authorization header with Bearer token
  //     });
  
  //     if (response.data.success) {
  //       const { session_url } = response.data;
  //       window.location.replace(session_url);
  //     } else {
  //       alert("Error placing order");
  //     }
  //   } catch (error) {
  //     console.error("Order placement error:", error.response || error.message || error);
  //     alert("Unauthorized: Please log in again.");
  //   }
  // };
  

  return (
    <form onSubmit={placeorder} className="place-order-container">
      <div className="delivery-info">
        <h2>Delivery Information</h2>
        <div className="delivery-form">
          <div className="form-group">
            <input required name='firstName' onChange={onchangehandle} value={data.firstName} type="text" placeholder="First name" />
            <input required name='lastName' onChange={onchangehandle} value={data.lastName} type="text" placeholder="Last name" />
          </div>
          <div className="form-group">
            <input required name='email' onChange={onchangehandle} value={data.email} type="email" placeholder="Email address" />
          </div>
          <div className="form-group">
            <input required name='street' onChange={onchangehandle} value={data.street} type="text" placeholder="Street" />
          </div>
          <div className="form-group">
            <input required name='city' onChange={onchangehandle} value={data.city} type="text" placeholder="City" />
            <input required name='state' onChange={onchangehandle} value={data.state} type="text" placeholder="State" />
          </div>
          <div className="form-group">
            <input required name='zipcode' onChange={onchangehandle} value={data.zipcode} type="text" placeholder="Zip code" />
            <input required name='country' onChange={onchangehandle} value={data.country} type="text" placeholder="Country" />
          </div>
          <div className="form-group">
            <input required name='phone' onChange={onchangehandle} value={data.phone} type="text" placeholder="Phone" />
          </div>
        </div>
      </div>

      <div className="cart-totals">
        <h2>Cart Totals</h2>
        <div className="totals-summary">
          <div className="subtotal">
            <span>Subtotal</span>
            <span>${gettotalcartamount()}</span>
          </div>
          <div className="delivery-fee">
            <span>Delivery Fee</span>
            <span>$2</span>
          </div>
          <hr />
          <div className="total">
            <span>Total</span>
            <span>${gettotalcartamount() + 2}</span>
          </div>
        </div>
        <button type='submit' className="proceed-payment-btn">PROCEED TO PAYMENT</button>
      </div>
    </form>
  );
};

export default PlaceOrder;


