import React, { useState, useReducer, useContext, useEffect } from "react";

// axios
import axios from "axios";

import {
  REGISTER_USER_BEGIN,
  REGISTER_USER_SUCCESS,
  REGISTER_USER_ERROR,
  DISPLAY_ALERT,
  CLEAR_ALERT,
  LOGIN_USER_BEGIN,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_ERROR,
  LOGOUT_USER,
  UPDATE_USER_BEGIN,
  UPDATE_USER_SUCCESS,
  UPDATE_USER_ERROR,
  CREATE_BOOKING_BEGIN,
  CREATE_BOOKING_SUCCESS,
  CREATE_BOOKING_ERROR,
  GET_BOOKINGS_BEGIN,
  GET_BOOKINGS_SUCCESS,
  GET_BOOKING_BEGIN,
  GET_BOOKING_SUCCESS,
  DELETE_BOOKING_BEGIN,
  UPDATE_BOOKING_BEGIN,
} from "./actions";

import reducer from "./reducer";

const token = localStorage.getItem("token");
const user = localStorage.getItem("user");

const initialState = {
  isLoading: false,
  showAlert: false,
  alertText: "",
  alertType: "",
  user: user ? JSON.parse(user) : null,
  token: token || null,
  bookings: [],
  booking: [],
};

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const displayAlert = () => {
    dispatch({ type: DISPLAY_ALERT });
    clearAlert();
  };

  const clearAlert = () => {
    setTimeout(() => {
      dispatch({ type: CLEAR_ALERT });
    }, 3000);
  };

  const addUserToLocalStorage = ({ user, token }) => {
    localStorage.setItem("user", JSON.stringify(user));
    localStorage.setItem("token", token);
  };

  const removeUserFromLocalStorage = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
  };

  const registerUser = async (currentUser) => {
    // console.log(currentUser);
    dispatch({ type: REGISTER_USER_BEGIN });
    try {
      const response = await axios.post("/api/user/register", currentUser);
      // console.log(response);
      const { user } = response.data;

      dispatch({
        type: REGISTER_USER_SUCCESS,
        payload: { user },
      });
    } catch (error) {
      console.log(error.response);
      dispatch({
        type: REGISTER_USER_ERROR,
        payload: {
          msg: error.response.data.message,
        },
      });
    }
    clearAlert();
  };

  const loginUser = async (currentUser) => {
    // console.log(currentUser);
    dispatch({ type: LOGIN_USER_BEGIN });
    try {
      const { data } = await axios.post("/api/jwt/login", currentUser);
      // console.log(response);
      const { user, token } = data;

      dispatch({
        type: LOGIN_USER_SUCCESS,
        payload: { user, token },
      });
      // local storage
      addUserToLocalStorage({ user, token });
    } catch (error) {
      // console.log(error.response);
      dispatch({
        type: LOGIN_USER_ERROR,
        payload: {
          msg: error.response.data.message,
        },
      });
    }
    clearAlert();
  };

  const logoutUser = () => {
    dispatch({ type: LOGOUT_USER });
    removeUserFromLocalStorage();
  };

  // Update user
  const authFetch = axios.create({
    baseURL: "/auth",
    headers: {
      Authorization: `Bearer ${state.token}`,
    },
  });

  // request interceptor
  authFetch.interceptors.request.use(
    (config) => {
      config.headers["Authorization"] = `Bearer ${state.token}`;
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

  // response interceptor
  authFetch.interceptors.response.use(
    (response) => {
      return response;
    },
    (error) => {
      if (error.response.status === 401) {
        logoutUser();
      }
      return Promise.reject(error);
    }
  );

  const updateUser = async (currentUser) => {
    dispatch({ type: UPDATE_USER_BEGIN });
    try {
      const { data } = await authFetch.put("/updateUser", currentUser);

      // no token
      const { user } = data;

      dispatch({
        type: UPDATE_USER_SUCCESS,
        payload: { user, token },
      });

      addUserToLocalStorage({ user, token: initialState.token });
    } catch (error) {
      if (error.response.status !== 401) {
        dispatch({
          type: UPDATE_USER_ERROR,
          payload: { msg: error.response.data.message },
        });
      }
    }
    clearAlert();
  };

  const createBooking = async (currentBooking) => {
    dispatch({ type: CREATE_BOOKING_BEGIN });
    try {
      const response = await authFetch.post("/bookings", currentBooking);

      dispatch({
        type: CREATE_BOOKING_SUCCESS,
      });
    } catch (error) {
      dispatch({
        type: CREATE_BOOKING_ERROR,
        payload: {
          msg: error.response.data.message,
        },
      });
    }
    clearAlert();
  };

  const getBookings = async (userName) => {
    let url = `/bookings/${userName}`;

    dispatch({ type: GET_BOOKINGS_BEGIN });
    try {
      const { data } = await authFetch.get(url);
      const bookings = data;
      dispatch({
        type: GET_BOOKINGS_SUCCESS,
        payload: {
          bookings,
        },
      });
    } catch (error) {
      console.log(error.response);
      // logoutUser();
    }
    clearAlert();
  };

  const getBookingById = async (id) => {
    let url = `/booking/${id}`;

    dispatch({ type: GET_BOOKING_BEGIN });
    try {
      const { data } = await authFetch.get(url);
      // console.log(data);
      const booking = data;
      dispatch({
        type: GET_BOOKING_SUCCESS,
        payload: {
          booking,
        },
      });
    } catch (error) {
      console.log(error.response);
      // logoutUser();
    }
    clearAlert();
  };

  // useEffect(() => {
  //   getBookings();
  // }, []);

  const deleteBooking = async (bookingId) => {
    dispatch({ type: DELETE_BOOKING_BEGIN });
    try {
      await authFetch.delete(`/booking/${bookingId}`);
      getBookings(user.userName);
    } catch (error) {
      console.log(error);
      // logoutUser();
    }
  };

  const updateBooking = async (currentBooking) => {
    dispatch({ type: UPDATE_BOOKING_BEGIN });
    try {
      await authFetch.put(`/bookings`, currentBooking);
    } catch (error) {
      console.log(error);
      // logoutUser();
    }
  };

  return (
    <AppContext.Provider
      value={{
        ...state,
        registerUser,
        displayAlert,
        loginUser,
        logoutUser,
        updateUser,
        createBooking,
        getBookings,
        deleteBooking,
        getBookingById,
        updateBooking,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

const useAppContext = () => {
  return useContext(AppContext);
};

export { AppProvider, initialState, useAppContext };

// const registerUser = async (currentUser) => {
//   try {
//     const response = await axios.post("/api/", currentUser);
//   } catch (error) {
//     console.log(error.response);
//   }
// };
