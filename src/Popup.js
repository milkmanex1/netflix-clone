import React, { useEffect, useState } from "react";
import users from "./Users";
import s from "./Popup.module.css";
import EditIcon from "@material-ui/icons/Edit";
import PersonOutlineIcon from "@material-ui/icons/PersonOutline";
import HelpOutlineIcon from "@material-ui/icons/HelpOutline";

import UserContext from "./UserContext";
import { useContext } from "react";

const Popup = () => {
  //   const mountedStyle = { animation: "inAnimation 250ms ease-in" };
  //   const unmountedStyle = {
  //     animation: "outAnimation 270ms ease-out",
  //     animationFillMode: "forwards",
  //   };

  const [show, setShow] = useState(false);

  const { user, setUser, dropdown, setDropdown } = useContext(UserContext);

  const switchUser = (userImg, userId) => {
    setUser({ avatar: userImg, id: userId });
  };

  return (
    dropdown && (
      <div
        className={s.box}
        // style={dropdown ? mountedStyle : unmountedStyle}
        // onAnimationEnd={() => {
        //   if (!dropdown) setDropdown(false);
        // }}
        onMouseEnter={() => {
          setDropdown(true);
        }}
        onMouseLeave={() => {
          setDropdown(false);
        }}
      >
        <div className={s.profiles}>
          {users.map((eUser) => {
            if (eUser.id !== user.id) {
              return (
                <div
                  key={eUser.id}
                  className={s.profile}
                  onClick={() => switchUser(eUser.img, eUser.id)}
                >
                  <img
                    className={s.avatar}
                    src={
                      eUser.img ||
                      "https://i.pinimg.com/originals/e3/94/30/e39430434d2b8207188f880ac66c6411.png"
                    }
                    alt="avatar"
                  />
                  <div className={s.name}>{eUser.name}</div>
                </div>
              );
            }
          })}
        </div>

        <div className={s.top}>
          <div className={s.icon}>
            <EditIcon></EditIcon>
          </div>
          <div className={s.text}>Manage Profiles</div>
        </div>
        <div className={s.mid}>
          <div className={s.icon}>
            <PersonOutlineIcon></PersonOutlineIcon>
          </div>
          <div className={s.text}>Account</div>
          <div className={s.icon}>
            <HelpOutlineIcon></HelpOutlineIcon>
          </div>
          <div className={s.text}>Help Centre</div>
        </div>

        <div className={s.signOut}>Sign Out of Netflix</div>
      </div>
    )
  );
};

export default Popup;
