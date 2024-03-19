import './App.css'
import Menu from './components/Menu'
import Navbar from './components/Navbar'
import { CartProvider } from './context/CartContext'
import { Outlet } from 'react-router-dom'
function App() {

  return (
    <CartProvider>
    <>
    <Navbar/>
      <Menu/>
      <Outlet/>
    </>
    </CartProvider>
  )
}

export default App
