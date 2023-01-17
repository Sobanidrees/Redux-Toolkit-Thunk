import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import './Product.css';
import { add } from "../Components/Cart/Slices/CartSlice";
export default function Product() {
  const { data } = useSelector((state) => state.Product);
  const ID = useParams();
  console.log(data);
  const product = data.filter((data) => {
    if (data.id === parseInt(ID.id)) {
        console.log(data.id);
      return data;
    }
  });
  console.log(product);

  const dispatch = useDispatch();
  const onCartHandler = (product) => {
    dispatch(add(product));
  };
  return (
    <div>
      
        <div className="Mcointainer1">
            <div className="cointainerPP">
            <div className="DID">
            <h1>Description</h1>
            <div className="title1">{product[0].description}</div>
            </div>
              <img src={product[0].image} className="imgPP" alt="product" />
              <div className="TiT">
              <h1>Title</h1>
              <div className="title1">{product[0].title}</div>
              </div>
             
              
            </div>
            <div className="price1">price: {product[0].price} $</div>
            <button
                onClick={() => {
                  onCartHandler({ ...product[0], count: 1 });
                }}
                className="btn"
              >
                Add To Cart
              </button>
        </div>
      
    </div>
  );
}
