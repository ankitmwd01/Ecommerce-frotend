import React, { useEffect } from "react";
import data from "../data.js";
import Cart from "../../Components/Cart/Cart.jsx";
import { BsFillBagCheckFill } from "react-icons/bs";
import Cookies from "js-cookie";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { GetAllCard } from "../../Reducers/CardReducer.js";
import Loader from "../../Components/Loader/Loader.jsx";
const CartPage = () => {
  const token = Cookies.get("login");
  const dispatch = useDispatch();

  useEffect(() => {
    if (token) dispatch(GetAllCard(token));
  }, []);
  const { loading, CardArr } = useSelector((state) => state.CardReducer);
  if (!token) {
    return <Link to={"/auth"}> Login </Link>;
  }
  if (loading) {
    return <Loader />;
  }
  console.log(CardArr);
  return (
    <>
      <h1
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "30px",
          fontSize: "30px",
          fontWeight: "bold",
          color: "crimson",
        }}
      >
        Cart <BsFillBagCheckFill style={{ marginLeft: "20px" }} />
      </h1>
      {CardArr?.map((val, ind) => (
        <Cart
          img={val.product_id.img}
          price={val.product_id.price}
          name={val.product_id.name}
          totalQuantity={val.product_id.quantity}
          neededQuantity={val.quantity}
          id={val._id}
        ></Cart>
      ))}
    </>
  );
};

export default CartPage;
