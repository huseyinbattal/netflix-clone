import React from "react";
import { useSelector } from "react-redux";
import { selectUser } from "../features/user/userSlice";
import { auth } from "../firebase";
import Nav from "../Nav";
import PlansScreen from "./PlansScreen";
import "./ProfileScreen.css";

function ProfileScreen() {
  const d = new Date();
  let year = d.getFullYear();
  let day = d.getDate();
  let month = d.getMonth()+1;
  const user = useSelector(selectUser);
  return (
    <div className="profileScreen">
      <Nav />
      <div className="profileScreen__body">
        <h1>Edit Profile</h1>
        <div className="profileScreen__info">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
            alt=""
          />
          <div className="profileScreen__details">
            <h2> {user.email} </h2>
            <div className="profileScreen__plans">
            <h3 className="date">Membership start date: <span className="date_1">{month}/{day}/{year}</span> </h3>
              <h3>Plans</h3>
              <PlansScreen/>
              <button
                onClick={() => auth.signOut()}
                className="profileScreen__signOut"
              >
                Sign Out
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileScreen;
