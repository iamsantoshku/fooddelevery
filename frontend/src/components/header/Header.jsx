import React from 'react'
import './Header.css'
import { menu_list } from '../../assets/assets'
const Header = ({category, setcategry}) => {
  return (
    <>
      <div className='header'>
        <div className="header-contents">
          <h2>Order your favrote food</h2>
          <p>chose form a diverse menu featuring a Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur ipsum sit voluptatum possimus? Sapiente cupiditate iusto explicabo laboriosam repellat sit!</p>
          <button>view menu</button>
        </div>

      </div>
      <div className="exploremenu" id='explore-menu'>
        <h2>Explore our menu</h2>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloremque, ullam! Veniam ducimus dolore quambr<br></br> perspiciatis quae omnis consequuntur fugiat? Dignissimos.</p>
        <div className="menuimg-container">
          {menu_list.map((item, ind) => (
            <div onClick={()=>setcategry(prev=>prev === item.menu_name?"All":item.menu_name)} key={ind} className="menuimg">
              <img className={category === item.menu_name?"active":""} src={item.menu_image} alt="" />
              <h3>{item.menu_name}</h3>
            </div>
          ))}
        </div>
        <hr />
      </div>

    </>

  )
}

export default Header
