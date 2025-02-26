import { useState } from "react";
import { listContact } from "../../../services/staticData";
import { cn } from "../../../utils/clsx";
import { Tagged } from "../TagPeopleModal.tsx";
import { ImageVideoDropzone } from "../../UI/Dropzone/PostImageDropzone.tsx";

const ModalContent = ({
  toggleSetAudienceModal,
  toggleDropzone,
  toggleTagPeopleModal,
  toggleSetFeelingToPostModal,
  dropzone,
  audience,
  audienceDescription,
  feeling,
  taggedPeople,
  handlePost,
}: {
  toggleSetAudienceModal: () => void;
  toggleTagPeopleModal: () => void;
  toggleDropzone: () => void;
  toggleSetFeelingToPostModal: () => void;
  dropzone: boolean;
  audience: string;
  audienceDescription: string;
  feeling: string;
  taggedPeople: Tagged[];
  handlePost: () => void;
}) => {
  const [postContext, setPostContext] = useState("");
  const [, , thirdContact] = listContact;

  const icon = [
    {
      iconName: "gallery",
      usage: toggleDropzone,
    },
    {
      iconName: "taguser",
      usage: toggleTagPeopleModal,
    },
    {
      iconName: "smiling-face",
      usage: toggleSetFeelingToPostModal,
    },
  ];

  return (
    <>
      <div className="flex space-x-4">
        <img
          src={thirdContact.avatar}
          alt=""
          className="w-12 h-12 rounded-full"
        />
        <div className="auto-rows-auto relative">
          {/* Account name */}
          <span className="font-bold">{thirdContact.name} </span>
          {/* Status */}
          {(feeling !== "" || taggedPeople.length !== 0) && <span> is </span>}
          {/* Feeling */}
          {feeling !== "" && (
            <>
              <span>
                {" "}
                feeling <b>{feeling} </b>
              </span>
            </>
          )}
          {/* Tag people */}
          {taggedPeople.length === 1 && (
            <>
              <span>
                with <b>{taggedPeople[0].name}</b>
              </span>
            </>
          )}
          {taggedPeople.length === 2 && (
            <>
              <span>
                with <b>{taggedPeople[0].name}</b> and{" "}
                <b>{taggedPeople[1].name}</b>
              </span>
            </>
          )}
          {taggedPeople.length > 2 && (
            <>
              <span>
                with{" "}
                <b>
                  {taggedPeople
                    .slice(0, -1) // Omit the last element
                    .map((person) => person.name) // Iterate array and extract name
                    .join(", ")}{" "}
                  {/* Join into a string, seperate with a comma and a space */}
                </b>{" "}
                and <b>{taggedPeople[taggedPeople.length - 1].name}</b>
              </span>
            </>
          )}
          {/*  */}

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
            onClick={toggleSetAudienceModal}
          >
            {audience}
            {audienceDescription !== "" && (
              <span className="absolute hidden bg-black text-white px-4 py-1 rounded-2xl whitespace-nowrap font-light -translate-x-6 -bottom-10 transition-300">
                {audienceDescription}
              </span>
            )}
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

      {/* Dropzone */}
      {dropzone && (
        <>
          <ImageVideoDropzone className="p-12" toggleDropzone={toggleDropzone} />
        </>
      )}

      {/* Button for options */}
      <div className="border border-slate-300/50 shadow-sm rounded-2xl flex justify-between items-center p-4">
        <span className="font-bold">Add to your post</span>
        <div className="flex">
          {icon.map((item) => (
            <div
              key={item.iconName}
              className="hover:cursor-pointer hover:bg-slate-300/50 hover:rounded-full p-2"
              onClick={item.usage}
            >
              <img
                src={`src/assets/${item.iconName}.png`}
                alt=""
                className="w-9 h-9 "
              />
            </div>
          ))}
        </div>
      </div>

      {/* Post button */}
      <button
        className={cn(
          "w-full",
          "font-bold",
          "bg-gray-900/50",
          "text-gray-400",
          "mt-4",
          {
            "!bg-blue-500 text-white hover:cursor-pointer hover:opacity-70":
              postContext,
          }
        )}
        disabled={!postContext}
        onClick={handlePost}
      >
        Post
      </button>
    </>
  );
};

export default ModalContent;
