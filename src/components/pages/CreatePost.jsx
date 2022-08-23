import React from "react";
import { useParams } from "react-router-dom";

import Default from "../templates/Default";
import { Loading } from "../organisms";

export default function CreatePost() {
  const { userId } = useParams();

  const [title, setTitle] = React.useState("");
  const [content, setContent] = React.useState("");
  const [isLoading, setIsLoading] = React.useState(false);

  const onSubmit = (event) => {
    event.preventDefault();
    setIsLoading(true);

    fetch(`https://62c4e487abea8c085a7e022a.mockapi.io/users/${userId}/posts`, {
      method: "POST",
      headers: { "Content-type": "application/json; charset=UTF-8" },
      body: JSON.stringify({ title, content }),
    }).then(() => {
      setTitle("");
      setContent("");
      setIsLoading(false);
    });
  };

  return isLoading ? (
    <Loading />
  ) : (
    <Default>
      <div className="create-post">
        <h1>Criar</h1>

        <form className="create-post__form" onSubmit={onSubmit}>
          <div className="create-post__form-name">
            <label htmlFor="name">Título</label>
            <input
              type="text"
              value={title}
              onChange={(event) => setTitle(event.target.value)}
            />
          </div>
          <div className="create-post__form-content">
            <label htmlFor="content">Conteúdo</label>
            <textarea
              value={content}
              onChange={(event) => setContent(event.target.value)}
            ></textarea>
          </div>
          <button className="button-primary">Salvar</button>
        </form>
      </div>
    </Default>
  );
}
