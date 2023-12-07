import "./cart.css";
import { useContext, useState } from "react";
import { CartContext } from "../../Contexts/CartContext";
import { useNavigate } from "react-router-dom";
import Modal from 'react-modal';

const Cart=()=>{
    const {myCart, total, addToCart, setTotal}= useContext(CartContext);
    const [isModalOpen, setModalOpen] = useState(false);
    // const navigate = useNavigate();
    // const handleCheckout = () =>{
    //     setTotal(0);
    //     addToCart ([{}]);
    // }
    const handleBuyClick = () => {
        // Xử lý logic mua hàng ở đây
    
        // Mở modal thông báo sau khi mua hàng thành công
        setModalOpen(true);
      };
      const handleCloseModal = () => {
        // Đóng modal khi người dùng nhấn nút đóng hoặc thực hiện các xử lý khác
        setModalOpen(false);
      };
   
    return(
        <>
        <section className="cart-container">
        <div className="cart-header">
       
                Giỏ hàng
        </div>
        <Modal
        isOpen={isModalOpen}
        onRequestClose={handleCloseModal}
        contentLabel="Purchase Successful"
      >
        <h2>Mua hàng thành công</h2>
        <p>Cảm ơn bạn đã mua hàng ở đây!</p>
        <button onClick={handleCloseModal}>Close</button>
      </Modal>
        
        <div className="cart-itemsbo">
            {myCart.slice(1).map((item)=>{
                return(
                    <div className="cart-items">
                        <button className="increase">+</button>
                        <img src={item.imageUrl} className="cart-item-img" alt="error" />
                        {item.name} : {item.price}$
                        <button className="decrease">-</button>
                    </div>
                )
            })}       
        </div>
        <div className="cart-total-gohome">
            <div className="cart-total">Tổng tiền: {total} $</div>
            <button className="cart-gohome" onClick={handleBuyClick}>Mua hàng</button>

        </div>
        




        {/* <button className="cart-checkout" onClick={handleCheckout}>DONE</button>
         */}
        </section>
        </>
    );
}
export default Cart;
