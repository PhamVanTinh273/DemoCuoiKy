import React, { useState } from "react";
import "./login.css"
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



function Login(){
    const [formValue, setFormValue] = useState(initFormValue);
    const [formError, setFormError] = useState({});


    // const [loggedIn,setLoginError, setLoggedIn] = useState(false);

    // const handleLogin = async () => {
    //     try {
    //       // 1. Gọi API đăng nhập với thông tin từ form
    //       const response = await fetch('YOUR_LOGIN_API_ENDPOINT', {
    //         method: 'POST',
    //         headers: {
    //           'Content-Type': 'application/json',
    //         },
    //         body: JSON.stringify({
    //           username: formValue.firstName, // Sử dụng username hoặc email tùy thuộc vào API của bạn
    //           password: formValue.password,
    //         }),
    //       });
      
    //       // 2. Kiểm tra xem API trả về có thành công không
    //       if (!response.ok) {
    //         // Nếu không thành công, ném lỗi và bắt nó bên dưới
    //         throw new Error('Đăng nhập không thành công. Vui lòng kiểm tra thông tin đăng nhập của bạn.');
    //       }
      
    //       // 3. Chuyển đổi phản hồi thành JSON
    //       const data = await response.json();
      
    //       // 4. Kiểm tra nếu đăng nhập thành công
    //       if (data.success) {
    //         // Nếu thành công, set trạng thái loggedIn thành true
    //         setLoggedIn(true);
    //         // Hiển thị thông báo đăng nhập thành công
    //         alert('Đăng nhập thành công!');
    //       } else {
    //         // Nếu đăng nhập không thành công, đặt trạng thái loginError
    //         setLoginError('Đăng nhập không thành công. Vui lòng kiểm tra thông tin đăng nhập của bạn.');
    //       }
    //     } catch (error) {
    //       // Nếu có lỗi trong quá trình gọi API hoặc xử lý phản hồi
    //       console.error('Đã xảy ra lỗi:', error.message);
    //       setLoginError('Đã xảy ra lỗi trong quá trình xử lý. Vui lòng thử lại sau.');
    //     }
    //   };
      
    

    const validateForm = ()=>{
        const error = {};


        if (isEmptyValue(formValue.firstName)){
            error["firstName"] = "FirstName is required"
        }
        if (isEmptyValue(formValue.lastName)){
            error["lastName"] = "LastName is required"
        }
        
        if (isEmptyValue(formValue.firstName)){
            error["password"] = "Password is required"
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
                        UserName
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

                

                <button  type="submit" className="submit-btn">
                    Sign in
                </button>
                <Link to="/signin"><button type="submit" className="submit-btn">
                    Login
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
export default Login;