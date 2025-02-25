import { useState } from "react";
import PostModal from "../../Modal/CreatePostModal";

const PostField = () => {
  const [open, setOpen] = useState(false);

  const closeModal = () => {
    setOpen(false);
  };

  const openModal = () => {
    setOpen(true);
  };

  return (
    <>
      <div className="flex space-x-2">
        <div className="bg-gray-400 h-12 w-12 rounded-full "></div>
        <input
          type="text"
          id="what_on_your_mind"
          className="bg-gray-300 rounded-3xl w-full px-4"
          placeholder="What's on your mind?"
          onClick={openModal}
        />
      </div>

      {open ? <PostModal closeModal={closeModal} /> : <></>}

      <div className="border-1 text-gray-300 w-full my-2"></div>

      <div className="flex justify-evenly">
        <button className="font-bold rounded-xl hover:bg-gray-300 py-4 w-full hover:cursor-pointer">
          Live Video
        </button>
        <button className="font-bold rounded-xl hover:bg-gray-300 py-4 w-full hover:cursor-pointer">
          Photo/Video
        </button>
        <button className="font-bold rounded-xl hover:bg-gray-300 py-4 w-full hover:cursor-pointer">
          Feeling/Activity
        </button>
      </div>
    </>
  );
};

export default PostField;
