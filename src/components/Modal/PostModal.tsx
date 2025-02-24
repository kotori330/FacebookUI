const PostModal = ({ closeModal }: { closeModal: () => void }) => {
  const setAudience = () => {};
  const chooseTemplateColor = () => {};
  const chooseEmoji = () => {};
  const addCustomizationToPost = () => {};
  const handlePost = () => {};

  return (
    <>
      <div className="fixed inset-0 bg-slate-500/70 bg-opacity-50 flex items-center justify-center z-50">
        <div className="bg-white rounded-lg w-full max-w-lg p-4 relative">
          <div className="flex items-center border-b pb-2">
            <h2 className="text-xl font-bold">Create Post</h2>
            <button
              className="absolute top-2 right-2 w-8 h-8 flex items-center justify-center text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-full text-4xl"
              onClick={closeModal}
            >
              &times;
            </button>
          </div>

          <div className="mt-4">
            <input type="text" placeholder="What's on your mind?" />
          </div>
        </div>
      </div>
    </>
  );
};

export default PostModal;
