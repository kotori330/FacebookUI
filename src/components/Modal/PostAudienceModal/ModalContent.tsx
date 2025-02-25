const ModalContent = ({closeSetAudienceModal, handleSelectAudience}: {closeSetAudienceModal: () => void; handleSelectAudience: (name: string) => void}) => {
  const audienceOption = [
    {
      icon: "src/assets/globe.png",
      title: "Public",
      description: "Anyone on or off Facebook",
      name: "public",
      id: "public",
    },
    {
      icon: "src/assets/globe.png",
      title: "Friend",
      description: "Your friends on Facebook",
      name: "friend",
      id: "friend",
    },
    {
      icon: "src/assets/globe.png",
      title: "Friend except...",
      description: "Friend; Except: Donald Trump.",
      name: "friend-except",
      id: "friend-except",
    },
    {
      icon: "src/assets/globe.png",
      title: "Only me",
      description: "",
      name: "only-me",
      id: "only-me",
    },
    {
      icon: "src/assets/globe.png",
      title: "Specific friends",
      description: "Only show to some friends",
      name: "specific-friend",
      id: "specific-friend",
    },
    {
      icon: "src/assets/globe.png",
      title: "Custom",
      description: "Include and exclude friends and lists",
      name: "custom",
      id: "custom",
    },
  ];

  return (
    <>
      <div>
        {audienceOption.map((item) => {
          return (
            <>
              <div className="flex space-x-4 relative hover:bg-gray-300/50 hover:cursor-pointer p-2 rounded-2xl">
                {/* CSS: 'inline': Display inline and can only be set spacing of left and right*/}
                {/* CSS: 'inline-block': Act like 'inline' but can be set spacing of top, bottom, left, right */}
                <label htmlFor={item.id} className="flex w-full space-x-2 select-none">
                  <div className="inline-block rounded-full bg-gray-500/60 p-5">
                    <img
                      src={item.icon}
                      alt=""
                      className="w-8 h-8"
                    />
                  </div>
                  <div className=" my-auto">
                    <p className="text-xl">{item.title}</p>
                    <p>{item.description}</p>
                  </div>
                </label>
                <input
                  type="radio"
                  name="audience-select"
                  id={item.id}
                  className="absolute right-2 top-10"
                />
              </div>

              
            </>
          );
        })}
      </div>
      <div className="border border-slate-500/50"></div>
      <div className="flex justify-end mt-4 space-x-2">
        <button className="bg-white text-blue-500 hover:cursor-pointer hover:bg-gray-300/50 rounded-md px-6 py-2" onClick={closeSetAudienceModal}>Cancel</button>
        <button className="bg-blue-500 text-white hover:cursor-pointer hover:bg-blue-600 rounded-md px-6 py-2" onClick={handleSelectAudience}>Done</button>
      </div>
    </>
  );
};

export default ModalContent;
