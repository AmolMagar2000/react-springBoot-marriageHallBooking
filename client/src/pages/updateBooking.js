import React from "react";
import { useState, useEffect } from "react";
import { useAppContext } from "../context/appContext";
import { useNavigate, useParams } from "react-router-dom";
import "./register.css";
import "./pages.css";
import Alert from "../components/Alert";

const UpdateBooking = () => {
  const {
    updateBooking,
    showAlert,
    displayAlert,
    user,
    getBookingById,
    booking,
  } = useAppContext();

  const { noid } = useParams();
  //   console.log(noid);

  useEffect(() => {
    getBookingById(noid);
    // const { id, userName, hallName, date, location } = booking;
    // console.log(booking);
  }, []);

  const [id, setId] = useState(booking?.id);
  const [userName, setUserName] = useState(booking?.userName);
  const [hallName, setHallName] = useState(booking?.hallName);
  const [date, setDate] = useState(booking?.date);
  const [location, setLocation] = useState(booking?.location);

  //   console.log(booking);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!hallName || !date || !location) {
      // test and remove temporary
      displayAlert();
      return;
    }
    updateBooking({ id, userName, hallName, date, location });
  };

  //   console.log(state);

  //   useEffect(() => {
  //     if (user) {
  //       setTimeout(() => {
  //         navigate("/");
  //       }, 3000);
  //     }
  //   }, [user, navigate]);

  //   if (booking.length === 0) {
  //     return (
  //       <>
  //         <div className="booking-container">
  //           <h2>Loading...</h2>
  //         </div>
  //       </>
  //     );
  //   }
  return (
    <>
      {booking.length === 0 ? (
        <div className="booking-container">
          <h2>Loading...</h2>
        </div>
      ) : (
        <div className="container-register">
          <form autoComplete="off" onSubmit={handleSubmit}>
            <h3>Update Booking</h3>
            {showAlert && <Alert />}
            <div className="">
              <label htmlFor="id" className="">
                Booking Id :
              </label>
              <input
                type="text"
                value={booking.id}
                name="id"
                id="id"
                disabled
              />
            </div>
            <div className="">
              <label htmlFor="name" className="">
                User Name :
              </label>
              <input
                type="text"
                value={booking.userName}
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
                value={hallName}
                onChange={(e) => setHallName(e.target.value)}
                name="hallName"
                id="hall"
              />
            </div>

            <div className="">
              <label htmlFor="date" className="">
                Date :
              </label>
              <input
                type="text"
                value={date}
                name="date"
                id="date"
                onChange={(e) => setDate(e.target.value)}
              />
            </div>

            <div className="">
              <label htmlFor="location" className="">
                Location :
              </label>
              <input
                type="text"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                name="location"
                id="location"
              />
            </div>

            <button type="submit">Let's Update</button>
          </form>
        </div>
      )}
    </>
  );
};

export default UpdateBooking;
