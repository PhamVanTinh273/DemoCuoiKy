
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
import { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { CartContext } from "../../Contexts/CartContext";
import MenuCard from "../Menu/MenuCard";




// const allFoods = [
//   { id: 1, name: 'Mie Ramen', description: 'lorem ipsum' },
//   { id: 2, name: 'Salad Tahu', description: 'lorem ipsum' },
//   { id: 3, name: 'Mie Roti Bakar', description: 'lorem ipsum' },
//   { id: 4, name: 'Hamburgur', description: 'lorem ipsum' },
//   { id: 5, name: 'Chicken Roast', description: 'lorem ipsum' },
//   { id: 6, name: 'Salad Salmon', description: 'lorem ipsum' },
//   { id: 7, name: 'Chiken Friel', description: 'lorem ipsum' },
//   { id: 8, name: 'Cartilage', description: 'lorem ipsum' },
  
//   // Thêm các món ăn khác
// ];


function Navbar(){
  const { handleSearchInputChange, handleSearchButtonClick, isLoading } =
    useContext(CartContext);




    
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



  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredMenus = allMenus.filter(menu =>
    menu.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
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
                        <Link to="/home" style={{ textDecoration: 'none' }}>
                            <li><a href="/">Home</a></li>
                        </Link>
                        
                        <Link to="/menu" style={{ textDecoration: 'none' }}><li><a href="/">Menu</a></li></Link>
                        <Link to="/about" style={{ textDecoration: 'none' }}><li><a href="/about">Contact</a></li></Link>
                        <Link to="/contact" style={{ textDecoration: 'none' }}><li><a href="/contact">About</a></li></Link>
                    

                    
                    <Link to="cart" style={{ textDecoration: 'none' }}><i className="fa-solid fa-cart-shopping cartnavbar"></i></Link>


                  <div>
                  <div className="search-bar">
                    <input
                    className='search-mar'
                      type="text"
                      placeholder="Tìm kiếm..."
                      value={searchTerm}
                      onChange={handleSearch}

                    /> 
                  </div>
                  <section className="dogs-container">
                
                {filteredMenus.map((menu) => (
                  <>
                  </>
                  // <div key={menu.id}>
                  //   <MenuCard
                  //     id={menu.id}
                  //     name={menu.name}
                  //     breed={menu.breed}
                  //     description={menu.description}
                  //     price={menu.price}
                  //     imageUrl={menu.imageUrl}
                  //   />
                  // </div>
                ))}
              </section>
                  
                  </div>
                  <Link to="/login" style={{ textDecoration: 'none' }}>
                        <div className='sign'>         
                        <button className='sign'>
                        <i class="fa-solid fa-arrow-right-from-bracket mt-1"></i>
                            <div className='signin'>Singin</div>
                        </button>
                        </div>
                    </Link>
                  
                    </ul>
                    
                

              
              


              

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