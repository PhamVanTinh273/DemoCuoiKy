import logo from './logo.svg';
import './App.css';
import Slide from './components/Slides/Slide';
import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';
import RegisterAccount from './components/RegisterAccount/RegisterAccount';
import Login from './components/Login/login';
import { AuthProvider } from './components/AuthContext/AuthContext';


function App() {
  
  return (
  <div className='container'>
    <AuthProvider>
      <Navbar/>
    </AuthProvider>
    {/* <Home/> */}  
    </div>
  );
}

export default App;
