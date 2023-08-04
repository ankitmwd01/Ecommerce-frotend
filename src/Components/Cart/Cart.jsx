import React, { useState } from "react";
import "./Cart.css";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { toast } from "react-hot-toast";
import { DeleteTheCard, UpdateTheCard } from "../../Reducers/CardReducer";
import { Button } from "@chakra-ui/react";
const Cart = ({ img, price, neededQuantity, totalQuantity, name, id }) => {
  const dispatch = useDispatch();
  const [required, setRequired] = useState(neededQuantity);
  const increase = () => {
    if (required + 1 <= totalQuantity) {
      setRequired(required + 1);
      dispatch(UpdateTheCard({ id: id, required: required + 1 }));
    } else {
      toast.error(`only ${required} is Available`);
    }
  };
  const decrease = () => {
    if (required - 1 >= 1) {
      setRequired(required - 1);
      dispatch(UpdateTheCard({ id: id, required: required - 1 }));
    } else {
      toast.error(`AtLeast purchase 1`);
    }
  };
  const DeleteCard = () => {
    dispatch(DeleteTheCard({ id: id }));
  };
  return (
    <div className="shopping-cart">
      <div className="title">{name}</div>

      <div className="item">
        <div className="buttons">
          <span className="delete-btn"></span>
          <span className="like-btn"></span>
        </div>

        <div className="image">
          <img src={img} alt={name} />
        </div>

        <div className="description">
          <h5>Total Price : {required * price}</h5>
          <h5>Price : {price}</h5>
        </div>

        <div className="quantity">
          <button
            className="plus-btn"
            type="button"
            name="button"
            onClick={increase}
          >
            <AiOutlinePlus
              color="red"
              style={{
                marginLeft: "6px",
              }}
            />
          </button>
          <input
            type="text"
            name="name"
            value={required}
            readOnly
            onChange={(e) => setRequired(e.target.value)}
          />
          <button
            className="minus-btn"
            type="button"
            name="button"
            onClick={decrease}
          >
            <AiOutlineMinus
              color="red"
              style={{
                marginLeft: "6px",
              }}
            />
          </button>
        </div>
        <Button backgroundColor={"red"} color={"white"} onClick={DeleteCard}>
          Delete
        </Button>
      </div>
    </div>
  );
};

export default Cart;
