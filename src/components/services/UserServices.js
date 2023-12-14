import axios from "axios";


    const loginApi = (email, password) => {
        return axios.post("/v1/dogs", {email, password});
        
    }
   

export {loginApi};