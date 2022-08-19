import React from "react";
import { useParams } from "react-router-dom";
import Default from "../templates/Default";

import { UserBio, PostListWrapper } from "../molecules";
import { Loading } from "../organisms";

export default function UserBlog() {
  const { userId } = useParams();

  const [posts, setPosts] = React.useState([]);
  const [user, setUser] = React.useState(null);
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    fetch(`https://62c4e487abea8c085a7e022a.mockapi.io/users/${userId}/posts`)
      .then((response) => response.json())
      .then((data) => {
        setPosts(data);
        setUser(data[0].userData);
        setIsLoading(false);
      });
  }, []);

  return isLoading ? (
    <Loading />
  ) : (
    <Default>
      <div className="user-blog">
        <UserBio
          name={`${user.fn} ${user.ln}`}
          bio={user.bio}
          src={user.avatar}
        />
        <PostListWrapper posts={posts} />
      </div>
    </Default>
  );
}
