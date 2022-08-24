import React from "react";
import { useParams } from "react-router-dom";

import { getFriendlyDate } from "../../helpers";

import Default from "../templates/Default";
import { Loading } from "../organisms";

export default function UserPost() {
  const { userId, postId } = useParams();

  const [post, setPost] = React.useState(null);
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    fetch(
      `https://62c4e487abea8c085a7e022a.mockapi.io/users/${userId}/posts/${postId}`
    )
      .then((response) => response.json())
      .then((data) => {
        setPost(data);
        setIsLoading(false);
      });
  }, [userId, postId]);

  return isLoading ? (
    <Loading />
  ) : (
    <Default>
      <div className="user-post">
        <h2 className="user-post__post-title">{post.title}</h2>
        <div className="user-post__post-date">
          Publicado em {getFriendlyDate(post.createdAt)} por
          <img src={post.userData.avatar} className="avatar" alt="" />
          <strong> {`${post.userData.fn} ${post.userData.ln}`}</strong>
        </div>
        <div className="user-post__post-photo">
          <img src={post.image} className="responsive" alt="" />
        </div>
        <div className="user-post__post-content">{post.content}</div>
      </div>
    </Default>
  );
}
