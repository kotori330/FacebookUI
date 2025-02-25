import { Feelings } from "../../../services/Feelings";

const ModalContent = ({
  searchFeeling,
}: {
  searchFeeling: (itemName: string) => void;
}) => {
  return (
    <>
      <div className="flex space-x-4 my-2">
        <input
          type="text"
          placeholder="Search"
          className="rounded-2xl bg-slate-300/60 outline-none w-full p-2 pl-4"
          onChange={(e) => searchFeeling(e.target.value)}
        />
      </div>
      <div>
        {Feelings.map((item) => {
          return (
            <>
              <div className="grid grid-cols-2 space-x-2 hover:bg-gray-600/70 hover:cursor-pointer" key={item.id}>
                <div className="p-2 rounded-full bg-gray-500/80">
                  <span>{item.emoji}</span>
                </div>
                <span>{item.name}</span>
              </div>
            </>
          )
        })}
      </div>
    </>
  );
};

export default ModalContent;
