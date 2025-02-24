const PostCards = () => {
  return (
    <>
      <div className="bg-slate-200 rounded-xl my-2 p-4">
        <div className="flex">
          <div className="bg-gray-400 h-12 w-12 rounded-full "></div>
          <div className="grid auto-rows-auto">
            <div>
              <span className="font-bold mx-1">Tommy</span>
              <span>updated his profile picture.</span>
            </div>
            <div className="grid auto-rows-auto">
              <span className="mx-1">4m</span>
            </div>
          </div>
          <div className="ml-auto self-end text-xl">
            <span className="font-bold hover:bg-gray-300 rounded-full p-2 hover:cursor-pointer">
              ...
            </span>
            <span className="font-bold hover:bg-gray-300 rounded-full p-2 hover:cursor-pointer">
              &#9932;
            </span>
          </div>
        </div>
        <div className="relative -mx-4 my-2">
          <img
            src="/src/assets/rias.jpg"
            alt="profile_picture"
            className="w-full"
          />
        </div>
        <div className="flex justify-between">
          <div>
            <span>👍 15 Likes</span>
          </div>
          <div className="space-x-2">
            <span>12 comments</span>
            <span>12 shares</span>
          </div>
        </div>

        <div className="border-1 text-gray-300 w-full my-2"></div>

        <div className="flex justify-evenly">
          <button className="font-bold rounded-xl hover:bg-gray-300 -my-1 py-2 w-full hover:cursor-pointer">
            Like
          </button>
          <button className="font-bold rounded-xl hover:bg-gray-300 -my-1 py-2 w-full hover:cursor-pointer">
            Comment
          </button>
          <button className="font-bold rounded-xl hover:bg-gray-300 -my-1 py-2 w-full hover:cursor-pointer">
            Share
          </button>
        </div>
      </div>
    </>
  );
};

export default PostCards;
