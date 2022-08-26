// import * as React from "react";
// import ListSubheader from "@mui/material/ListSubheader";
// import List from "@mui/material/List";
// import ListItemButton from "@mui/material/ListItemButton";
// import ListItemIcon from "@mui/material/ListItemIcon";
// import ListItemText from "@mui/material/ListItemText";
// import Collapse from "@mui/material/Collapse";
// import InboxIcon from "@mui/icons-material/MoveToInbox";
// import DraftsIcon from "@mui/icons-material/Drafts";
// import SendIcon from "@mui/icons-material/Send";
// import ExpandLess from "@mui/icons-material/ExpandLess";
// import ExpandMore from "@mui/icons-material/ExpandMore";
// import StarBorder from "@mui/icons-material/StarBorder";

// const NestedList = ({ items }) => {
//   const [open, setOpen] = React.useState(true);

//   const handleClick = () => {
//     setOpen(!open);
//   };
//   return (
//     <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
//       <List
//         sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
//         component="nav"
//         aria-labelledby="nested-list-subheader"
//         subheader={
//           <ListSubheader component="div" id="nested-list-subheader">
//             List Items
//           </ListSubheader>
//         }
//       >
//         {lists &&
//           lists.map((item) => {
//             return (
//               <ListItem key={item._id} disablePadding>
//                 <ListItemButton key={item._id} onClick={handleClick}>
//                   <ListOutlinedIcon />
//                   <ListItemText primary={items.listName} />
//                   {open ? <ExpandLess /> : <ExpandMore />}
//                 </ListItemButton>
//                 <Collapse in={open} timeout="auto" unmountOnExit>
//                   <List component="div" disablePadding>
//                     <ListItemButton sx={{ pl: 4 }}>
//                       <ListItemIcon>
//                         <StarBorder />
//                       </ListItemIcon>
//                       <ListItemText primary="Starred" />
//                     </ListItemButton>
//                   </List>
//                 </Collapse>
//               </ListItem>
//             );
//           })}
//       </List>
//     </Box>
//   );
// };

// export default NestedList;
