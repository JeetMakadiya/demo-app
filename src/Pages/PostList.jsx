import React from "react";
import PostCard from "../Components/PostCard";

const PostList = () => {
  return (
    <div className="m-5">
      <h1 className="text-lg">Post List</h1>
      <PostCard
        userName={"Bessie Cooper"}
        date="15/12/2020"
        time="10:00AM to 10:30AM"
        description={
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        }
      />
      <PostCard
        userName={"Bessie Cooper"}
        date="15/12/2020"
        time="10:00AM to 10:30AM"
        description={
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        }
      />{" "}
      <PostCard
        userName={"Bessie Cooper"}
        date="15/12/2020"
        time="10:00AM to 10:30AM"
        description={
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        }
      />
    </div>
  );
};

export default PostList;
