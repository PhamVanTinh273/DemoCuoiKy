import React, { useState } from "react";
import "./RegisterAccount.css"
import { Routes, Route, Outlet, Link } from "react-router-dom";


const initFormValue = {
    firstName:"",
    lastName:"",
    email: "",
    password:"",
    confirmPassword:"",
};

const isEmptyValue = (value)=>{
    return !value || value.trim().length < 1;
};

const isEmailValid = (email)=>{
    return /^\w+([\.-]?\w+) * @\w+([\.-]?\w+)*(\.\w{2,3})+ $/.test(email);
}


function RegisterPage(){
    const [formValue, setFormValue] = useState(initFormValue);
    const [formError, setFormError] = useState({});

    const validateForm = ()=>{
        const error = {};


        if (isEmptyValue(formValue.firstName)){
            error["firstName"] = "FirstName is required"
        }
        if (isEmptyValue(formValue.lastName)){
            error["lastName"] = "LastName is required"
        }
        if (isEmptyValue(formValue.email)){
            error["email"] = "Email is required"
        }else{
            if (!isEmailValid(formValue.email)){
                error["email"] = "Email is invaild"
            }
        }
        if (isEmptyValue(formValue.firstName)){
            error["password"] = "Password is required"
        }

        if(isEmptyValue(formValue.confirmPassword)){
            error["confirmPassword"] = "Confirm Password is required";
        }else if(formValue.confirmPassword !== formValue.password){
            error["confirmPassword"] = "Confirm Password not match";
        }
       
        setFormError(error);
        return Object.keys(error).length === 0;

    }


    const handleChange = (event)=>{
        const {value,name} = event.target;
        setFormValue({
            ...formValue,
            [name]: value,
        });
    }


    const handSubmit = (event)=>{
        event.preventDefault();

        if(validateForm()){

        }else{

        }
        

    }

   
    return <div className="register-page">
        <div className="register-form-container">
            <h1 className="title">Login</h1>

            <form onSubmit={handSubmit}>
                <div>
                    <label htmlFor="first-name" className="form-label">
                        First Name
                    </label>
                    <input
                        id = "first-name"
                        className="form-control"
                        type="text"
                        name="firstName"
                        value={formValue.firstName}
                        onChange={handleChange}
                    />
                    {formError.firstName && (
                        <div className="errror-feedback">{formError.firstName}</div>
                    )}
                </div>

                <div className="mb-2">
                    <label htmlFor="Last-name" className="form-label">
                        Last Name
                    </label>
                    <input
                        id = "last-name"
                        className="form-control"
                        type="text"
                        name="lastName"
                        value={formValue.lastName}
                        onChange={handleChange}
                    />
                    {formError.lastName && (
                        <div className="errror-feedback">{formError.lastName}</div>
                    )}
                </div>

                <div className="mb-2">
                    <label htmlFor="email" className="form-label">
                        Email
                    </label>
                    <input
                        id = "email"
                        className="form-control"
                        type="text"
                        name="email"
                        value={formValue.email}
                        onChange={handleChange}
                    />
                    {formError.email && (
                        <div className="errror-feedback">{formError.email}</div>
                    )}
                </div>

                <div className="mb-2">
                    <label htmlFor="password" className="form-label">
                    Password
                    </label>
                    <input
                        id = "password"
                        className="form-control"
                        type="password"
                        name="password"
                        value={formValue.password}
                        onChange={handleChange}
                    />
                    {formError.password && (
                        <div className="errror-feedback">{formError.password}</div>
                    )}
                </div>

                <div className="mb-2">
                    <label htmlFor="confirmPassword" className="form-label">
                        confirmPassword
                    </label>
                    <input
                        id = "confirmPassword"
                        className="form-control"
                        type="password"
                        name="confirmPassword"
                        value={formValue.confirmPassword}
                        onChange={handleChange}
                    />
                    {formError.confirmPassword && (
                        <div className="errror-feedback">{formError.confirmPassword}</div>
                    )}
                </div>

                <button type="submit" className="submit-btn">
                    Login
                </button>

                <Link to="/login"><button type="submit" className="submit-btn">
                    Sign in
                </button></Link>
                <Link to="/home"><button type="submit" className="submit-btn">
                    Cancel
                </button></Link>
                <hr></hr>
                <h5>Create on Account ?</h5>


            </form>
        </div>
    </div>
    
}
export default RegisterPage;