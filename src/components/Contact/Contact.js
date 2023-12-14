import { useNavigate } from "react-router-dom";
import "./Contact.css";
import { useState } from "react";
import axios from "axios";
import ItemUser from "./itemUser";

function Contact(){
  // Lấy giá trị email và feedback từ hai input trong form
    const navigate = useNavigate();
  let [email, setEmail] = useState("");
  let [feedback, setFeeback] = useState("");

  function handleSubmit() {
     // Gửi request POST đến API `http://localhost:8080/v1/dogs` với dữ liệu `{ email, feedback }`
    axios
      .post("http://localhost:8080/v1/dogs", 
      { 
        email , 
        feedback, 
    })
      .then(function (response) {
        // Nếu thành công, console.log response và navigate đến trang `/home`
        console.log(response);
        navigate("/home");
      })
      .catch(function (error) {
        // Nếu thất bại, console.log error
        console.log(error);
      });
  }


    return(
        <form>
        <div class="container px-4 text-center">
        <div class="row gx-5">
            <div class="col">
            <div class="p-3">
                <h3>About us</h3>
                <h6>Fill out the form below to get in touch with us. We are here to help with any questions or inquiries you may have.</h6>
            </div>
            </div>
            <div class="col">
                <div class="p-3">
                    <div className="row-2">
                        <div className="col-12 space-name">
                            {/* Name
                            <input
                            type="text"
                            onChange={(e) => {
                                setName(e.target.value);
                              }} 
                            className="input-about-name"></input> */}
                            Email
                            <input
                            type="text" 
                            //thuộc tính onChange của input emailInput. 
                            //Thuộc tính onChange được sử dụng để xử lý sự kiện thay đổi giá trị của input
                            onChange={(e) => {
                                setEmail(e.target.value);
                              }}
                            className="input-about-name"></input>

                        </div>
                        <div className="col-12 space-message ">
                            FeedBack
                            <input
                            type="text"
                            onChange={(e) => {
                                setFeeback(e.target.value);
                              }}
                            
                            className="input-about-message" ></input>
                        </div>

                    </div>
                  
                    <button onClick={handleSubmit} type="button" className="button-submit-about">Submit</button>
                </div>
            </div>
        </div>
        </div>
        </form>
    )
}


export default Contact;