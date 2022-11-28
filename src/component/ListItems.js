import * as React from "react";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PeopleIcon from "@mui/icons-material/People";
import LogoutIcon from "@mui/icons-material/Logout";
import { List } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function ListItems({ switchNav }) {
  const navigate = useNavigate();
  return (
    <List>
      {/* <ListItemButton
        onClick={() => {
          switchNav("Reports");
        }}
      >
        <ListItemIcon>
          <BarChartIcon />
        </ListItemIcon>
        <ListItemText primary="Reports" />
      </ListItemButton> */}
      <ListItemButton
        onClick={() => {
          switchNav("Users");
        }}
      >
        <ListItemIcon>
          <PeopleIcon />
        </ListItemIcon>
        <ListItemText primary="Users" />
      </ListItemButton>
      <ListItemButton
        onClick={() => {
          switchNav("Advert");
        }}
      >
        <ListItemIcon>
          <ShoppingCartIcon />
        </ListItemIcon>
        <ListItemText primary="Advert" />
      </ListItemButton>
      <ListItemButton
        onClick={() => {
          navigate("/login", { replace: true });
        }}
      >
        <ListItemIcon>
          <LogoutIcon />
        </ListItemIcon>
        <ListItemText primary="Logout" />
      </ListItemButton>
    </List>
  );
}
