import React from "react";
import { useState, useEffect } from "react";
import { useAppContext } from "../context/appContext";
import { useNavigate } from "react-router-dom";
import "./register.css";
import "./pages.css";
import Alert from "../components/Alert";

const initialState = {
  hallName: "",
  date: "",
  location: "",
  isMember: true,
  showAlert: false,
};

const AddBooking = () => {
  const [values, setValues] = useState(initialState);

  //   const navigate = useNavigate();

  const { createBooking, showAlert, displayAlert, user } = useAppContext();
  const userName = user.userName;

  const toggleMember = () => {
    setValues({ ...values, isMember: !values.isMember });
  };

  const handleChange = (e) => {
    // console.log(e.target);
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    // console.log(e.target);
    const { hallName, date, location } = values;
    if (!hallName || !date || !location) {
      displayAlert();
      // console.log("hello");
      return;
    }

    const currentBooking = { userName, hallName, date, location };

    createBooking(currentBooking);

    // console.log(values);
  };

  //   useEffect(() => {
  //     if (user) {
  //       setTimeout(() => {
  //         navigate("/");
  //       }, 3000);
  //     }
  //   }, [user, navigate]);

  return (
    <>
      <div className="container-register">
        <form autoComplete="off" onSubmit={onSubmit}>
          <h3>Book Your Hall</h3>
          {showAlert && <Alert />}
          <div className="">
            <label htmlFor="name" className="">
              User Name :
            </label>
            <input
              type="text"
              value={user.userName}
              name="userName"
              id="name"
              disabled
            />
          </div>

          <div className="">
            <label htmlFor="hall" className="">
              Hall Name :
            </label>
            <input
              type="text"
              value={values.hallName}
              name="hallName"
              onChange={handleChange}
              id="hall"
            />
          </div>

          <div className="">
            <label htmlFor="date" className="">
              Date :
            </label>
            <input
              type="date"
              value={values.date}
              name="date"
              onChange={handleChange}
              id="date"
            />
          </div>

          <div className="">
            <label htmlFor="location" className="">
              Location :
            </label>
            <input
              type="text"
              value={values.location}
              name="location"
              onChange={handleChange}
              id="location"
            />
          </div>

          <button type="submit">Let's Book</button>
        </form>
      </div>
    </>
  );
};

export default AddBooking;
