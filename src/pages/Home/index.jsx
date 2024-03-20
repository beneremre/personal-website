import React from "react";
import { useNavigate } from "react-router-dom";
import { Wrapper, Line, NavigationButton, ImageFrame } from "./styles";
import Avatar from "../../assets/avatar.png";

const HomePage = () => {
  const navigate = useNavigate();
  return (
    <Wrapper>
      <ImageFrame src={Avatar} />
      <Line>Emre Bener</Line>
      <Line small>SOFTWARE ENGINEER , FULL STACK & MOBILE APP DEVELOPER</Line>
      <NavigationButton onClick={() => navigate("/about")}>
        GET TO KNOW ME
      </NavigationButton>
    </Wrapper>
  );
};

export default HomePage;
