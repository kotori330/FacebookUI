const ModalHeader = ({ closeModal }: { closeModal: () => void }) => {
  return (
    <>
      <div className="border-b pb-2">
        <h2 className="text-xl font-bold items-center flex justify-center">Create Post</h2>
        <button
          className="absolute top-2 right-2 w-8 h-8 flex items-center justify-center text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-full text-4xl"
          onClick={closeModal}
        >
          &times;
        </button>
      </div>
    </>
  );
};

export default ModalHeader;
