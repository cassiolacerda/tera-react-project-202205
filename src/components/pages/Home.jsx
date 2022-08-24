import React from "react";
import { useNavigate } from "react-router-dom";

import { LoggedUserContext } from "../../contexts";

import { Loading } from "../organisms";
import logo from "../../images/logo.svg";

export default function Home() {
  const navigate = useNavigate();

  const { loggedUser, setLoggedUser } = React.useContext(LoggedUserContext);
  const [users, setUsers] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    fetch("https://62c4e487abea8c085a7e022a.mockapi.io/users/")
      .then((response) => response.json())
      .then((data) => {
        setUsers(data);
        setIsLoading(false);
      });
  }, []);

  const handleUserChange = (event) => {
    setLoggedUser(event.target.value);
  };

  const handleConfirmClick = () => {
    navigate(`/users/${loggedUser}`);
  };

  return isLoading ? (
    <Loading />
  ) : (
    <div className="home center">
      <div className="home__logo">
        <img src={logo} className="responsive" alt="" />
      </div>
      <select
        className="home__select-users"
        onChange={handleUserChange}
        {...(loggedUser ? { defaultValue: loggedUser } : {})}
      >
        <option value="">Selecionar usuário</option>
        {users
          .sort((a, b) => a.fn.localeCompare(b.fn))
          .map((user) => (
            <option
              key={user.id}
              value={user.id}
            >{`${user.fn} ${user.ln}`}</option>
          ))}
      </select>
      {loggedUser && (
        <button onClick={handleConfirmClick} className="button-primary">
          Entrar
        </button>
      )}
    </div>
  );
}
