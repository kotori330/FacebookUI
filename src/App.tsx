import Header from "./components/Layout/Header/index.tsx";
import MenuBar from "./components/Layout/MenuBar/index.tsx";
import Content from "./components/Layout/Content/index.tsx";
import Contact from "./components/Layout/Contact/index.tsx";

const App = () => {
  return (
    <>
      <div className="fixed w-full">
        <Header />
      </div>
      <div className="flex">
        <div className="w-1/5 flex-shrink-0 overflow-auto h-[56rem] fixed my-19 ">
          <MenuBar />
        </div>
        <div className="w-full flex-grow mt-24 lg:mt-24 lg:mx-56 lg:px-72 lg:my-19">
          <Content />
        </div>
        <div className="w-1/5 overflow-scroll h-[56rem] invisible xl:visible fixed right-0 my-19">
          <Contact />
        </div>
      </div>
    </>
  );
};
export default App;
