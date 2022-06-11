import React, { useEffect, useState } from "react";
import users from "./Users";
import s from "./Popup.module.css";
import { useStateValue } from "./StateProvider";

const Popup = () => {
  const [show, setShow] = useState(false);
  const [{ loggedUser }, dispatch] = useStateValue();

  //   console.log(loggedUser);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setShow(true);
      } else setShow(false);
    });
    return () => {
      window.removeEventListener("scroll", null);
    };
  }, []);
  //remove the chosen user from the list of users dropdown
  //check the chosen user.id
  //
  return (
    <div className={s.box}>
      <div className={s.profiles}>
        {users.map((user) => {
          if (user.id !== loggedUser.id) {
            return (
              <div key={user.id} className={s.profile}>
                <img
                  className={s.avatar}
                  src={
                    user.img ||
                    "https://i.pinimg.com/originals/e3/94/30/e39430434d2b8207188f880ac66c6411.png"
                  }
                  alt="avatar"
                />
                <div className={s.name}>{user.name}</div>
              </div>
            );
          }
        })}
      </div>
    </div>
  );
};

export default Popup;
