import React, { useState, useEffect } from "react";
import './Signup.css';
import { NavLink, useNavigate } from "react-router-dom";
import { StoreContext } from "../../context/StoreContext";
import { useContext } from "react";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const{ url} = useContext(StoreContext);

    // Check if the user is already logged in
    useEffect(() => {
        const auth = localStorage.getItem('user');
        if (auth) {
            navigate('/');
        }
    }, [navigate]);

    const handleLogin = async () => {
        // Sending login request to backend
        let result = await fetch(url + '/api/user/login', {
            method: 'POST',
            body: JSON.stringify({ email, password }),
            headers: {
                'Content-Type': 'application/json'
            }
        });

        result = await result.json();
        console.log(result);

        // If login is successful, store the token and navigate to the homepage
        if (result.success) {
            localStorage.setItem("user", JSON.stringify(result));
            navigate('/');
        } else {
            alert(result.message || "Please enter correct details");
        }
    };

    return (
        <>
            <div className="sign">
                <div className="backimg">
                    <img src="https://images.pexels.com/photos/1640773/pexels-photo-1640773.jpeg?auto=compress&cs=tinysrgb&w=400" alt="" />
                </div>

                <div className="text-box">
                    <h1>Login With Your Account</h1>
                    <div className="textp">
                        <p>Enter Your Details</p>
                    </div>
                    <input
                        className="text"
                        type="email"
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
                    <button onClick={handleLogin} className="butt">Login with Your Account</button><br />
                    <button className="cret2">Login with Google</button><br />
                    <div className="link">
                        <p>Don’t have an account? <NavLink to='/signup'>Sign up</NavLink></p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Login;




// const onlogin = async(event)=>{
    //     event.preventDefault();
    //     let newurl = url;
    //     if(currState === "Login"){
    //         newurl +="api/user/login"
    //     }
    //     else{
    //         newurl += "api/user/register"
    //     }
    //     const response = await axios.post(newurl, data)
    //     if(response.data.success){

    //         settoken(response.data.token);
    //         localStorage.setItem("toekn", response.data.token)

    //     }
    //     else{
    //         alert(response.data.message)
    //     }



    // }

//     import React, { useState } from "react";
// import './Signup.css';
// import { NavLink, useNavigate } from "react-router-dom";

// const Login = () => {
//     const [email, setEmail] = useState("");
//     const [pass, setPass] = useState("");
//     const [error, setError] = useState(""); // State to handle error messages
//     const navigate = useNavigate();

//     const clickhand = async () => {
//         setError(""); // Reset error before making the request

//         let result = await fetch('http://localhost:4000/api/user/login', {
//             method: 'POST',
//             body: JSON.stringify({ email, password: pass }),
//             headers: {
//                 'Content-Type': 'application/json'
//             },
//         });

//         // Check if the request was successful
//         if (result.ok) {
//             result = await result.json();
//             localStorage.setItem("user", JSON.stringify(result));
//             navigate('/');
//         } else {
//             // Handle failed login
//             const errorResponse = await result.json();
//             setError(errorResponse.message || "Login failed. Please check your credentials."); // Display the error
//         }
//     }

//     return (
//         <>
//             <div className="sign">
//                 <div className="backimg">
//                     <img src="https://images.pexels.com/photos/1640773/pexels-photo-1640773.jpeg?auto=compress&cs=tinysrgb&w=400" alt="" />
//                 </div>

//                 <div className="text-box">
//                     <h1>Login With Your Account</h1>
//                     <div className="textp">
//                         <p>Enter Your details</p>
//                     </div>
//                     {error && <p className="error">{error}</p>} {/* Display the error if there is one */}
//                     <input className="text" type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter Email" />
//                     <input className="text" type="password" value={pass} onChange={(e) => setPass(e.target.value)} placeholder="Enter Password" />
//                     <button onClick={clickhand} className="butt">Login with your account</button><br />
//                     <button className="cret2">Login with Google</button><br />
//                     <div className="link">
//                         <p>Don’t have an account? <NavLink to='/signup'>Sign Up</NavLink></p>
//                     </div>
//                 </div>
//             </div>
//         </>
//     )
// }

// export default Login;
