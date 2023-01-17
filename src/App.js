import { Route, Routes } from "react-router-dom";
import Header from "./Components/Header/Header";
import Main from "./Components/Main/Main";
import Cart from './Components/Cart/Cart';
import store from "./Components/Cart/Slices/Store";
import { Provider } from "react-redux";
import './App.css';
import Product from "./Pages/Product";

function App() {
  return (
    <div className="o-body">
      <Provider store={store}>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/product/:id" element={<Product/>} />
      </Routes>
      </Provider>
    </div>
  );
}

export default App;
