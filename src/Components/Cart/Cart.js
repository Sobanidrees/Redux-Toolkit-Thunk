import React from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux';
import { remove } from './Slices/CartSlice';
export default function Cart() {
  const item=useSelector((state)=>state.Cart);
  const dispatch=useDispatch();
  const onRemoveHandler=(ID)=>{
dispatch(remove(ID));
  }
  return (
    <div className='Mcointainer'>
      <div className='upper'>
     {item.data.map((product)=>
     <div className="cointainerP" key={product.id}>
     <img src={product.image} className="imgP" alt="product" />
     <div className="title">{product.title}</div>
     <div className="price">price: {product.price} $</div>
     <button className='btn' onClick={()=>{onRemoveHandler(product)}}>Remove to cart</button>
   </div>
     )}
     </div>
    </div>
  )
}
