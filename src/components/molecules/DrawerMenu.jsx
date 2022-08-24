import React from "react";
import { Link } from "react-router-dom";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
// https://mui.com/pt/material-ui/react-drawer/
// https://mui.com/pt/material-ui/react-list/

import { LoggedUserContext } from "../../contexts";

function Menu() {
  const { loggedUser } = React.useContext(LoggedUserContext);

  return (
    <List>
      <ListItem>
        <Link to="/users">Usuários</Link>
      </ListItem>
      <ListItem>
        <Link to={`/users/${loggedUser}`}>Meus posts</Link>
      </ListItem>
      <ListItem>
        <Link to={`/users/${loggedUser}/posts/new`}>Criar</Link>
      </ListItem>
    </List>
  );
}

export default function DrawerMenu(props) {
  return (
    <Drawer
      anchor="right"
      open={props.open}
      onClose={() => props.setOpen(false)}
    >
      <Menu />
    </Drawer>
  );
}
