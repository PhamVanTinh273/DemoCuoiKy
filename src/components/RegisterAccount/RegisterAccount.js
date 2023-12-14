// 
import { useEffect, useState } from "react";
import "./RegisterAccount.css";
import { loginApi } from "../services/UserServices";
import {toast} from 'react-toastify';
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const RegisterAccount = () => {
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

    }, [])
    
    const handleLogin = async () => {
        // alert("Me")
        if ( !email || password){
            toast.error("Email/Password is required");
            return;
        }
        setLoadingAPI(true);
        let res  = await loginApi(email, password);
        console.log(">>> check res: ", res)
        if (res && res.token ){
            localStorage.setItem("token", res.token)
            navigate("/home");
        }else{
            //error
            if (res && res.status === 200 ){
                toast.error(res.data.error);
            }
        }
        setLoadingAPI(false);

    }


    return (
        <>
        <div className="login-container-register col-12 col-sm-4">
            <div className="tittle">RegisterAccount</div>
            {/* <div className="text">Email or username ( eve.holt@reqres.in )</div> */}


            UserName
            <input 
            className="inputlogin" 
            type="text" 
            placeholder="Username..."
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            />

            
            Email
            <input 
            className="inputlogin" 
            type="text" 
            placeholder="Email..."
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            />

            

            Password
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


            ConfirmPassword
            <div className="input-2">
                <input 
                className="inputlogin" 
                type={isShowPassword === true ? " text" : "password"} 
                placeholder="Confirm password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                />
                <i className={isShowPassword === true ? "fa-solid fa-eye" : "fa-solid fa-eye-slash" }
                    onClick={() => setIsShowPassword(!isShowPassword)}
                ></i>
            </div>
            


            <button className={email && password ? "active" : "" }
            disabled= {(email && password) ? false : true}
            onClick={() => handleLogin()}
            >
            {loadingAPI && <i className="fa-solid fa-sync fa-spin"></i> }    
            &nbsp; RegisterAccount
            </button>


            <Link to="/home"><div className="back">
            <i className="fa-solid fa-chevron-left"></i>Home
            </div></Link>
        
        
        </div>
        </>
    )
}
export default RegisterAccount;











































// import React, { useState } from "react";
// import "./RegisterAccount.css"
// import { Routes, Route, Outlet, Link } from "react-router-dom";


// const initFormValue = {
//     firstName:"",
//     lastName:"",
//     email: "",
//     password:"",
//     confirmPassword:"",
// };

// const isEmptyValue = (value)=>{
//     return !value || value.trim().length < 1;
// };

// const isEmailValid = (email)=>{
//     return /^\w+([\.-]?\w+) * @\w+([\.-]?\w+)*(\.\w{2,3})+ $/.test(email);
// }


// function RegisterPage(){
//     const [formValue, setFormValue] = useState(initFormValue);
//     const [formError, setFormError] = useState({});

//     const validateForm = ()=>{
//         const error = {};


//         if (isEmptyValue(formValue.firstName)){
//             error["firstName"] = "FirstName is required"
//         }
//         if (isEmptyValue(formValue.lastName)){
//             error["lastName"] = "LastName is required"
//         }
//         if (isEmptyValue(formValue.email)){
//             error["email"] = "Email is required"
//         }else{
//             if (!isEmailValid(formValue.email)){
//                 error["email"] = "Email is invaild"
//             }
//         }
//         if (isEmptyValue(formValue.firstName)){
//             error["password"] = "Password is required"
//         }

//         if(isEmptyValue(formValue.confirmPassword)){
//             error["confirmPassword"] = "Confirm Password is required";
//         }else if(formValue.confirmPassword !== formValue.password){
//             error["confirmPassword"] = "Confirm Password not match";
//         }
       
//         setFormError(error);
//         return Object.keys(error).length === 0;

//     }


//     const handleChange = (event)=>{
//         const {value,name} = event.target;
//         setFormValue({
//             ...formValue,
//             [name]: value,
//         });
//     }


//     const handSubmit = (event)=>{
//         event.preventDefault();

//         if(validateForm()){

//         }else{

//         }
        

//     }

   
//     return <div className="register-page">
//         <div className="register-form-container">
//             <h1 className="title">Register</h1>

//             <form onSubmit={handSubmit}>
//                 <div>
//                     <label htmlFor="first-name" className="form-label">
//                         First Name
//                     </label>
//                     <input
//                         id = "first-name"
//                         className="form-control"
//                         type="text"
//                         name="firstName"
//                         value={formValue.firstName}
//                         onChange={handleChange}
//                     />
//                     {formError.firstName && (
//                         <div className="errror-feedback">{formError.firstName}</div>
//                     )}
//                 </div>

//                 <div className="mb-2">
//                     <label htmlFor="Last-name" className="form-label">
//                         Last Name
//                     </label>
//                     <input
//                         id = "last-name"
//                         className="form-control"
//                         type="text"
//                         name="lastName"
//                         value={formValue.lastName}
//                         onChange={handleChange}
//                     />
//                     {formError.lastName && (
//                         <div className="errror-feedback">{formError.lastName}</div>
//                     )}
//                 </div>

//                 <div className="mb-2">
//                     <label htmlFor="email" className="form-label">
//                         Email
//                     </label>
//                     <input
//                         id = "email"
//                         className="form-control"
//                         type="text"
//                         name="email"
//                         value={formValue.email}
//                         onChange={handleChange}
//                     />
//                     {formError.email && (
//                         <div className="errror-feedback">{formError.email}</div>
//                     )}
//                 </div>

//                 <div className="mb-2">
//                     <label htmlFor="password" className="form-label">
//                     Password
//                     </label>
//                     <input
//                         id = "password"
//                         className="form-control"
//                         type="password"
//                         name="password"
//                         value={formValue.password}
//                         onChange={handleChange}
//                     />
//                     {formError.password && (
//                         <div className="errror-feedback">{formError.password}</div>
//                     )}
//                 </div>

//                 <div className="mb-2">
//                     <label htmlFor="confirmPassword" className="form-label">
//                         confirmPassword
//                     </label>
//                     <input
//                         id = "confirmPassword"
//                         className="form-control"
//                         type="password"
//                         name="confirmPassword"
//                         value={formValue.confirmPassword}
//                         onChange={handleChange}
//                     />
//                     {formError.confirmPassword && (
//                         <div className="errror-feedback">{formError.confirmPassword}</div>
//                     )}
//                 </div>

//                 <button type="submit" className="submit-btn">
//                     Register
//                 </button>

//                 <Link to="/login"><button type="submit" className="submit-btn">
//                     Singin
//                 </button></Link>
//                 <Link to="/home"><button type="submit" className="submit-btn">
//                     Cancel
//                 </button></Link>
//                 <hr></hr>
//                 <h5>Create on Account ?</h5>


//             </form>
//         </div>
//     </div>
    
// }
// export default RegisterPage;


