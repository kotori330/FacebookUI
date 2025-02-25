import { Tagged } from ".";

const ModalHeader = ({
  toggleTagPeopleModal,
  taggedPeople,
}: {
  toggleTagPeopleModal: () => void;
  taggedPeople: Tagged[];
}) => {
  return (
    <>
      <div className="flex mb-2">
        <button
          className="rounded-full bg-gray-300/50 hover:bg-gray-300/90 hover:cursor-pointer px-2 py-1 "
          onClick={() => {
            toggleTagPeopleModal();
            taggedPeople.length = 0;
          }}
        >
          &#8592;
        </button>
        <span className="font-bold flex justify-center items-center mx-auto">
          Post audience
        </span>
      </div>

      <div className="border border-slate-500/50"></div>
    </>
  );
};

export default ModalHeader;
