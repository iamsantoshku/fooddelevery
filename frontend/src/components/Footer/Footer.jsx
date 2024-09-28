import React from "react";
import './Footer.css'
import { NavLink } from 'react-router-dom'
import { LuInstagram } from "react-icons/lu";
import { FaBeer } from "react-icons/fa";
import { BiLogoPlayStore } from "react-icons/bi";
import { CiLinkedin } from "react-icons/ci";
import { FaTwitter } from "react-icons/fa";
const Footer = () => {
    return (
        <>
            <div className="foot" id="foot-er">
                <div className="contain">
                    <h1>For Better Exprience Download <br /></h1>
                    <h2>Tomato App</h2>
                    <NavLink to="https://play.google.com/store/games?hl=en"><BiLogoPlayStore className="icon2" /></NavLink>


                </div>
                <div className="container">
                    {/* h1hhh */}
                    <div className="container1">
                        {/* <h2>Exclusive</h2> */}
                        <div className="data1">
                            <h3>Exclusive</h3>
                            <h4>Subscribe</h4>
                            <h6>Get 10% off on your first oreder</h6>
                            <input type="text" placeholder="Enter your email" />
                            <i class="fa-regular fa-paper-plane"></i>

                        </div>
                    </div>
                    <div className="container2">
                        <div className="data2">
                            <h3>support</h3>
                            <h6>rohini sector-22,new delhi</h6>
                            <h6>email@gmail.com</h6>
                            <h6>7033825196</h6>

                        </div>


                    </div>
                    <div className="container3">
                        <div className="data3">
                            <h3>Account</h3>
                            <h6>My Account</h6>
                            <h6>Login/signup</h6>
                            <h6>Cart</h6>
                            <h6>Wishlist</h6>
                            <h6>shop</h6>

                        </div>

                    </div>
                    <div className="container4">
                        <div className="data4">
                            <h3>Quicklink</h3>
                            <NavLink><h6>privacy polycy</h6></NavLink>
                            <NavLink><h6>Term of use</h6></NavLink>
                            <NavLink><h6>FAQ</h6></NavLink>
                            <NavLink><h6>Contact</h6></NavLink>
                        </div>

                    </div>
                    <div className="container5">
                        <div className="data5">
                            <h3>Download-app</h3>
                            <h6>save $3 for new user only</h6>
                            <img className="img1" src="https://media.istockphoto.com/id/1322805937/vector/bar-code.jpg?s=2048x2048&w=is&k=20&c=mdGh56JZi0cCDybmNA1Kr2JN8XqF0SLXB1pA5bMWM5I=" alt="" /><br />
                            <div className="ico">
                                <NavLink to="https://www.linkedin.com/in/santosh-kumar-3a9939228/"><CiLinkedin className="icon3" /></NavLink>
                                <FaTwitter className="icon3" />

                                <NavLink to="https://www.instagram.com/santosh_chaudhary0055?igsh=MWgwbzJhd2J0eHV4NA=="><LuInstagram className="icon3" /></NavLink>

                            </div>

                        </div>

                    </div>
                </div>
            </div>

            {/* <p>@ Copy right rimel 2024. All Right Reserved</p> */}
        </>

    )
}
export default Footer;