import React from "react";
import "./ProductSlider.css";
import ReactStars from "react-rating-stars-component";
import { toast } from "react-hot-toast";
import { useDispatch } from "react-redux";
import { AddToCardThunk } from "../../Reducers/CardReducer";
import Cookies from "js-cookie";

const Product = ({ img, rs, name, rating, quantity, id }) => {
  const dispatch = useDispatch();
  const options = {
    edit: false,
    color: "rgba(20,20,20,0.1)",
    activeColor: "tomato",
    size: window.innerWidth < 600 ? 20 : 25,
    value: rating,
    isHalf: true,
  };
  const token = Cookies.get("login");
  const AddToCard = () => {
    if (!token) return toast.error("Login First");
    const data = {
      product_id: id,
      token: token,
    };
    dispatch(AddToCardThunk(data));
  };
  return (
    <>
      <div className="gallery">
        <div className="content">
          <img src={img} alt={name} />
          <h3>{name}</h3>
          <p>
            <ReactStars {...options} />
          </p>
          <h6>₹{rs}</h6>
          {quantity <= 0 ? (
            <button className="buy-1" style={{ color: "red" }}>
              Out of Stock
            </button>
          ) : (
            <button onClick={AddToCard} className="buy-1">
              Add to card
            </button>
          )}
        </div>
      </div>
    </>
  );
};

export default Product;
