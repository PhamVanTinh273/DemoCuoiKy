
// import mew from './img/New_Logo.webp';
import { Routes, Route, Outlet, Link } from "react-router-dom";
import RegisterPage from "../RegisterAccount/RegisterAccount";
import Login from "../Login/login";
import About from "../About/about";
import Contact from '../Contact/Contact';
import Cart from "../Cart/cart";
import "./Navbar.css"
import Home from "../Home/Home";
import mew from "./img/615px-Food_Network_New_Logo 2 1 (3).png"
import MenuPage from "../Menu/MenuPage";
import { useEffect, useState } from 'react';
import axios from 'axios';
import { CartContext } from "../../Contexts/CartContext";


function Navbar(){
    
    const [allMenus, setMenus] = useState([]);
    const [myCart, addToCart] = useState([{}]);
    const [total, setTotal] = useState(0);
  useEffect(()=>{

    async function getData(){
      const res = await axios.get("/v1/dogs")
      return res;
    }
    getData().then((res) => setMenus(res.data));
    getData().catch((err)=>console.log(err));
  }, [])
    return(
        <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">
                <img src={mew} alt="Logo" />
            </a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className='navar'>
                        <Link to="/home">
                            <li><a href="/">Home</a></li>
                        </Link>
                        
                        <Link to="/menu"><li><a href="/">Menu</a></li></Link>
                        <Link to="/about"><li><a href="/about">About</a></li></Link>
                        <Link to="/contact"><li><a href="/contact">Contact</a></li></Link>
                    </ul>

                    
                    <Link to="cart"><i className="fa-solid fa-cart-shopping cartnavbar"></i></Link>
              

              <form className="d-flex" role="search">
                
                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"></input>
                <button className="btn btn-outline-success" type="submit">Search</button>
              </form>
              <Link to="/signin">
                        <div className='sign'>         
                        <button className='sign'>
                        <i class="fa-solid fa-arrow-right-from-bracket"></i>
                            <div className='signin'>Singin</div>
                        </button>
                        </div>
                    </Link>


              

            </div>
          </div>
        </nav>
        <main>
            <CartContext.Provider value={{myCart, addToCart, total, setTotal}}>
                <Routes>
                  <Route path='/home' element={<Home/>}/>
                  <Route path='/menu' element={<MenuPage allMenus={allMenus}/>}/>
                  <Route path='/about' element={<About/>}/>
                  <Route path='/contact' element={<Contact/>}/>
                  <Route path='/cart' element={<Cart/>}/>
                  <Route path='/signin' element={<RegisterPage/>}/>
                  <Route path='/login' element={<Login/>}/>
                </Routes>
            </CartContext.Provider>
                
              </main>
        
        
      </>
      
        
    )
}


export default Navbar;