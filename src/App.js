import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Toaster } from "react-hot-toast";

import './App.css';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import HomePage from './Pages/HomePage/HomePage';
import ProductPage from './Pages/ProductPage/ProductPage';
import Authentication from './Pages/Authentication/Authentication';
import CartPage from './Pages/CartPage/CartPage';
import SingleProductPage from './Pages/SIngleProductPage/SingleProductPage';
import Order from './Components/Orders/Order';
import SuccessPage from './Components/SuccessPage/SuccessPage';
import FinalSucessPage from './Components/SuccessPage/FinalSucessPage';

function App() {
  console.log(process.env.REACT_APP_ENDPOINT);
  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path={"/"} element={<HomePage />}></Route>
         <Route path={"/items"} element={<ProductPage/>}></Route>
        <Route path={"/auth"} element={<Authentication />}></Route>
        <Route path={"/cart"} element={<CartPage />}></Route>
        <Route path={"/product/:id"} element={<SingleProductPage />}></Route>
        <Route path={"/profile/order"} element={<Order />}></Route>
        <Route path={"/payment/success/card/:id"} element={<SuccessPage />}></Route>
         <Route path={"/successPage"} element={<FinalSucessPage/>}></Route>
        
      </Routes>
      <Footer />
      <Toaster/>
    </BrowserRouter>
  );
}

export default App;
