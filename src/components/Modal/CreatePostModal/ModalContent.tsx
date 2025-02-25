import { useState } from "react";
import { listContact } from "../../../services/staticData";
import { cn } from "../../../utils/clsx";

const ModalContent = ({openSetAudienceModal}: {openSetAudienceModal: () => void}) => {
  const [postContext, setPostContext] = useState("");
  const [, , thirdContact] = listContact;

  return (
    <>
      <div className="flex space-x-4">
        <img
          src={thirdContact.avatar}
          alt=""
          className="w-12 h-12 rounded-full"
        />
        <div className="auto-rows-auto relative">
          <span className="font-bold">{thirdContact.name}</span>
          <button
            className="px-2 rounded-md bg-gray-400/50 font-bold flex hover:cursor-pointer"
            onMouseEnter={(e) => {
              const span = e.currentTarget.querySelector("span");
              if (span) span.style.display = "block";
            }}
            onMouseLeave={(e) => {
              const span = e.currentTarget.querySelector("span");
              if (span) span.style.display = "none";
            }}
            onClick={openSetAudienceModal}
          >
            Friends
            <span className="absolute hidden bg-black text-white px-4 py-1 rounded-2xl whitespace-nowrap font-light -translate-x-6 -bottom-10 transition-300">
              Your friend
            </span>
          </button>
        </div>
      </div>

      {/* Input field */}
      <div className="mt-4">
        <input
          type="text"
          placeholder="What's on your mind?"
          className="outline-none w-full pb-12 break-words whitespace-pre-wrap max-w-full "
          value={postContext}
          onChange={(e) => {
            setPostContext(e.target.value);
          }}
        />
      </div>

      {/* Button for options */}
      <div className="border border-slate-300/50 shadow-sm rounded-2xl flex justify-between items-center p-4">
        <span className="font-bold">Add to your post</span>
        <div className="flex">
          <img
            src="src/assets/gallery.png"
            alt=""
            className="w-9 h-9 hover:cursor-pointer hover:bg-slate-300/50 hover:rounded-full p-1"
          />
          <img
            src="src/assets/taguser.png"
            alt=""
            className="w-9 h-9 hover:cursor-pointer hover:bg-slate-300/50 hover:rounded-full p-1"
          />
          <img
            src="src/assets/smiling-face.png"
            alt=""
            className="w-9 h-9 hover:cursor-pointer hover:bg-slate-300/50 hover:rounded-full p-1"
          />
        </div>
      </div>

      {/* Post button */}
      <button
        className={cn(
          "w-full",
          "font-bold",
          "bg-gray-900",
          "text-gray-400",
          "mt-4",
          {
            "bg-blue-500 text-white hover:cursor-pointer hover:opacity-70":
              postContext,
          }
        )}
        disabled={!postContext}
      >
        Post
      </button>

      
    </>
  );
};

export default ModalContent;
