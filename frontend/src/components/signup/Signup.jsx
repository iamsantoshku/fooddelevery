import React, { useState } from "react";
import './Signup.css';
import { NavLink, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { StoreContext } from "../../context/StoreContext";
// 'http://localhost:4000/api/user/register'

const Signup = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const{ url} = useContext(StoreContext)

    const handleSignup = async () => {
        let result = await fetch(url + '/api/user/register', {
            method: 'POST',
            body: JSON.stringify({ name, email, password }),
            headers: {
                'Content-Type': 'application/json'
            },
        });
        

        result = await result.json();
        console.warn(result);

        // Check if signup was successful
        if (result.success) {
            localStorage.setItem("user", JSON.stringify(result));
            navigate('/');
        } else {
            alert(result.message); // Show an error message
        }
    };

    return (
        <>
            <div className="sign">
                <div className="backimg">
                    <img src="https://images.pexels.com/photos/3434523/pexels-photo-3434523.jpeg?auto=compress&cs=tinysrgb&w=400" alt="" />
                </div>

                <div className="text-box">
                    <h1>Create Your Account</h1>
                    <div className="textp">
                        <p>Enter Your Details</p>
                    </div>
                    <input
                        className="text"
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Enter Name"
                    />
                    <input
                        className="text"
                        type="text"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter Email"
                    />
                    <input
                        className="text"
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Enter Password"
                    />
                    <button onClick={handleSignup} className="butt">Create an Account</button><br />
                    
                    <button className="cret2">Sign up with Google</button><br />
                    <div className="link">
                        <p>Already have an account? <NavLink to='/login'>Login</NavLink></p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Signup;




// import React, { useState, useEffect } from "react";
// import './Signup.css';
// import { NavLink, useNavigate } from "react-router-dom";

// const Signup = () => {
//     const [name, setName] = useState("");
//     const [email, setEmail] = useState("");
//     const [pass, setPass] = useState("");
//     const navigate = useNavigate();

    

//     const clickhand = async () => {
//         let result = await fetch('http://localhost:4000/api/user/register', {
//             method: 'POST',
//             body: JSON.stringify({ name, email, password: pass }),
//             headers: {
//                 'Content-Type': 'application/json'
//             },
//         });
    
//         result = await result.json();
//         console.log(result); // Inspect the response here
    
//         if (result) {
//             localStorage.setItem("user", JSON.stringify(result));
//             navigate('/');
//         } else {
//             alert("Signup failed. Please try again.");
//         }
//     };
    

//     return (
//         <div className="sign">
//             <div className="backimg">
//                 <img src="https://images.pexels.com/photos/3434523/pexels-photo-3434523.jpeg?auto=compress&cs=tinysrgb&w=400" alt="" />
//             </div>
//             <div className="text-box">
//                 <h1>Create Your Account</h1>
//                 <div className="textp">
//                     <p>Enter Your Details</p>
//                 </div>
//                 <input
//                     className="text"
//                     type="text"
//                     value={name}
//                     onChange={(e) => setName(e.target.value)}
//                     placeholder="Enter Name"
//                 />
//                 <input
//                     className="text"
//                     type="text"
//                     value={email}
//                     onChange={(e) => setEmail(e.target.value)}
//                     placeholder="Enter Email"
//                 />
//                 <input
//                     className="text"
//                     type="password"
//                     value={pass}
//                     onChange={(e) => setPass(e.target.value)}
//                     placeholder="Enter Password"
//                 />
//                 <button onClick={clickhand} className="butt">Create an Account</button><br />
//                 <button className="cret2">Sign up with Google</button><br />
//                 <div className="link">
//                     <p>Already have an Account? <NavLink to='/login'>Login</NavLink></p>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Signup;


