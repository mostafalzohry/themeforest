import { useState } from "react";
import {
  Box,
  Drawer,
  CssBaseline,
  Toolbar,
  List,
  Typography,
  Divider,
  ListItem,
  Button,
  ListItemText,
  ListItemButton,
  Switch,
  FormControlLabel,
} from "@mui/material";
import LibraryBooksIcon from "@mui/icons-material/LibraryBooks";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import Navbar from "../Components/Navbar";
import Homecard from "../Components/Homecard";
import { createTheme, ThemeProvider } from "@mui/material/styles";

function Home() {
  const drawerWidth = 260;

  const light = {
    palette: {
      mode: "light",
    },
  };

  const dark = {
    palette: {
      mode: "dark",
    },
  };

  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const changeTheme = () => {
    setIsDarkTheme(!isDarkTheme);
  };

  return (
    <ThemeProvider theme={isDarkTheme ? createTheme(dark) : createTheme(light)}>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <Navbar />

        <Drawer
          PaperProps={{
            sx: {
              backgroundColor: isDarkTheme ? "#000000" : "#2160BA",
              color: "	rgba(255, 255, 255)",
            },
          }}
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            "& .MuiDrawer-paper": {
              width: drawerWidth,
              boxSizing: "border-box",
            },
          }}
          variant="permanent"
          anchor="left"
        >
          <Box sx={{ textAlign: "center", m: 1 }}>
            <h1>
              <LibraryBooksIcon /> DocuHub
            </h1>
          </Box>

          <List>
            {[
              "I. GETTING STARTED",
              "II. USER SETTINGS",
              "III. ADVANCED USAGE IV",
              "IV. WRITING POSTS AND PAGES",
              "V.WEB CONFIGURATION",
            ].map((text) => (
              <ListItem key={text} disablePadding>
                <ListItemButton>
                  <ListItemText primary={text} />

                  <ArrowForwardIosIcon />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
          <Divider />
          <Button sx={{ textAlign: "center", mt: 42 }} color="inherit">
            powered by Mostafa{" "}
          </Button>
        </Drawer>

        <Box component="main" sx={{ flexGrow: 1, p: 3, ml: 12 }}>
          <Toolbar />
          <Typography variant="h3" gutterBottom sx={{ fontWeight: "bold" }}>
            DocuHub{" "}
            <FormControlLabel
              control={<Switch checked={isDarkTheme} onChange={changeTheme} />}
              label="Dark Theme"
            />
          </Typography>
          <Typography variant="caption" display="block" gutterBottom>
            A modern documentation theme for Ghost
          </Typography>

          <Homecard headofcard="I. Getting Started" />
          <Homecard headofcard="II. Getting twwwwwo" />
          <Homecard headofcard="III. Getting third" />
          <Homecard headofcard="User Settings" />
          <Homecard headofcard="Advanced Usage" />
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default Home;
