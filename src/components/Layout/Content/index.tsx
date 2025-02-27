import PostField from "../../UI/Input/PostField";
import StoryCards from "../../UI/Card/StoryCards";
import PostCards from "../../UI/Card/PostCards";
import { useState } from "react";
import { Tagged } from "../../Modal/TagPeopleModal.tsx";

export type PostData = {
  user: string;
  avatar: string;
  feeling: string;
  taggedPeople: Tagged[];
  audience: string;
  time: string;
  context: string;
  preview: string;
  imageName: string;
  likes: string;
  comments: string;
  shares: string;
};

const Content = () => {
  const [posts, setPosts] = useState([] as PostData[]);

  const handlePostCreate = (postData: PostData) => {
    setPosts((prev) => [postData, ...prev]);
  };

  return (
    <>
      <div className="bg-slate-200 rounded-xl p-4">
        <PostField handlePostCreate={handlePostCreate} />
      </div>
      <div className="my-2">
        <StoryCards />
        <PostCards posts={posts} />
      </div>
    </>
  );
};

export default Content;
