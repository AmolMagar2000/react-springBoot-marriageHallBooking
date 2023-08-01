import { useEffect } from "react";
import { useAppContext } from "../context/appContext";
import { useNavigate } from "react-router-dom";
import "./pages.css";

const Logout = () => {
  const { logoutUser } = useAppContext();
  const navigate = useNavigate();
  useEffect(() => {
    logoutUser();
    navigate("/login");
  }, []);

  return (
    <>
      <div className="booking-container">
        <h2>Succesfully Logout...</h2>
      </div>
    </>
  );
};

export default Logout;
