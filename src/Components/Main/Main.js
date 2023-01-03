
import './Main.css';
import { add } from "../Cart/Slices/CartSlice";
import { useDispatch } from "react-redux";
import { fetchProducts } from "../Cart/Slices/ProductSlice";
import { useSelector } from "react-redux";
import { Status } from "../Cart/Slices/ProductSlice";
import { useEffect } from 'react';
export default function Main() {

  const dispatch=useDispatch();

useEffect(()=>{
  dispatch(fetchProducts());
},[])
 

  const {data, status}=useSelector((state)=>state.Product);

  const onCartHandler=(product)=>{
    dispatch(add(product));
  }


  if(status===Status.LOADING)
  {
    <h1>Loading............</h1>
  }


  if(status===Status.ERROR)
  {
    <h1>Error.........</h1>
  }


  return (
    <div className="Mcointainer">
      <div className='upper'>
      {data.map((product) => (
        <div className="cointainerP" key={product.id}>
          <img src={product.image} className="imgP" alt="product" />
          <div className="title">{product.title}</div>
          <div className="price">price: {product.price} $</div>
          <button onClick={()=>{onCartHandler(product)}} className='btn'>Add To Cart</button>
        </div>
      ))}
      </div>
    </div>
  );
}
