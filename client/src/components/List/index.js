import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import ListOutlinedIcon from "@mui/icons-material/ListOutlined";
import ListSubheader from "@mui/material/ListSubheader";
import Collapse from "@mui/material/Collapse";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import StarBorder from "@mui/icons-material/StarBorder";

const drawerWidth = 240;

const NestedList = ({ lists }) => {
  const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen(!open);
  };
  return (
    <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
      <List
        sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
        component="nav"
        aria-labelledby="nested-list-subheader"
        subheader={
          <ListSubheader component="div" id="nested-list-subheader">
            List Items
          </ListSubheader>
        }
      >
        {lists &&
          lists.map((item) => {
            return (
              <ListItem key={item._id} disablePadding>
                <ListItemButton key={item._id} onClick={handleClick}>
                  <ListOutlinedIcon />
                  <ListItemText primary={item.listName} />
                  {open ? <ExpandLess /> : <ExpandMore />}
                </ListItemButton>
                <Collapse in={open} timeout="auto" unmountOnExit>
                  <List component="div" disablePadding>
                    <ListItemButton sx={{ pl: 4 }}>
                      <ListItemIcon>
                        <StarBorder />
                      </ListItemIcon>
                      <ListItemText primary="Milk" />
                    </ListItemButton>
                  </List>
                </Collapse>
              </ListItem>
            );
          })}
      </List>
    </Box>
  );
};

const DisplayLists = ({ lists }) => {
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
      >
        <Toolbar />

        <Box sx={{ overflow: "auto" }}>
          <List>
            {lists &&
              lists.map((item) => {
                return (
                  <ListItem key={item._id} disablePadding>
                    <ListItemButton key={item._id}>
                      <ListItemIcon>
                        <ListOutlinedIcon />
                      </ListItemIcon>
                      <ListItemText primary={item.listName} />
                    </ListItemButton>
                  </ListItem>
                );
              })}
          </List>
        </Box>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        {NestedList({ lists })}        
      </Box>
    </Box>
  );
};

export default DisplayLists;
