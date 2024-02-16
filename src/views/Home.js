import React from "react";
import { Stack, Button } from "@mui/material";
import "../App.scss";
import NavBar from "../components/NavBar";
function Home(props) {
  return (
    <div className="App">
      <NavBar />
      <Stack spacing={2} direction="row" className="app-stack">
        <Button variant="text">Text</Button>
        <Button variant="text">Contained</Button>
        <Button variant="text">Outlined</Button>
      </Stack>
      <Stack className="main-container">
        <Button className="main-title" variant="h1">
          Sample
        </Button>
      </Stack>
    </div>
  );
}

export default Home;
