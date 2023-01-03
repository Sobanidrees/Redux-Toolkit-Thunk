import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css';
import { useSelector } from 'react-redux';
export default function Header() {
const item=useSelector((state)=>state.Cart);

  return (
    <div className='Hcointainer'>
      <span className='logo'>Shoping Application</span>
      <h2 className='cart'>Cart Items {item.data.length}</h2>
      <h2 className='cart'>Amount = {item.price.toFixed(2)} $</h2>
      <div className='buttons'>
        <Link to='/' className='link'>Home</Link>
        <Link to='/Cart' className='link'>Cart</Link>
      </div>
      
    </div>
  )
}
