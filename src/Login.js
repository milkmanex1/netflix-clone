import React from "react";
import "./Login.css";
import users from "./Users";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

import UserContext from "./UserContext";
import { useContext } from "react";

const Login = () => {
  const navigate = useNavigate();

  const { user, setUser } = useContext(UserContext);

  const userLogin = (userImg, userId) => {
    setUser({ avatar: userImg, id: userId });
    navigate("/home");
  };
  return (
    <div className="login">
      <div className="logo-container">
        <img
          className="logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1198px-Netflix_2015_logo.svg.png"
          alt="netflix logo"
        />
      </div>

      <div className="section-center">
        <h1>Who's watching?</h1>
        <div className="profile-container">
          {users.map((user) => {
            return (
              <div
                key={user.id}
                className="profile"
                onClick={() => userLogin(user.img, user.id)}
              >
                <img className="avatar" src={user.img} alt="user img" />
                <div className="name">{user.name}</div>
              </div>
            );
          })}
        </div>

        <div className="bottom">Manage Profiles</div>
      </div>
    </div>
  );
};

export default Login;
