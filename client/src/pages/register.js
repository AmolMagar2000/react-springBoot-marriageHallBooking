import React from "react";
import { useState, useEffect } from "react";
import { useAppContext } from "../context/appContext";
import { useNavigate } from "react-router-dom";
import "./register.css";
import "./pages.css";
import Alert from "../components/Alert";

const initialState = {
  userName: "",
  userEmail: "",
  userPassword: "",
  userPhone: "",
  isMember: true,
  showAlert: false,
};

const Register = () => {
  const [values, setValues] = useState(initialState);

  //   const navigate = useNavigate();

  const { registerUser, showAlert, displayAlert, user } = useAppContext();
  const navigate = useNavigate();

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
    const { userName, userEmail, userPassword, userPhone } = values;
    if (!userName || !userEmail || !userPassword || !userPhone) {
      displayAlert();
      // console.log("hello");
      return;
    }

    const currentUser = { userName, userEmail, userPassword, userPhone };

    registerUser(currentUser);

    // console.log(values);
    //navigate("/login");
  };

  useEffect(() => {
    if (user) {
      setTimeout(() => {
        navigate("/");
      }, 3000);
    }
  }, [user, navigate]);

  return (
    <>
      <div className="container-register">
        <form autoComplete="off" onSubmit={onSubmit}>
          <h3>Register</h3>
          {showAlert && <Alert />}
          <div className="">
            <label htmlFor="name" className="">
              User Name :
            </label>
            <input
              type="text"
              value={values.userName}
              name="userName"
              onChange={handleChange}
              id="name"
            />
          </div>

          <div className="">
            <label htmlFor="email" className="">
              Email :
            </label>
            <input
              type="text"
              value={values.userEmail}
              name="userEmail"
              onChange={handleChange}
              id="email"
            />
          </div>

          <div className="">
            <label htmlFor="phone" className="">
              Phone No. :
            </label>
            <input
              type="text"
              value={values.userPhone}
              name="userPhone"
              onChange={handleChange}
              id="phone"
            />
          </div>

          <div className="">
            <label htmlFor="password" className="">
              Password :
            </label>
            <input
              type="text"
              value={values.userPassword}
              name="userPassword"
              onChange={handleChange}
              id="password"
            />
          </div>

          <button type="submit">Submit</button>
        </form>
      </div>
    </>
  );
};

export default Register;
