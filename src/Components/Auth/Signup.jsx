import React, { Fragment, useState } from "react";
import "./Auth.css";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { UserRegister } from "../../Reducers/AuthenticationReducer";
import Loader from "../Loader/Loader";
const Signup = () => {
  const dispatch = useDispatch();
  const [user, SetUser] = useState();
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(UserRegister(user));
  };
  const { loading } = useSelector((state) => state.AuthenticationReducer);
  if (loading) {
    return <Loader />;
  }
  const userChange = (e) => {
    SetUser({ ...user, [e.target.name]: e.target.value });
  };
  return (
    <>
      <Fragment>
        <div className="container">
          <form onSubmit={submitHandler}>
            <h1>SIGN UP</h1>
            <div className="from-group">
              <label for="name">Name</label>
              <input
                type="text"
                className="form-control"
                onChange={userChange}
                name="name"
                required
              />
            </div>
            <div className="from-group">
              <label for="email">Email</label>
              <input
                type="email"
                className="form-control"
                onChange={userChange}
                name="email"
                required
              />
            </div>
            <div className="from-group">
              <label for="password">Password</label>
              <input
                type="password"
                className="form-control"
                onChange={userChange}
                name="password"
                required
              />
            </div>
            <div className="from-group">
              <label for="phone">Contact Number</label>
              <input
                type="number"
                className="form-control"
                onChange={userChange}
                name="phone"
                required
              />
            </div>
            <div className="from-group">
              <select
                id="gender-select"
                name="gender"
                className="form-control"
                required
                onChange={userChange}
              >
                <option value="">Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="transgender">Trans Gender</option>
              </select>
            </div>
            <input type="submit" className="btn" />
          </form>
        </div>
      </Fragment>
    </>
  );
};
export default Signup;
