import React, { useState, useEffect } from "react";
import axios from "axios";
import { Header, Container } from "semantic-ui-react";
import "./App.css";
import Grid from "./components/Grid";
import { CardContainer, Heading } from "./components/StyledWidgets";

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  return (
    <>
      <CardContainer>
        <Heading>
          All your favorite StarWars heros and villans in one place.
        </Heading>
        <div>
          <Grid />
        </div>
      </CardContainer>
    </>
  );
};

export default App;
