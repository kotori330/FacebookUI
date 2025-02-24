import PostField from "../../UI/Input/PostField";
import StoryCards from "../../UI/Card/StoryCards";
import PostCards from "../../UI/Card/PostCards";

const Content = () => {
  return (
    <>
      <div className="bg-slate-200 rounded-xl p-4">
        <PostField />
      </div>
      <div className="my-2">
        <StoryCards />
        <PostCards />
      </div>
    </>
  );
};

export default Content;
