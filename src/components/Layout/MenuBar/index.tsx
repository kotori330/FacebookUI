import iconFriend from "@/assets/icon-friend-64.png";
import rewindClock from "@/assets/rewind-time-icon.png";

type menuIcon = {
  iconName: string;
  name: string;
};

type groupShortcuts = {
  iconName: string;
  name: string;
};

const MenuBar = () => {
  const icon: menuIcon[] = [
    {
      iconName: "/src/assets/icon-friend-64.png",
      name: "Friends",
    },
    {
      iconName: "/src/assets/rewind-time-icon.png",
      name: "Memories",
    },
    {
      iconName: "/src/assets/rewind-time-icon.png",
      name: "Saved",
    },
    {
      iconName: "/src/assets/rewind-time-icon.png",
      name: "Groups",
    },
    {
      iconName: "/src/assets/rewind-time-icon.png",
      name: "Video",
    },
    {
      iconName: "/src/assets/rewind-time-icon.png",
      name: "Marketplace",
    },
    {
      iconName: "/src/assets/rewind-time-icon.png",
      name: "Feed",
    },
  ];

  const groupShortcuts: groupShortcuts[] = [
    {
      iconName: "/src/assets/blackcat.jpeg",
      name: "J2TEAM",
    },{
      iconName: "/src/assets/blackcat.jpeg",
      name: "Cosplay-FC",
    },{
      iconName: "/src/assets/blackcat.jpeg",
      name: "Hentaivn",
    }
  ]

  return (
    <>
      <div id="menu_bar_upper" className="menubar">
        <div className="menubar__button">
          <div className="bg-gray-400 h-12 w-12 rounded-full "></div>

          <span>Account Name</span>
        </div>

        {icon.map((item) => {
          return (
            <div className="menubar__button">
              <img
                src={item.iconName}
                alt="Friends"
                className="inline w-12 h-10"
              />
              <span>{item.name}</span>
            </div>
          );
        })}

        <div className="menubar__button">
          <div className="bg-gray-400 h-12 w-12 rounded-full  hover:cursor-pointer relative">
            <span className="text-3xl absolute left-3">&#8964;</span>
          </div>
          <span>See more</span>
        </div>
      </div>

      <div className="border border-slate-400 w-full"></div>

      <div id="menu-bar-lower" className="menubar">
        <div className="flex justify-between group">
          <span className="font-bold text-xl my-auto py-2">Your shortcuts</span>
          <span className="text-blue-500 hover:cursor-pointer hover:bg-gray-200/70 py-2 px-4 rounded-xl group-hover:block hidden">
            Edit
          </span>
        </div>
        {groupShortcuts.map((item) => {
          return (
            <div className="menubar__button">
              <img src={item.iconName} alt="Group Name" className="w-10"/>
              <span>{item.name}</span>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default MenuBar;
