import React, { useEffect, useState } from 'react'
import './Add.css'
import { assets } from '../../assets/assets'
import axios from 'axios';
import { toast } from 'react-toastify';

const Add = ({url}) => {
    // const url = "http://localhost:4000";
    const [image, setImage] = useState(false);
    const [data, setData] = useState({
        name: "",
        description: "",
        price: "",
        category: "salad"
    })
    const onchangehandler = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setData(data => ({ ...data, [name]: value }))

    }

    const onsubmithandler = async (e) => {
        e.preventDefault()
        const formdata = new FormData();
        formdata.append("name", data.name)
        formdata.append("description", data.description)
        formdata.append("price", Number(data.price))
        formdata.append("category", data.category)
        formdata.append("image", image)
        const response = await axios.post(`${url}/api/food/add`, formdata)
        if (response.data.success) {
            setData({
                name: "",
                description: "",
                price: "",
                category: "salad"
            })
            setImage(false)
            toast("food added successully")

        }
        else {
            toast("error")

        }

    }
    return (
        <div className='add'>
            <form className='flex-col' onSubmit={onsubmithandler}>
                <div className="add-img-upload flex-col">
                    <p>upload image</p>
                    <label htmlFor='image'>
                        <img src={image ? URL.createObjectURL(image) : assets.upload_area} alt="" />
                    </label>
                    <input onChange={(e) => setImage(e.target.files[0])} type="file" id='image' hidden required />
                </div>
                <div className="add-product-name flex-col">
                    <p>Product name</p>
                    <input onChange={onchangehandler} value={data.name} type="text" name='name' placeholder='type here' />


                </div>
                <div className="add-product-description flex-aol">
                    <p>product description</p>
                    <textarea onChange={onchangehandler} value={data.description} name="description" id="" rows='6' placeholder='write content here'></textarea>

                </div>
                <div className="add-category-price">
                    <div className="add-category flex-col">
                        <p>product category</p>
                        <select onChange={onchangehandler} name='category'>
                            <option value="salad">Salad</option>
                            <option value="Rolls">Rolls</option>
                            <option value="Deserts">Deserts</option>
                            <option value="Sandwich">Sandwich</option>
                            <option value="Cake">Cake</option>
                            <option value="Pure veg">Pure veg</option>
                            <option value="Noodles">Noodles</option>

                        </select>
                    </div>
                    <div className="add-price flex-col">
                        <p>Product price</p>
                        <input onChange={onchangehandler} value={data.price} type="Numbe" name='price' placeholder='$20' />

                    </div>

                </div>
                <button type='submit'>Add</button>
            </form>



        </div>
    )
}

export default Add
