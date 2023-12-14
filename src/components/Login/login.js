// 
import React, { useEffect, useState } from "react";
import { toast, ToastContainer } from 'react-toastify';
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { loginApi } from "../services/UserServices";
import 'react-toastify/dist/ReactToastify.css';
import { css } from "@emotion/react";
import { ClipLoader } from "react-spinners";
const Login = () => {
    let navigate = useNavigate();



    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isShowPassword, setIsShowPassword ] = useState(false);
    const [loadingAPI, setLoadingAPI] = useState(false);
    

    useEffect(() => {
        let token = localStorage.getItem("token");
        if (token){
            navigate("/home");
        }

    }, [navigate])
    
    const handleLogin = async () => {
        alert("Đăng nhập thành công")
        if ( !email || !password){
            toast.error("Email/Password is required");
            return;
        }
        setLoadingAPI(true);
        try{
            const res = await loginApi(email, password);
            console.log(">>> Check res: ", res);


            if (res && res.token) {
                localStorage.setItem("token", res.token);
                navigate("/home");
              } else {
                toast.error(res?.data?.error || "Login failed");
              }
            } catch (error) {
              toast.error("An error occurred. Please try again later.");
            }
            setLoadingAPI(false);

        };
        const override = css`
        display: block;
        margin: 0 auto;
      `;


    return (
        <>
        <div className="login-container col-12 col-sm-4">
            <div className="tittle">Login</div>
            <div className="text">Email or username</div>
            <input 
            className="inputlogin" 
            type="text" 
            placeholder="Email or username..."
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            />

            <div className="input-2">
                <input 
                className="inputlogin" 
                type={isShowPassword === true ? " text" : "password"} 
                placeholder="Password..."
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                />
                <i className={isShowPassword === true ? "fa-solid fa-eye" : "fa-solid fa-eye-slash" }
                    onClick={() => setIsShowPassword(!isShowPassword)}
                ></i>
            </div>
            

            
                
                    <Link to="/home">
                    <button className={email && password ? "active" : "" }
                disabled= {(email && password) ? false : true}
                onClick={() => handleLogin()}
                >

{loadingAPI && <i className="fa-solid fa-sync fa-spin"></i> }    
                &nbsp; Login
                </button>
                        
                    </Link>
                
            
            

            <div className="back">
            Create on 
            <Link to="/signin"> Account ?</Link>
            </div>
        
        
        </div>
        </>
    )
}
export default Login;
