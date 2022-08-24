import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { LoggedUserContext } from "./contexts";

import Home from "./components/pages/Home";
import Users from "./components/pages/Users";
import UserBlog from "./components/pages/UserBlog";
import UserPost from "./components/pages/UserPost";
import CreatePost from "./components/pages/CreatePost";

import "./styles/normalize.css";
import "./styles/fontawesome.min.css";
import "./styles/main.css";

function App() {
  const [loggedUser, setLoggedUser] = React.useState(null);

  return (
    <LoggedUserContext.Provider value={{ loggedUser, setLoggedUser }}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/users" element={<Users />} />
          <Route path="/users/:userId" element={<UserBlog />} />
          <Route path="/users/:userId/posts/:postId" element={<UserPost />} />
          <Route path="/users/:userId/posts/new" element={<CreatePost />} />
        </Routes>
      </BrowserRouter>
    </LoggedUserContext.Provider>
  );
}

export default App;
