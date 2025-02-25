const ModalHeader = ({
  closeSetAudienceModal,
}: {
  closeSetAudienceModal: () => void;
}) => {
  return (
    <>
      <div className="flex mb-2">
        <button
          className="rounded-full bg-gray-300/50 hover:bg-gray-300/90 hover:cursor-pointer p-2"
          onClick={closeSetAudienceModal}
        >
          &#8592;
        </button>
        <span className="font-bold flex justify-center items-center mx-auto">Post audience</span>
      </div>

    <div className="border border-slate-500/50"></div>

      <div>
        <span className="font-bold">Who can see your post?</span>
        <span className="text-gray-700/80 block text-sm">
          Your post will show up in Feed, on your profile and in search results.
        </span>
        <span className="text-gray-700/80 block text-sm">
          Your default audience is set to <b>Friends</b>, but you can change the
          audience of this specific post.
        </span>
      </div>

    

  
    </>
  );
};

export default ModalHeader;
