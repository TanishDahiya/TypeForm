import { Avatar } from "@chakra-ui/react";
import React from "react";

const Blog = () => {
  return (
    <div className="blogParent m-5">
      <div>
        <div className="flex">
          <span className="p-2">
            <Avatar className="" size="xs" src="https://bit.ly/broken-link" />
          </span>

          <p className="p-2">Tanish Dahiya</p>
          <span>.</span>
          <p className="p-2">Sep 27, 2022</p>
        </div>
        <div className="flex justify-between">
          <div className="text-start px-2 w-3/4">
            <h1 className="text-xl font-bold items-start">
              Why useEffect is a bad place to make API calls
            </h1>
            <p className="py-2">
              The design choices react team have made in useEffect hook are
              still a heated debate. Some people like it and some don’t. If you
              don't come from the React world it’ll definitely sound strange
              because its default.Proof that both adventure and kindness can be
              found on
            </p>
          </div>
          <div>
            <img
              alt="blogImage"
              src="https://miro.medium.com/fit/c/140/140/1*aE0jkOOH0nCYjwT88tdw1Q.png"
            />
          </div>
        </div>
        <div className="flex p-2 mb-5">
          <span>Tags</span>
          <p className="px-2">2 min read</p>
          <p className="px-2">save button</p>
        </div>
      </div>
    </div>
  );
};

export default Blog;
