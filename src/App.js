import { Route, Routes } from "react-router-dom";
import Header from "./Components/Header/Header";
import Main from "./Components/Main/Main";
import Cart from './Components/Cart/Cart';
import Footer from "./Components/Foooter/Footer";
import store from "./Components/Cart/Slices/Store";
import { Provider } from "react-redux";
import './App.css';

function App() {
  return (
    <div className="o-body">
      <Provider store={store}>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
      <Footer/>
      </Provider>
    </div>
  );
}

export default App;
