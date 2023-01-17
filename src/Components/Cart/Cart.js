import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { remove, addCount, removeCount } from "./Slices/CartSlice";
import "./Cart.css";
export default function Cart() {
  const item = useSelector((state) => state.Cart);

  const dispatch = useDispatch();
  const onRemoveHandler = (ID) => {
    dispatch(remove(ID));
  };

const onCountHandler=(pro)=>{
dispatch(addCount(pro));
}

const onCountLess=(pro)=>{
  dispatch(removeCount(pro));
}
  return (
    <div className="Mcointainer">
      <div className="upper">
        {item.data.map((product) => (
     
          <div className="cointainerP" key={product.id}>
            <img src={product.image} className="imgP" alt="product" />
            <div className="btt">
              <div className="title">{product.title}</div>
              <div className="bt">
                <button className="bt1" onClick={()=>onCountHandler(product)}>+</button>
                <div>{product.count}</div>
                <button className="bt1" onClick={()=>{onCountLess(product)}}>-</button>
              </div>
              
            </div>

            <div className="price">price: {product.price} $</div>
            <button
              className="btn"
              onClick={() => {
                onRemoveHandler(product);
              }}
            >
              Remove to cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
