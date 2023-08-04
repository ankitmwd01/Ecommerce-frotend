import React, { useEffect } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import data from "../data.js";
import Product from "../ProductSlider/ProductSlider.jsx";
import { useDispatch, useSelector } from "react-redux";
import { FetchAllProduct } from "../../Reducers/ProductReducer.js";
import Loader from "../Loader/Loader.jsx";
const MainPageSlider = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(FetchAllProduct());
  }, []);
  const { Arr, loading } = useSelector((state) => state.ProductReducer);
  if (loading) {
    return <Loader />;
  }
  return (
    <div style={{ display: "flex", flexWrap: "wrap" }}>
      {Arr?.map((items, index) => (
        <Product
          img={items.img}
          name={items.name}
          rs={items.price}
          rating={items.rating}
          id={items._id}
        ></Product>
      ))}
    </div>
  );
};

export default MainPageSlider;
