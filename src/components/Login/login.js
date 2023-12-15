import React, { useState } from "react";
import "./login.css"
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../AuthContext/AuthContext";

const Login = () => {
    const navigate = useNavigate();
    const { setIsLoggedIn } = useAuth();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:8080/v1/users/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });

      const data = await response.json();

      if (response.ok) {
        setMessage(data.message);
        setUsername("");
        setPassword("");
        setIsLoggedIn(true); // Cập nhật trạng thái đăng nhập thành true
        navigate("/home")
      } else {
        setMessage(data.message);
      }
    } catch (error) {
      console.error(error);
      setMessage("An error occurred");
    }
  };

  return (
    <div className="login-container">
      <h2 className="login-header">Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="input-user-login">
          <label>Username:</label>
          <input
          className="input-login"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="input-user-login">
          <label>Password:</label>
          <input
            className="input-login"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button className="button-login" type="submit">Login</button>
        
            <div className="createon-account"> 
                Create on 
                
                <Link to="/signin" style={{ textDecoration: 'none' }}> Account ?</Link>
            </div>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default Login;


















// // 
// import React, { useEffect, useState } from "react";
// import { toast, ToastContainer } from 'react-toastify';
// import { useNavigate } from "react-router-dom";
// import { Link } from "react-router-dom";
// import { loginApi } from "../services/UserServices";
// import 'react-toastify/dist/ReactToastify.css';
// import { css } from "@emotion/react";
// import { ClipLoader } from "react-spinners";
// const Login = () => {
//     let navigate = useNavigate();



//     const [email, setEmail] = useState("");
//     const [password, setPassword] = useState("");
//     const [isShowPassword, setIsShowPassword ] = useState(false);
//     const [loadingAPI, setLoadingAPI] = useState(false);
    

//     useEffect(() => {
//         let token = localStorage.getItem("token");
//         if (token){
//             navigate("/home");
//         }

//     }, [navigate])
    
//     const handleLogin = async () => {
//         alert("Đăng nhập thành công")
//         if ( !email || !password){
//             toast.error("Email/Password is required");
//             return;
//         }
//         setLoadingAPI(true);
//         try{
//             const res = await loginApi(email, password);
//             console.log(">>> Check res: ", res);


//             if (res && res.token) {
//                 localStorage.setItem("token", res.token);
//                 navigate("/home");
//               } else {
//                 toast.error(res?.data?.error || "Login failed");
//               }
//             } catch (error) {
//               toast.error("An error occurred. Please try again later.");
//             }
//             setLoadingAPI(false);

//         };
//         const override = css`
//         display: block;
//         margin: 0 auto;
//       `;


//     return (
//         <>
//         <div className="login-container col-12 col-sm-4">
//             <div className="tittle">Login</div>
//             <div className="text">Email or username</div>
//             <input 
//             className="inputlogin" 
//             type="text" 
//             placeholder="Email or username..."
//             value={email}
//             onChange={(event) => setEmail(event.target.value)}
//             />

//             <div className="input-2">
//                 <input 
//                 className="inputlogin" 
//                 type={isShowPassword === true ? " text" : "password"} 
//                 placeholder="Password..."
//                 value={password}
//                 onChange={(event) => setPassword(event.target.value)}
//                 />
//                 <i className={isShowPassword === true ? "fa-solid fa-eye" : "fa-solid fa-eye-slash" }
//                     onClick={() => setIsShowPassword(!isShowPassword)}
//                 ></i>
//             </div>
            

            
                
//                     <Link to="/home">
//                     <button className={email && password ? "active" : "" }
//                 disabled= {(email && password) ? false : true}
//                 onClick={() => handleLogin()}
//                 >

// {loadingAPI && <i className="fa-solid fa-sync fa-spin"></i> }    
//                 &nbsp; Login
//                 </button>
                        
//                     </Link>
                
            
            

//             <div className="back">
//             Create on 
//             <Link to="/signin"> Account ?</Link>
//             </div>
        
        
//         </div>
//         </>
//     )
// }
// export default Login;
