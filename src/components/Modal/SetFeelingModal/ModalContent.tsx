import { useState } from "react";
import { cn } from "../../../utils/clsx";
import { Feeling } from ".";

const ModalContent = ({
  searchFeeling,

  handleSetFeeling,
  listFeeling
}: {
  searchFeeling: (itemName: string) => void;

  handleSetFeeling: (itemName: string) => void;
  listFeeling: Feeling[]
}) => {
  const [isActive, setIsActive] = useState(0);
  const toggleIsActive = (id: number) => {
    setIsActive(id);
  };


  return (
    <>
      <div>
        <ul className="flex flex-row mb-4 mt-2 space-x-4">
          {["Feeling", "Activities"].map((item, index) => (
        <li
          key={index}
          className={cn(
            "font-bold rounded-xl hover:cursor-pointer hover:bg-gray-300/70 p-4 relative",
            {
          "text-blue-600 after:content-[''] after:block after:w-full after:h-0.5 after:bg-blue-600 after:absolute after:-bottom-2 after:left-0":
            isActive === index,
            }
          )}
          onClick={() => toggleIsActive(index)}
        >
              {item}
            </li>
          ))}
        </ul>
      </div>

      <div className="flex space-x-4 my-2">
        <input
          type="text"
          placeholder="Search"
          className="rounded-2xl bg-slate-300/60 outline-none w-full p-2 pl-4"
          onChange={(e) => searchFeeling(e.target.value)}
        />
      </div>

      <div className="grid grid-cols-2">
        {listFeeling.map((item) => {
          return (
            <>
              <div
                className=" space-x-2 space-y-2 m-0.5 px-2 pt-2 rounded-full hover:bg-gray-300/70 hover:cursor-pointer"
                key={item.id}
                onClick={() => handleSetFeeling(item.name)}
              >
                <div className="px-2 py-1.5 rounded-full bg-gray-500/80 inline-block">
                  <span>{item.emoji}</span>
                </div>
                <span>{item.name}</span>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};

export default ModalContent;
