import { useEffect } from "react";
import { useAppContext } from "../context/appContext";
import { useNavigate } from "react-router-dom";
import "./pages.css";

const NotAdmin = () => {
  return (
    <>
      <div className="booking-container">
        <center>
          <h2>You are not Admin!</h2>
        </center>
      </div>
    </>
  );
};

export default NotAdmin;
