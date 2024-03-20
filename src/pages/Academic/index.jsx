import React from "react";
import {
  Title,
  Wrapper,
  Content,
  CourseTitle,
  CourseContent,
  NavigationButton,
} from "./styles";
import { courses } from "../../constants";
import { useNavigate } from "react-router";

export const Academic = () => {
  const navigate = useNavigate();
  return (
    <Wrapper>
      {/* <ImageFrame src={Avatar} width="150px" height="150px" style={{}} /> */}
      <Title>ACADEMIC</Title>
      <Content>Bor Science High School (2012-2016)</Content>
      <Content>
        Sabanci University - Computer Science and Engineering (2016-2021)
      </Content>
      <Title margin>COURSES</Title>
      {courses.map((item, index) => {
        return (
          <>
            <CourseTitle>{item.name}</CourseTitle>
            <CourseContent>{item.content}</CourseContent>
          </>
        );
      })}
      <NavigationButton onClick={() => navigate("/work")}>
        WORK EXPERIENCE
      </NavigationButton>
    </Wrapper>
  );
};

export default Academic;
