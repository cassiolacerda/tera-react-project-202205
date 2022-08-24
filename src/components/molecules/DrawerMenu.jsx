import React from "react";
import { Link } from "react-router-dom";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
// https://mui.com/pt/material-ui/react-drawer/
// https://mui.com/pt/material-ui/react-list/

function Menu() {
  return (
    <List>
      <ListItem>
        <Link to="/users">Usuários</Link>
      </ListItem>
      <ListItem>
        <Link to="/users/1">Meus posts</Link>
      </ListItem>
      <ListItem>
        <Link to="/users/1/posts/new">Criar</Link>
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
