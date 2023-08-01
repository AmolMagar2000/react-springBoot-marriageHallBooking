import React from "react";
import { useState, useEffect } from "react";
import Alert from "../components/Alert";
import { useAppContext } from "../context/appContext";
import { useNavigate } from "react-router-dom";
import "./register.css";
import "./pages.css";

const initialState = {
  userName: "",
  userPassword: "",
  isMember: true,
  showAlert: false,
};

const Login = () => {
  const [values, setValues] = useState(initialState);

  const navigate = useNavigate();

  const { isLoading, showAlert, displayAlert, loginUser, user } =
    useAppContext();

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
    const { userName, userPassword } = values;
    if (!userName || !userPassword) {
      displayAlert();
      return;
    }

    const currentUser = { userName, userPassword };

    loginUser(currentUser);

    // console.log(values);
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
          <h3>Login</h3>
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

export default Login;
