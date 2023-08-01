import React from "react";
import { useState, useEffect } from "react";
import { useAppContext } from "../context/appContext";
import { useNavigate } from "react-router-dom";
import "./register.css";
import "./pages.css";
import Alert from "../components/Alert";

const Profile = () => {
  const { user, showAlert, displayAlert, updateUser, isLoading } =
    useAppContext();
  const [userName, setUserName] = useState(user?.userName);
  const [userEmail, setUserEmail] = useState(user?.userEmail);
  const [userPassword, setUserPassword] = useState("1234");
  const [userPhone, setUserPhone] = useState(user?.userPhone);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!userEmail || !userPhone || !userPassword) {
      // test and remove temporary
      displayAlert();
      return;
    }

    updateUser({ userName, userEmail, userPhone, userPassword });
  };

  return (
    <>
      <div className="container-register">
        <form autoComplete="off" onSubmit={handleSubmit}>
          <h3>Profile</h3>
          {showAlert && <Alert />}
          <div className="">
            <label htmlFor="name" className="">
              User Name :
            </label>
            <input
              type="text"
              value={userName}
              name="userName"
              id="name"
              disabled
            />
          </div>

          <div className="">
            <label htmlFor="email" className="">
              Email :
            </label>
            <input
              type="text"
              value={userEmail}
              name="userEmail"
              onChange={(e) => setUserEmail(e.target.value)}
              id="email"
            />
          </div>

          <div className="">
            <label htmlFor="phone" className="">
              Phone No. :
            </label>
            <input
              type="text"
              value={userPhone}
              name="userPhone"
              onChange={(e) => setUserPhone(e.target.value)}
              id="phone"
            />
          </div>

          <div className="">
            <label htmlFor="password" className="">
              Password :
            </label>
            <input
              type="text"
              value={userPassword}
              name="userPassword"
              onChange={(e) => setUserPassword(e.target.value)}
              id="password"
            />
          </div>

          <button type="submit">Submit</button>
        </form>
      </div>
    </>
  );
};

export default Profile;
