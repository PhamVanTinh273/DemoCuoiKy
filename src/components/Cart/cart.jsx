// cart.jsx
import "./cart.css";
import { useContext, useState } from "react";
import { CartContext } from "../../Contexts/CartContext";
import { useNavigate } from "react-router-dom";
import Modal from 'react-modal';
import { FaTimes } from 'react-icons/fa';

const Cart = () => {
  const calculateTotal = () => {
    let newTotal = 0;
    myCart.forEach((item, index) => {
      newTotal += item.price * quantities[index];
    });
    return newTotal;
  };
  
  // Sử dụng Context để lấy thông tin về giỏ hàng
  const { myCart, total, addToCart, setTotal, resetCart } = useContext(CartContext);
  const [quantities, setQuantities] = useState(myCart?myCart.map(() => 1):[]); // Mảng số lượng ban đầu

  // State và hook để quản lý Modal và số lượng sản phẩm
  const [isModalOpen, setModalOpen] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const navigate = useNavigate();

  // Giảm số lượng sản phẩm
  const handlePlus = (index) => {
    const updatedQuantities = [...quantities];
    updatedQuantities[index] = quantities[index] + 1;
    setQuantities(updatedQuantities);
    setTotal(calculateTotal());
  };
  
  const handleMinus = (index) => {
    if (quantities[index] > 1) {
      const updatedQuantities = [...quantities];
      updatedQuantities[index] = quantities[index] - 1;
      setQuantities(updatedQuantities);
      setTotal(calculateTotal());
    }
  };
  
  const handleRemoveItem = (index) => {
    const updatedCart = [...myCart];
    updatedCart.splice(index, 1);
  
    const updatedQuantities = [...quantities];
    updatedQuantities.splice(index, 1);
  
    addToCart(updatedCart);
    setQuantities(updatedQuantities);
    setTotal(calculateTotal());
  };

  // Mua hàng và mở Modal
  const handleBuyClick = () => {
    // Xử lý logic mua hàng ở đây (chưa được triển khai)
    // Mở modal thông báo sau khi mua hàng thành công
    setModalOpen(true);
  };

  // Đóng Modal
  const handleCloseModal = () => {
    // Đóng modal khi người dùng nhấn nút đóng hoặc thực hiện các xử lý khác
    setModalOpen(false);

    // Xóa tất cả sản phẩm trong giỏ hàng, reset tổng giá trị và số lượng
    addToCart([]);
    setTotal(0);
    setQuantity(1);
  };

  // Đóng giỏ hàng và quay về trang chủ
  const handleCartClose = () => {
    navigate("/");
  };

  return (
    <>
      <section className="cart-container">
        {/* Phần Header của giỏ hàng */}
        <div className="cart-header">
          <span className="GioHang">Giỏ hàng</span>
          <button className="close-btn" onClick={handleCartClose}>
            X
          </button>
        </div>

        {/* Modal hiển thị khi mua hàng thành công */}
        <Modal
          isOpen={isModalOpen}
          onRequestClose={handleCloseModal}
          contentLabel="Purchase Successful"
        >
          <h2>Mua hàng thành công</h2>
<p>Cảm ơn bạn đã mua hàng ở đây!</p>
          <button className="Dong" onClick={handleCloseModal}>Close</button>
        </Modal>

        {/* Hiển thị danh sách sản phẩm trong giỏ hàng */}
        <div className="cart-itemsbo">
          {myCart.map((item, index) => (
            <div className="cart-items" key={index}>
              <button onClick={() => handlePlus(index)} className="increase">
                +
              </button>
              <img
                src={item.imageUrl}
                className="cart-item-img"
                alt="error"
              />
              {item.name} : {item.price}$
              <button onClick={() => handleMinus(index)} className="decrease">
                -
              </button>
              <span>{quantities[index]}</span>
              <button
                onClick={() => handleRemoveItem(index)}
                className="remove"
              >
                Xóa
              </button>
            </div>
          ))}
        </div>

        {/* Hiển thị tổng tiền và nút Mua hàng */}
        <div className="cart-total-gohome">
        <div className="cart-total">Tổng tiền: {total}$</div>
          <button className="cart-gohome" onClick={handleBuyClick}>
            Mua hàng
          </button>
        </div>
      </section>
    </>
  );
};

export default Cart;