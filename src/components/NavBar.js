import "../App.scss";

import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Slide from "@mui/material/Slide";
import { Button, Grid, useScrollTrigger } from "@mui/material";
import nsjTechLogo from "../assets/img/HeaderNavigation/nsj-logo1.png";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
export default function NavBar(props) {
  function HideOnScroll(props) {
    const { children, window } = props;

    const trigger = useScrollTrigger({
      target: window ? window() : undefined,
    });

    return (
      <Slide appear={false} direction="down" in={!trigger}>
        {children}
      </Slide>
    );
  }

  return (
    <React.Fragment>
      <CssBaseline />
      <HideOnScroll {...props}>
        <AppBar component="nav">
          <Toolbar className="nav-container">
            <Container sx={{ display: "flex", paddingY: ".5rem" }}>
              <Grid container>
                <IconButton
                  color="inherit"
                  aria-label="open drawer"
                  edge="start"
                  sx={{ mr: 2, display: { sm: "none" } }}
                >
                  <MenuIcon />
                </IconButton>
                <Grid
                  item
                  xs={1}
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Box
                    component="img"
                    src={nsjTechLogo}
                    alt="nsj-tech-logo"
                    sx={{ height: "3.3rem", width: "auto", color: "#ff6c1e " }}
                  />
                </Grid>
                <Grid
                  item
                  xs={5}
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                  }}
                >
                  <Typography
                    variant="h6"
                    component="div"
                    className="nav-title"
                  >
                    ShiftMinds Technology Solutions
                  </Typography>
                  <Typography
                    variant="h6"
                    component="div"
                    className="nav-text-title"
                  >
                    Shift your minds, transform your business
                  </Typography>
                </Grid>
                <Grid
                  item
                  xs={6}
                  sx={{ display: "flex", justifyContent: "flex-end" }}
                >
                  <Box
                    className="nav-button"
                    sx={{
                      justifyContent: "flex-end",
                      justifyItems: "center",
                      alignSelf: "center",
                    }}
                  >
                    <Button>Home</Button>
                    <Button>About</Button>
                    <Button>Services</Button>
                    <Button>Contact</Button>
                  </Box>
                </Grid>
              </Grid>
            </Container>
          </Toolbar>
        </AppBar>
        {/* <AppBar>
        
          <Toolbar className="nav-container">
            <Container sx={{ display: "flex" }}>
              <Box
                className="nsj-nav-logo"
                component="img"
                src={nsjTechLogo}
                alt="nsj-tech-logo"
                sx={{ height: "3.3rem", width: "auto" }}
              />
              <Typography variant="h6" component="div" className="nav-title">
                ShiftMinds Technology Solutions
              </Typography>
            </Container>
          </Toolbar>
        </AppBar> */}
      </HideOnScroll>
      <Toolbar />
      <Container>
        <Box sx={{ my: 5 }}>
          {[...new Array(12)]
            .map(
              () => `Cras mattis consectetur purus sit amet fermentum.
Cras justo odio, dapibus ac facilisis in, egestas eget quam.
Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
Praesent commodo cursus magna, vel scelerisque nisl consectetur et.Cras mattis consectetur purus sit amet fermentum.
Cras justo odio, dapibus ac facilisis in, egestas eget quam.
Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
Praesent commodo cursus magna, vel scelerisque nisl consectetur et.Cras mattis consectetur purus sit amet fermentum.
Cras justo odio, dapibus ac facilisis in, egestas eget quam.
Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
Praesent commodo cursus magna, vel scelerisque nisl consectetur et.Cras mattis consectetur purus sit amet fermentum.
Cras justo odio, dapibus ac facilisis in, egestas eget quam.
Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
Praesent commodo cursus magna, vel scelerisque nisl consectetur et.Cras mattis consectetur purus sit amet fermentum.
Cras justo odio, dapibus ac facilisis in, egestas eget quam.
Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
Praesent commodo cursus magna, vel scelerisque nisl consectetur et.Cras mattis consectetur purus sit amet fermentum.
Cras justo odio, dapibus ac facilisis in, egestas eget quam.
Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
Praesent commodo cursus magna, vel scelerisque nisl consectetur et. `
            )
            .join("\n")}
        </Box>
      </Container>
    </React.Fragment>
  );
}
