import {
  Box,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";
import { SidebarOptions } from "../constants/Types";
import DashboardIcon from "@mui/icons-material/Dashboard";
import SettingsIcon from "@mui/icons-material/Settings";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import PlaylistAddIcon from "@mui/icons-material/PlaylistAdd";
import { theme } from "../style/theme";

const list: SidebarOptions[] = [
  {
    label: "Dashboard",
    icon: <DashboardIcon />,
    path: "/",
  },
  {
    label: "Tasks",
    icon: <PlaylistAddIcon />,
    path: "/",
  },
  {
    label: "Goals",
    icon: <EmojiEventsIcon />,
    path: "/",
  },
  {
    label: "Settings",
    icon: <SettingsIcon />,
    path: "/",
  },
];

const Sidebar: React.FC = () => {
  return (
    <Paper
      square
      sx={{ height: "100%", backgroundColor: theme.palette.primary.main }}
    >
      <Stack alignItems={"center"}>
        <Typography sx={{ my: 5, mx: 4 }} variant="h4">
          Recorder
        </Typography>
        <List sx={{ width: "100%" }}>
          <Divider />
          {list.map((v, i) => (
            <>
              <ListItem sx={{ p: 0 }} key={v.label}>
                <ListItemButton sx={{ my: 0 }}>
                  <ListItemIcon>{v.icon}</ListItemIcon>
                  <ListItemText primary={v.label} />
                </ListItemButton>
              </ListItem>
              <Divider />
            </>
          ))}
        </List>
      </Stack>
    </Paper>
  );
};

export default Sidebar;
