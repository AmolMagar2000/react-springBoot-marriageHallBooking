import { useAppContext } from "../context/appContext";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import "./pages.css";

const Bookings = () => {
  const { getBookings, bookings, deleteBooking, user } = useAppContext();
  useEffect(() => {
    getBookings(user.userName);
  }, [bookings]);

  // console.log(bookings);

  if (bookings.length === 0) {
    return (
      <>
        <div className="booking-container">
          <h2>No bookings to display...</h2>
        </div>
      </>
    );
  }

  return (
    <>
      <div className="booking-container">
        {bookings.map((booking) => {
          return (
            <div key={booking.id} className="booking-card">
              <p>
                <span className="booking-properties">Booking Id:</span>
                <span className="booking-values">{booking.id}</span>
              </p>
              <p>
                <span className="booking-properties">User Name:</span>
                <span className="booking-values">{booking.userName}</span>
              </p>
              <p>
                <span className="booking-properties">Hall Name:</span>
                <span className="booking-values">{booking.hallName}</span>
              </p>
              <p>
                <span className="booking-properties">Date:</span>
                <span className="booking-values">{booking.date}</span>
              </p>
              <p>
                <span className="booking-properties">Location:</span>
                <span className="booking-values">{booking.location}</span>
              </p>

              <Link to={"/update-booking/" + booking.id}>
                <button>Update</button>
              </Link>

              <button onClick={() => deleteBooking(booking.id)}>Delete</button>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Bookings;

// useEffect(() => {
//   getFeedbacks();
// }, []);

// const getFeedbacks = async () => {
//   try {
//     const { feedbacks } = await axios.get("/api");
//   } catch (error) {
//     console.log(error.response);
//   }
// };
