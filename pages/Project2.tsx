import * as React from "react";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import InboxIcon from "@mui/icons-material/Inbox";
import DraftsIcon from "@mui/icons-material/Drafts";

export default function SelectedListItem() {
  const [selectedIndex, setSelectedIndex] = React.useState(1);

  const handleListItemClick = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>,
    index: number
  ) => {
    setSelectedIndex(index);
  };

  return (
    <div className="bg-[#111111]">
      <List
        component="nav"
        sx={{
          // selected and (selected + hover) states
          "&& .Mui-selected, && .Mui-selected:hover $child": {
            bgcolor: "#bb86fc",
          },
          // hover states
          "& .MuiListItemButton-root:hover": {
            bgcolor: "#bb86fc",
          },
        }}
      >
        <ListItemButton
          className="text-white"
          selected={selectedIndex === 1}
          onClick={(event) => handleListItemClick(event, 1)}
        >
          <ListItemText primary="Home" />
        </ListItemButton>
        <ListItemButton
          className="text-white"
          selected={selectedIndex === 2}
          onClick={(event) => handleListItemClick(event, 2)}
        >
          <ListItemText primary="Projects" />
        </ListItemButton>
        <ListItemButton
          className="text-white"
          selected={selectedIndex === 3}
          onClick={(event) => handleListItemClick(event, 3)}
        >
          <ListItemText primary="Skills" />
        </ListItemButton>
        <ListItemButton
          className="text-white"
          selected={selectedIndex === 4}
          onClick={(event) => handleListItemClick(event, 4)}
        >
          <ListItemText primary="About" />
        </ListItemButton>
      </List>
    </div>
  );
}
