import { useContext, useEffect, useState } from "react";
import { CartContext } from "../../Contexts/CartContext";
import "./Menu.css";
import { IoCartOutline } from "react-icons/io5";
import axios from "axios";




const MenuCard = (props) =>{
    const{id, name, description, price, imageUrl} = props;
    const {addToCart, setTotal}= useContext(CartContext);
    const [isAdded, setAdded] = useState(false);
    const handleClick = ()=>{
        setAdded(true);
        const newItems = {
            name:name,
            price:price,
            imageUrl:imageUrl,
        };
        addToCart((item)=>[...item, newItems]);
        setTotal((total)=>(total +=Number(price)));
    };


    
    return(
        
        <>
        <section className="dogs">
            
        <div className="row">
            <div className="dogs-img-container">
                <img className="dog-img" src={imageUrl} alt={`picture of: ${name}`}/>
            </div>
            
            <div class="container text-center name-menu">
                <div class="row-1 style-text">
                    <p>{name}  </p>                  
                </div>
                <div class="row-2">
                    <p>{description}</p>
                </div>

                <div class="row">
                    <div className="col-6">
                        <p>{price}$</p>
                    </div>
                    <div className="col-6 color-cart">
                    {isAdded ? (
                <button disabled className="dogs-btn-disabled">Added</button>
            ) : (
                <div>

                
                    {/* <button className="dogs-btn" onClick={handleClick}>
                        ADD TO CART
                        </button> */}
                    <div className="dogs-btn" onClick={handleClick}>
                        <IoCartOutline />
                    </div>

                </div>     
            ) }
                    </div>                    
                </div>
            </div>
            </div>
        </section>
        
        </>
    );
};

export default MenuCard;