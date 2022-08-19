import React from "react";

import { UserListItem } from "./";

export default function UserListWrapper(props) {
  return (
    <div className="users__list">
      {props.users
        .sort((a, b) => a.fn.localeCompare(b.fn))
        .map((user) => (
          <UserListItem
            key={user.id}
            id={user.id}
            name={`${user.fn} ${user.ln}`}
            src={user.avatar}
          />
        ))}
    </div>
  );
}
