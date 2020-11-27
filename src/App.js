import React, { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";

import "./App.css";

import Chat from "./features/Chat";
import Login from "./features/Login";
import Sidebar from "./features/Sidebar";
import { auth } from "./features/firebase";
import { selectUser } from "./features/userSlice";
import { login, logout } from "./features/userSlice";

function App() {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch(
          login({
            uid: authUser.uid,
            photo: authUser.photoURL,
            email: authUser.email,
            displayName: authUser.displayName,
          })
        );
      } else {
        //The user is logged out
        dispatch(logout());
      }
    });
  }, [dispatch]);
  return (
    <div className="app">
      {user ? (
        <>
          <Sidebar />
          <Chat />
        </>
      ) : (
        <Login />
      )}
    </div>
  );
}

export default App;
