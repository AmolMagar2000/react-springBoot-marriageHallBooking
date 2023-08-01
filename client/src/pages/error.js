import { useEffect } from "react";
import { useAppContext } from "../context/appContext";
import { useNavigate } from "react-router-dom";
import "./pages.css";

const ErrorPage = () => {
  return (
    <>
      <div className="booking-container">
        <center>
          <h2>404 - Not Found</h2>
        </center>
      </div>
    </>
  );
};

export default ErrorPage;
