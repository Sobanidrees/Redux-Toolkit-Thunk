import "./Main.css";
import { useDispatch } from "react-redux";
import { fetchProducts } from "../Cart/Slices/ProductSlice";
import { useSelector } from "react-redux";
import { Status } from "../Cart/Slices/ProductSlice";
import { useEffect } from "react";
import { Link } from "react-router-dom";

export default function Main() {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  const { data, status } = useSelector((state) => state.Product);

 
  if (status === Status.LOADING) {
    <h1>Loading............</h1>;
  }

  if (status === Status.ERROR) {
    <h1>Error.........</h1>;
  }

  return (
    <div className="Mcointainer">
      <div className="upper">
        {data.map((product) => (
          <div className="cointainerP" key={product.id}>
            <Link className="link1" to={`/product/${product.id}`}>
              <img src={product.image} className="imgP" alt="product" />
            
            <div className="title">{product.title}</div>
            <div className="price">price: {product.price} $</div>

            <button
              className="btn"
            >
              See Description
            </button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
