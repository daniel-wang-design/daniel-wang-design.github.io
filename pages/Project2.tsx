import * as React from "react";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import InboxIcon from "@mui/icons-material/Inbox";
import DraftsIcon from "@mui/icons-material/Drafts";
import Link from "next/link";

export default function SelectedListItem() {
  const [selectedIndex, setSelectedIndex] = React.useState(1);

  const handleListItemClick = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>,
    index: number
  ) => {
    setSelectedIndex(index);
  };

  return (
    <div className="bg-[#222222]">
      <List
        component="nav"
        sx={{
          "&& .Mui-selected, && .Mui-selected:hover $child": {
            bgcolor: "#bb86fc",
          },
          "& .MuiListItemButton-root:hover": {
            bgcolor: "#bb86fc",
          },
          "&, & .MuiListItemIcon-root": {
            color: "white",
          },
        }}
      >
        <Link href="./#home" scroll={false}>
          <ListItemButton
            className="text-white"
            selected={selectedIndex === 4}
            onClick={(event) => handleListItemClick(event, 4)}
          >
            <ListItemText primary="Home" />
          </ListItemButton>
        </Link>
        <Link href="./#projects" scroll={false}>
          <ListItemButton
            className="text-white"
            selected={selectedIndex === 4}
            onClick={(event) => handleListItemClick(event, 4)}
          >
            <ListItemText primary="Projects" />
          </ListItemButton>
        </Link>
        <Link href="./#skills" scroll={false}>
          <ListItemButton
            className="text-white"
            selected={selectedIndex === 4}
            onClick={(event) => handleListItemClick(event, 4)}
          >
            <ListItemText primary="Skills" />
          </ListItemButton>
        </Link>
        <Link href="./#about" scroll={false}>
          <ListItemButton
            className="text-white"
            selected={selectedIndex === 4}
            onClick={(event) => handleListItemClick(event, 4)}
          >
            <ListItemText primary="About" />
          </ListItemButton>
        </Link>
      </List>
    </div>
  );
}
