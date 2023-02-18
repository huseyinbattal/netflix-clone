import React, { useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomeScreen from "./screens/HomeScreen";
import LoginScreen from "./screens/LoginScreen";
import { auth } from "./firebase";
import { useDispatch } from "react-redux";
import { login, logout } from "./features/user/userSlice";

function App() {
  const user = null;
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
          //Logged in
        dispatch(login({
          uid: userAuth.uid,
          email:userAuth.email,
        }))
      } else {
          //Logged out
        dispatch(logout)
        }
    })
    
    return unsubscribe;

  }, [])
  
  return (
    <div className="app">
      <Router>
        {!user ? (
          <LoginScreen />
        ) : (
          <Routes>
            <Route exact path="/" element={<HomeScreen />} />
          </Routes>
        )}
      </Router>
    </div>
  );
}

export default App;
