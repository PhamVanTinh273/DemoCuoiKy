import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";



const RegisterAccount = () => {
const navigate = useNavigate();
  
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");




  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:8080/v1/users/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",//định hướng dữ liệu gửi đi để API hiểu, cho biết rằng dữ liệu được gửi đi là một đối tượng JSON.
        },
        body: JSON.stringify({ username, password }),//có chức năng chuyển đổi dữ liệu thành chuỗi JSON để gửi đi trong yêu cầu HTTP.
      });

      const data = await response.json();

      if (response.ok) {
        setMessage(data.message);
        setUsername("");
        setPassword("");
        navigate("/login")
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
      <h2 className="login-header">RegisterAccount</h2>
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
            onChange={(e) => setPassword(e.target.value)}//e.target.value truy cập và trả về giá trị hiện tại của trường input.
          />
        </div>

        <button className="button-login" type="submit">Register</button>


        
        {/* <Link to="/login"><button type="type">Login</button></Link> */}
        
      </form>
      {message && <p>{message}</p>}
    </div>
    //nếu message có giá trị (khác rỗng), phần tử <p> sẽ được hiển thị để hiển thị thông báo cho người dùng. Nếu message không có giá trị, phần tử <p> sẽ không được hiển thị. 
    //Điều này giúp ẩn hoặc hiển thị thông báo lỗi tùy thuộc vào giá trị của message.
  );
};

export default RegisterAccount;