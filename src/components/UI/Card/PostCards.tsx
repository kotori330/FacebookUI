import ReadMore from "../../../utils/SeeMore";
import { PostData } from "../../Layout/Content";

const PostCards = ({ posts }: { posts: PostData[] }) => {
  return (
    <>
      {posts.map((post, index) => (
        <div
          key={index}
          className="bg-slate-200 rounded-xl my-2 p-4 max-w-[51rem]"
        >
          <div className="flex w-full items-center">
            <img
              src={post.avatar}
              alt=""
              className="h-12 w-12 rounded-full flex-shrink-0"
            />
            <div className="ml-4 flex-grow ">
              <div className="items-center w-full">
                <span className="font-bold">{post.user}</span>
                {(post.feeling !== "" || post.taggedPeople.length !== 0) && (
                  <span> is </span>
                )}
                {/* Feeling */}
                {post.feeling !== "" && (
                  <>
                    <span>
                      {" "}
                      feeling <b>{post.feeling} </b>
                    </span>
                  </>
                )}
                {/* Tag people */}
                {post.taggedPeople.length === 1 && (
                  <>
                    <span>
                      {" "}
                      with <b>{post.taggedPeople[0].name}</b>
                    </span>
                  </>
                )}
                {post.taggedPeople.length === 2 && (
                  <>
                    <span>
                      {" "}
                      with <b>{post.taggedPeople[0].name}</b> and{" "}
                      <b>{post.taggedPeople[1].name}</b>
                    </span>
                  </>
                )}
                {post.taggedPeople.length > 2 && (
                  <>
                    <span>
                      {" "}
                      with{" "}
                      <b>
                        {post.taggedPeople
                          .slice(0, -1) // Omit the last element
                          .map((person) => person.name) // Iterate array and extract name
                          .join(", ")}{" "}
                        {/* Join into a string, seperate with a comma and a space */}
                      </b>{" "}
                      and{" "}
                      <b>
                        {post.taggedPeople[post.taggedPeople.length - 1].name}
                      </b>
                    </span>
                  </>
                )}
              </div>

              <div className="text-gray-500 text-sm">
                <span className="font-bold">{post.audience}</span>
                <span className="mx-1">{post.time}</span>
              </div>
            </div>
            <div className="ml-auto flex items-center space-x-2">
              <span className="font-bold hover:bg-gray-300 rounded-full p-2 hover:cursor-pointer">
                ...
              </span>
              <span className="font-bold hover:bg-gray-300 rounded-full p-2 hover:cursor-pointer">
                &#9932;
              </span>
            </div>
          </div>
          <div className="relative my-2 break-words whitespace-pre-wrap">
            <ReadMore context={post.context} />
          </div>
          <div className="relative my-2">
            <img src={post.preview} alt={post.imageName} className="w-full rounded-lg" />
          </div>
          <div className="flex justify-between text-gray-600 text-sm">
            <div>
              <span>👍 {post.likes} Likes</span>
            </div>
            <div className="space-x-2">
              <span>{post.comments} comments</span>
              <span>{post.shares} shares</span>
            </div>
          </div>

          <div className="border-1 text-gray-300 w-full my-2"></div>

          <div className="flex justify-evenly">
            <button className="font-bold rounded-xl hover:bg-gray-300 -my-1 py-2 w-full hover:cursor-pointer">
              Like
            </button>
            <button className="font-bold rounded-xl hover:bg-gray-300 -my-1 py-2 w-full hover:cursor-pointer">
              Comment
            </button>
            <button className="font-bold rounded-xl hover:bg-gray-300 -my-1 py-2 w-full hover:cursor-pointer">
              Share
            </button>
          </div>
        </div>
      ))}
    </>
  );
};

export default PostCards;
