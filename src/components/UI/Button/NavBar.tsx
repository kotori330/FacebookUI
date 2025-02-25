const navBarBtns = () => {
  return (
    <ul className="hidden space-x-14 items-center relative mr-6 lg:flex">
      {['Home', 'Play', 'Marketplace', 'Groups', 'Games'].map((item, index) => (
        <li key={index} className={`navbar__button ${item === 'Home' ? 'navbar__button--active' : ''}`}>{item}</li>
      ))}
      <div className="absolute top-16 w-22 h-1 rounded-4xl bg-blue-300 "></div>
    </ul>
  );
};

export default navBarBtns;
