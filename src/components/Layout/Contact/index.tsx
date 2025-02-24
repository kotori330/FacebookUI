import { useState } from "react";
import { listContact } from "../../../services/staticData";

const Contact = () => {

  return (
    <>
      {listContact.map((user) => {
        return (
          <div className="menubar__button">
            <img src={user.avatar} alt="Profile picture" className="rounded-full w-12"/>

            <span>{user.name}</span>
          </div>
        );
      })}
    </>
  );
};

export default Contact;
