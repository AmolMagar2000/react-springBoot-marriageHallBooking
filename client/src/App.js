import Register from "./pages/register";
import Login from "./pages/login";

import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Profile from "./pages/profile";
import Logout from "./pages/logout";
import AddBooking from "./pages/addBooking";
import Bookings from "./pages/bookings";
import UpdateBooking from "./pages/updateBooking";
import ProtectedRoute from "./pages/ProtectedUser";
import NotAdmin from "./pages/notAdmin";
import ProtectedAdmin from "./pages/ProtectedAdmin";
import AdminPage from "./pages/admin";

import { Home } from "./components/Home";
import { Nevigationbar } from "./Nevigationbar";
import Search from "./components/Search";
import { ContactUs } from "./components/ContactUs";
import { AllFeedback } from "./components/AllFeedback";
import { Feedback } from "./components/Feedback";
import ErrorPage from "./pages/error";

function App() {
  return (
    // <BrowserRouter>
    //   <Routes>
    //     <Route path="/register" element={<Register />} />
    //     <Route path="/login" element={<Login />} />
    //     <Route path="/profile" element={<Profile />} />
    //     <Route path="/logout" element={<Logout />} />
    //     <Route
    //       path="/bookings"
    //       element={
    //         <ProtectedRoute>
    //           <Bookings />
    //         </ProtectedRoute>
    //       }
    //     />
    //     <Route
    //       path="/admin"
    //       element={
    //         <ProtectedAdmin>
    //           <AdminPage />
    //         </ProtectedAdmin>
    //       }
    //     />
    //     <Route path="/add-booking" element={<AddBooking />} />
    //     <Route path="/update-booking/:noid" element={<UpdateBooking />} />
    //     <Route path="/not-admin" element={<NotAdmin />} />
    //   </Routes>
    // </BrowserRouter>

    <BrowserRouter>
      <Nevigationbar></Nevigationbar>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/search" element={<Search></Search>}></Route>
        <Route path="/ContactUs" element={<ContactUs></ContactUs>}></Route>

        <Route
          path="/AllFeedback"
          element={<AllFeedback></AllFeedback>}
        ></Route>
        <Route path="/Feedback" element={<Feedback></Feedback>}></Route>

        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/profile"
          element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          }
        />
        <Route path="/logout" element={<Logout />} />
        <Route
          path="/bookings"
          element={
            <ProtectedRoute>
              <Bookings />
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin"
          element={
            <ProtectedAdmin>
              <AdminPage />
            </ProtectedAdmin>
          }
        />
        <Route
          path="/add-booking"
          element={
            <ProtectedRoute>
              <AddBooking />
            </ProtectedRoute>
          }
        />
        <Route path="/update-booking/:noid" element={<UpdateBooking />} />
        <Route path="/not-admin" element={<NotAdmin />} />
        <Route path="*" element={<ErrorPage />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
