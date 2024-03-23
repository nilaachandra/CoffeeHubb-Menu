import './App.css'
import Menu from './components/Menu'
import Navbar from './components/Navbar'
import { CartProvider } from './context/CartContext'
import { Outlet } from 'react-router-dom'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {

  return (
    <CartProvider>
    <>
    <Navbar/>
      <Menu/>
      <ToastContainer position="top-right" autoClose={4000} hideProgressBar={false} closeOnClick={true} />
      <Outlet/>
    </>
    </CartProvider>
  )
}

export default App
