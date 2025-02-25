import { Contact, Tagged } from ".";

const ModalContent = ({
  searchTagPeople,
  listSuggestion,
  toggleTagPeople,
  toggleTagPeopleModal,
  taggedPeople,
}: {
  searchTagPeople: (contactName: string) => void;
  toggleTagPeople: (contactId: string) => void;
  toggleTagPeopleModal: () => void;
  listSuggestion: Contact[];
  taggedPeople: Tagged[];
}) => {
  return (
    <>
      <div className="flex space-x-4 my-2">
        <input
          type="text"
          placeholder="Search"
          className="rounded-2xl bg-slate-300/60 outline-none w-full p-2 pl-4"
          onChange={(e) => searchTagPeople(e.target.value)}
        />
        <span
          className="text-blue-400/90 hover:cursor-pointer my-auto"
          onClick={toggleTagPeopleModal}
        >
          Done
        </span>
      </div>

      {taggedPeople.length !== 0 && (
        <div className="my-2 select-none">
          <span className="">TAGGED</span>
          <div className="border border-slate-500/60 rounded-xl p-2">
            {listSuggestion.map((item) => {
              return (
                <>
                  {listSuggestion.find((contact) => contact.id === item.id)
                    ?.isTagged && (
                    <div
                      className="inline-block bg-blue-300/20 text-blue-500 space-x-1 p-2 rounded-2xl pl-4 mx-1 my-0.5"
                      key={item.id}
                    >
                      <span>{item.name}</span>
                      <span
                        className="hover:cursor-pointer rounded-full hover:bg-slate-300/30 px-2 py-1"
                        onClick={() => toggleTagPeople(item.id)}
                      >
                        &times;
                      </span>
                    </div>
                  )}
                </>
              );
            })}
          </div>
        </div>
      )}

      <div className="mt-4">
        <span>SUGGESTIONS</span>
        <div className="max-h-78 overflow-auto">
          {listSuggestion.map((item) => {
            return (
              <>
                {listSuggestion.find((contact) => contact.id === item.id)
                  ?.isTagged ? (
                  <></>
                ) : (
                  <div
                    key={item.id}
                    className="flex justify-start  select-none hover:cursor-pointer hover:bg-slate-400/30 rouned-xl p-1 space-x-2 rounded-xl"
                    onClick={() => toggleTagPeople(item.id)}
                  >
                    <img
                      src={item.avatar}
                      alt=""
                      className="w-9 h-9 rounded-full"
                    />
                    <span className="font-bold my-auto">{item.name}</span>
                  </div>
                )}
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default ModalContent;
