import React, { useEffect, useState } from "react";
import { BsSearch } from "react-icons/bs";
import "./ProductPage.css";
import Product from "../../Components/ProductSlider/ProductSlider";
import data from "../data.js";
import { useDispatch, useSelector } from "react-redux";
import { FetchAllProduct } from "../../Reducers/ProductReducer";
import Loader from "../../Components/Loader/Loader";
const ProductPage = () => {
  const dispatch = useDispatch();
  const [MinRange, MinSetRange] = useState(0);
  const [MaxRange, MaxSetRange] = useState(Infinity);
  const [Name, SetName] = useState("");

  useEffect(() => {
    dispatch(FetchAllProduct());
  }, []);
  const { Arr, loading } = useSelector((state) => state.ProductReducer);
  if (loading) {
    return <Loader />;
  }

  const NameChange = (e) => {
    SetName(e.target.value.toLowerCase());
  };
  const MinChange = (e) => {
    MinSetRange(e.target.value);
  };
  const MaxChange = (e) => {
    MaxSetRange(e.target.value);
  };

  const product = data;
  return (
    <div>
      <div className="searchbar">
        <input
          placeholder="Search"
          type="text"
          onChange={NameChange}
          className="searchinput"
        />
        <div className="btndiv">
          <button className="search">
            <BsSearch size={20} />
          </button>
        </div>
      </div>
      {/* Min Max code */}

      <div class="wrapper">
        <div class="price-input">
          <div class="field">
            <span>Min</span>
            <input
              type="number"
              class="input-min"
              value={MinRange}
              onChange={MinChange}
            />
          </div>
          <div class="separator">-</div>
          <div class="field">
            <span>Max</span>
            <input
              type="number"
              class="input-max"
              value={MaxRange}
              onChange={MaxChange}
            />
          </div>
        </div>
      </div>

      <h1 className="producth1">Products</h1>
      <div className="allproduct" style={{ display: "flex", flexWrap: "wrap" }}>
        {Arr &&
          Arr.filter((ele) => {
            return (
              (Name.toLowerCase() === ""
                ? ele
                : ele.name.toLowerCase().includes(Name)) &&
              ele.price >= (MinRange === "" ? 0 : MinRange) &&
              ele.price <= (MaxRange === "" ? Infinity : MaxRange)
            );
          }).map((ele) => (
            <Product
              key={ele.ind}
              name={ele.name}
              rs={ele.price}
              rating={ele.rating}
              img={ele.img}
              id={ele._id}
              quantity={ele.quantity}
            ></Product>
          ))}
      </div>
    </div>
  );
};

export default ProductPage;
