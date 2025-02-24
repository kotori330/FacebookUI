const navBarBtns = () => {
  return (
    <ul className="flex space-x-14 items-center relative mr-6">
      <li className="navbar__button navbar__button--active">Home</li>
      <li className="navbar__button">Play</li>
      <li className="navbar__button">Marketplace</li>
      <li className="navbar__button">Groups</li>
      <li className="navbar__button">Games</li>
      <div className="absolute top-16 w-22 h-1 rounded-4xl bg-blue-300 "></div>
    </ul>
  );
};

export default navBarBtns;
