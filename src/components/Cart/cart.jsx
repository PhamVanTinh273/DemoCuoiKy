// cart.jsx
import "./cart.css";
import { useContext, useState } from "react";
import { CartContext } from "../../Contexts/CartContext";
import { useNavigate } from "react-router-dom";
import Modal from 'react-modal';
import { FaTimes } from 'react-icons/fa';

const Cart = () => {
  const { myCart, total, addToCart, setTotal } = useContext(CartContext);
  const [isModalOpen, setModalOpen] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const navigate = useNavigate();

  const handleMinus = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handlePlus = () => {
    setQuantity(quantity + 1);
  };

  const handleRemoveItem = (index) => {
    const updatedCart = [...myCart];
    updatedCart.splice(index, 1);
    const newTotal = updatedCart.reduce(
      (accumulator, item) => accumulator + item.price * quantity,
      0
    );
    addToCart(updatedCart);
    setTotal(newTotal);
    setQuantity(1);
  };

  const handleBuyClick = () => {
    // Xử lý logic mua hàng ở đây

    // Mở modal thông báo sau khi mua hàng thành công
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    // Đóng modal khi người dùng nhấn nút đóng hoặc thực hiện các xử lý khác
    setModalOpen(false);

    // Xóa tất cả sản phẩm trong giỏ hàng
    addToCart([]);
    setTotal(0);
    setQuantity(1);
  };

  const handleCartClose = () => {
    // Đóng giỏ hàng
    navigate("/");
  };

  return (
    <>
      <section className="cart-container">
        <div className="cart-header">
          <span className="GioHang">Giỏ hàng</span>
          <button className="close-btn" onClick={handleCartClose}>
            X
          </button>
        </div>
        <Modal
          isOpen={isModalOpen}
          onRequestClose={handleCloseModal}
          contentLabel="Purchase Successful"
        >
          <h2>Mua hàng thành công</h2>
          <p>Cảm ơn bạn đã mua hàng ở đây!</p>
          <button className="Dong" onClick={handleCloseModal}>Close</button>
        </Modal>

        <div className="cart-itemsbo">
          {myCart.map((item, index) => (
            <div className="cart-items" key={index}>
              <button onClick={handlePlus} className="increase">
                +
              </button>
              <img
                src={item.imageUrl}
                className="cart-item-img"
                alt="error"
              />
              {item.name} : {item.price}$
              <button onClick={handleMinus} className="decrease">
                -
              </button>
              <span>{quantity}</span>
              <button
                onClick={() => handleRemoveItem(index)}
                className="remove"
              >
                Xóa
              </button>
            </div>
          ))}
        </div>
        <div className="cart-total-gohome">
          <div className="cart-total">Tổng tiền: {total * quantity}$</div>
          <button className="cart-gohome" onClick={handleBuyClick}>
            Mua hàng
          </button>
        </div>
      </section>
    </>
  );
};

export default Cart;