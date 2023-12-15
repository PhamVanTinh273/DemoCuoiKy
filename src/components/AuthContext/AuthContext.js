//Context trong React được sử dụng để chia sẻ dữ liệu giữa các component con mà không cần truyền dữ liệu qua nhiều cấp cha. 
//Nó giúp cho việc quản lý trạng thái ứng dụng và chia sẻ dữ liệu trở nên dễ dàng hơn.

//Khi sử dụng context, bạn có thể tạo ra một context object để lưu trữ các giá trị hoặc hàm mà bạn muốn chia sẻ. 
//Component cha sẽ đóng vai trò là một Provider, cung cấp dữ liệu từ context object cho các component con bên trong nó. 
//Các component con có thể truy cập dữ liệu này thông qua việc sử dụng một hook như useContext.


//Dòng này sử dụng để import các hàm và hooks từ thư viện React.
import { createContext, useContext, useState } from 'react';


//Dòng này tạo một context mới bằng cách sử dụng hàm createContext() từ React. 
//Context này sẽ được sử dụng để chia sẻ trạng thái và hàm cập nhật trạng thái đăng nhập.
const AuthContext = createContext();

//Dòng này tạo một component AuthProvider và xuất nó để sử dụng trong các component khác. 
//Component này sẽ đóng vai trò như một provider cho context AuthContext.
export const AuthProvider = ({ children }) => {



    //Dòng này sử dụng hook useState để tạo một biến state isLoggedIn với giá trị khởi tạo là false. Biến này sẽ lưu trữ trạng thái đăng nhập của người dùng. 
    //setIsLoggedIn là hàm để cập nhật giá trị của isLoggedIn.
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (

    //Dòng này sử dụng Provider (AuthContext.Provider) của context AuthContext. 
    //Provider này nhận một prop value để cung cấp giá trị của context cho các component con bên trong nó. 
    //Trong trường hợp này, giá trị của context là một object có hai thuộc tính là isLoggedIn và setIsLoggedIn được lấy từ state và hàm cập nhật state tương ứng.
    
    <AuthContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>
      {children}
    </AuthContext.Provider>
    //children. Đây là nơi các component con được đặt. children là một prop đặc biệt trong React, 
    //nó chứa các component con được truyền vào AuthProvider thông qua các cặp thẻ mở và đóng của nó.
  );
};
//export const useAuth = () => useContext(AuthContext);: Dòng này xuất một custom hook useAuth. 
//Hook này sử dụng useContext để truy cập giá trị của context (AuthContext) và trả về các giá trị của isLoggedIn và setIsLoggedIn.
export const useAuth = () => useContext(AuthContext);