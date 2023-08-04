import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Toaster } from "react-hot-toast";

import './App.css';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import HomePage from './Pages/HomePage/HomePage';
import ProductPage from './Pages/ProductPage/ProductPage';
import Authentication from './Pages/Authentication/Authentication';
import CartPage from './Pages/CartPage/CartPage';

function App() {
  console.log(process.env.REACT_APP_ENDPOINT);
  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path={"/"} element={<HomePage />}></Route>
         <Route path={"/items"} element={<ProductPage/>}></Route>
        <Route path={"/auth"} element={<Authentication />}></Route>
        <Route path={"/cart"} element={<CartPage/>}></Route>
        
      </Routes>
      <Footer />
      <Toaster/>
    </BrowserRouter>
  );
}

export default App;
