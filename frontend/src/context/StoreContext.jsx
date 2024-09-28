import axios from "axios";
import { createContext, useEffect, useState } from "react";

// "http://localhost:4000"
// const url = process.env.BACKEND_URL


export const StoreContext = createContext(null)
const StoreContextProvider = (props) =>{

    const [cartItem, setcartItems] = useState({})
     const url = import.meta.env.VITE_BACKEND_URL;

    const [token, settoken] = useState("")
    const [food_list, setfood_list]  = useState([])
    const addtocart = async(itemId)=>{
        if(!cartItem[itemId]){
            setcartItems((prev)=>({...prev,[itemId]:1}))
        }
       
        else{
            setcartItems((prev)=>({...prev,[itemId]:prev[itemId]+1}))
        }

        if (token) {
            // const userId = localStorage.getItem('userId'); // Make sure userId is stored in localStorage
            await axios.post(url + "/api/cart/add", {itemId},{headers:{ token }});
        }
        

    }
    
    const removefromcart = (itemId)=>{
        setcartItems((prev)=>({...prev,[itemId]:prev[itemId]-1}))
    }

    const gettotalcartamount = ()=>{
        let totalamount = 0;
        for(const item in cartItem){
            if(cartItem[item]>0){
                let iteminfo = food_list.find((prd)=>prd._id===item);
                totalamount += iteminfo.price*cartItem[item]

            }
           
        }
        return totalamount;
    }
    const fetchfoodlist = async()=>{
        const response = await axios.get(url + "/api/food/list");
        setfood_list(response.data.data)
       
    }  

    useEffect(()=>{
        async function loadData(){
            await fetchfoodlist()
            if(localStorage.getItem("token")){
                settoken(localStorage.getItem("token"))
            }
        }
        loadData()
    },[])
    
    const contextValue = {
        food_list,
        cartItem,
        setcartItems,
        addtocart,
        removefromcart,
        gettotalcartamount,
        url,
        token,
        settoken

    }
    return(
        <StoreContext.Provider value={contextValue}>
            {props.children}

        </StoreContext.Provider>
    )
}
export default StoreContextProvider;