// import React, { useContext, useState } from 'react'
// import './Navbar.css'
// import { assets } from '../../assets/assets'
// import { NavLink, useNavigate } from 'react-router-dom'
// import { StoreContext } from '../../context/StoreContext'

// const Navbar = () => {
//     const [menu, setMenu] = useState("")
//     const {gettotalcartamount} = useContext(StoreContext)
//     const navigate = useNavigate();
//   return (
//     <div>
//         <div className="navbar">
//             <img src={assets.logo} alt="" className="logo" />
//             <ul className='navbar-menu'>
//                 <NavLink to="/" onClick={()=>setMenu("home")} className={menu ==="home"?"active":""}>home</NavLink>
//                 <a href='#explore-menu' onClick={()=>setMenu("menu")} className={menu ==="menu"?"active":""}>menu</a>
//                 <li onClick={()=>setMenu("mobile-app")}className={menu ==="mobile-app"?"active":""}>mobile-app</li>
//                 <a href='#foot-er' onClick={()=>setMenu("contact-us")} className={menu ==="contact-us"?"active":""}>contact-us</a>
//                 {/* <li onClick={()=>setMenu("")} className={menu ==="contact-us"?"active":""}>contact-us</li> */}

//             </ul>
//             <div className="navbar-right">
//                 <img src={assets.search_icon} alt="" />
//                 <div className="navbar-search-icon">
//                     <NavLink to="/cart"><img src={assets.basket_icon} alt="" /></NavLink>
//                     <div className={gettotalcartamount()===0?"":"dot"}></div>
//                 </div>
//                 <div className="butt1">
//                 <NavLink to="/signup">sign up</NavLink>

//                 </div>
                
//                 {/* <Navbar to="/signup"><button>sign in</button></Navbar> */}
//             </div>
//         </div>

//     </div>
//   )
// }

// export default Navbar

import React, { useContext, useState, useEffect } from 'react';
import './Navbar.css';
import { assets } from '../../assets/assets';
import { NavLink, useNavigate } from 'react-router-dom';
import { StoreContext } from '../../context/StoreContext';

const Navbar = () => {
    const [menu, setMenu] = useState("");
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const { gettotalcartamount  } = useContext(StoreContext);
    const navigate = useNavigate();

    useEffect(() => {
        // Check if user data is present in localStorage to determine authentication status
        const user = localStorage.getItem("user");
        if (user) {
            setIsAuthenticated(true);
        }
    });

    const handleLogout = () => {
        // Clear user data and log out
        localStorage.removeItem("user");
        setIsAuthenticated(false);
        navigate('/login'); // Redirect to login page after logout
    };

    return (
        <div>
            <div className="navbar">
                <img src={assets.logo} alt="" className="logo" />
                <ul className='navbar-menu'>
                    <NavLink to="/" onClick={() => setMenu("home")} className={menu === "home" ? "active" : ""}>home</NavLink>
                    <a href='#explore-menu' onClick={() => setMenu("menu")} className={menu === "menu" ? "active" : ""}>menu</a>
                    <li onClick={() => setMenu("mobile-app")} className={menu === "mobile-app" ? "active" : ""}>mobile-app</li>
                    <a href='#foot-er' onClick={() => setMenu("contact-us")} className={menu === "contact-us" ? "active" : ""}>contact-us</a>
                </ul>
                <div className="navbar-right">
                    <img src={assets.search_icon} alt="" />
                    <div className="navbar-search-icon">
                        <NavLink to="/cart"><img src={assets.basket_icon} alt="" /></NavLink>
                        <div className={gettotalcartamount() === 0 ? "" : "dot"}></div>
                    </div>
                    {isAuthenticated ? (
                        <div className="auth-buttons">
                            <NavLink to="/admin"><img className="imgicon" src={assets.profile_icon} alt="" /></NavLink>
                            <button onClick={handleLogout} className="logout-button">Logout</button>
                        </div>
                    ) : (
                        <div className="butt1">
                            <NavLink to="/signup">Sign Up</NavLink>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Navbar;

