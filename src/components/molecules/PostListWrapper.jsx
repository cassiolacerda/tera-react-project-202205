import React from "react";

import { getFriendlyDate } from "../../helpers";

import { PostListItem } from "./";

export default function PostListWrapper(props) {
  return (
    <div className="user-blog__posts">
      {props.posts.map((post) => (
        <PostListItem
          key={post.id}
          postId={post.id}
          title={post.title}
          createdAt={getFriendlyDate(post.createdAt)}
          image={post.image}
          userId={post.userId}
        />
      ))}
    </div>
  );
}
