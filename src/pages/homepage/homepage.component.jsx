import React from "react";

//styling
import { HomePageContainer } from "./homepage.styles";

//components
import Directory from "../../components/directory/directory.component";

const HomePage = () => (
  <HomePageContainer>
    <Directory />
  </HomePageContainer>
);

export default HomePage;
