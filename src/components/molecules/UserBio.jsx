import React from "react";

export default function UserBio(props) {
  return (
    <div className="user-blog__header">
      <div className="user-blog__header-photo">
        <img src={props.src} className="responsive avatar" alt="" />
      </div>
      <h1 className="user-blog__header-title">{props.name}</h1>
      <p className="user-blog__header-bio">{props.bio}</p>
    </div>
  );
}
