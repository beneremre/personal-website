import React from "react";
import { useNavigate } from "react-router";
import { Content, NavigationButton, Title, Wrapper } from "./styles";
import { contentTypes } from "../../constants";

const About = () => {
  const navigate = useNavigate();

  return (
    <Wrapper>
      <Title>ABOUT</Title>
      {contentTypes.map((item, index) => {
        return (
          <Content margin={index === 0 && "3"} key={item}>
            {item}
          </Content>
        );
      })}

      <NavigationButton onClick={() => navigate("/academic")}>
        ACADEMIC HISTORY
      </NavigationButton>
    </Wrapper>
  );
};

export default About;
