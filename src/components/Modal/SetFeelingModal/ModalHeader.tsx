const ModalHeader = ({
  toggleSetFeelingToPostModal,
}: {
  toggleSetFeelingToPostModal: () => void;
}) => {
  return (
    <>
      <div className="flex mb-2">
        <button
          className="rounded-full bg-gray-300/50 hover:bg-gray-300/90 hover:cursor-pointer px-2 py-1 "
          onClick={toggleSetFeelingToPostModal}
        >
          &#8592;
        </button>
        <span className="font-bold flex justify-center items-center mx-auto">
          How are you feeling?
        </span>
      </div>

      <div className="border border-slate-500/50"></div>
    </>
  );
};

export default ModalHeader;
