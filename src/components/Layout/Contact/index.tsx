import { useState } from "react";
import { listContact } from "../../../services/staticData";

const Contact = () => {
  const [onlineStatus, setOnlineStatus] = useState<number | null>(null);
  // Only one can be activated at the same time
  const toggleOnlineStatus = (index: number) => {
    setOnlineStatus((prev) => (prev === index ? null : index));
  };

  // // Activate freely
  // const [onlineStatus, setOnlineStatus] = useState<boolean[]>(
  //   new Array(listContact.length).fill(false)
  // );

  // const toggleOnlineStatus = (index: number) => {
  //   setOnlineStatus(prev => {
  //     const newStatuses = [...prev];
  //     newStatuses[index] = !newStatuses[index];
  //     return newStatuses;
  //   });
  // };
  return (
    <>
      {listContact.map((user, index) => {
        return (
          <div
            className="menubar__button"
            key={index}
            onClick={() => toggleOnlineStatus(index)}
          >
            <div className="relative select-none">
              <img
                src={user.avatar}
                alt="Profile picture"
                className="rounded-full w-12"
              />
              {/* {onlineStatus[index] && ( */}
              {onlineStatus === index && (
                <>
                  <div className="absolute h-3 w-3 rounded-full bg-slate-100 bottom-0 right-0 flex justify-center items-center">
                    <div className=" bg-green-600 h-2 w-2 rounded-full "></div>
                  </div>
                </>
              )}
            </div>

            <span>{user.name}</span>
          </div>
        );
      })}
    </>
  );
};

export default Contact;
