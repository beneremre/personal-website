import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 8%;
  @media (max-width: 600px) {
    padding-left: 3%;
    padding-right: 3%;
  }
`;

export const Title = styled.div`
  font-size: 3rem !important;
  font-family: "Oxanium", sans-serif;
  font-style: italic;
  color: #bdd3ca;
  margin-top: ${(props) => (props.margin ? "5%" : 0)};
  @media (max-width: 600px) {
    align-self: flex-start;
    padding: 0px;
  }
`;

export const Content = styled.div`
  font-size: 1.5rem !important;
  font-family: "Oxanium", sans-serif;
  color: #cdcdcd90;
  padding: 3% 15% 0 15%;
  font-style: italic;
  @media (max-width: 600px) {
    align-self: center;
    padding: 0px;
  }
`;

export const NavigationButton = styled.div`
  display: inline-block;
  background-size: cover;
  border-radius: 300px;
  font-family: "Oxanium", sans-serif;
  align-items: center;
  justify-content: center;
  margin-right: 10px;
  margin-bottom: 8vh;
  margin-top: 8vh;
  background-color: #bdd3ca;
  color: #151019;
  border: 1px solid #bdd3ca;
  padding: 24px 36px;
  cursor: pointer;
  font-style: italic;
  &:hover {
    transform: scale(1.1);
  }
  @media (max-width: 600px) {
    margin-top: 8vh;
    padding: 18px 27px;
    margin-bottom: 30px;
  }
`;

export const CourseTitle = styled.div`
  font-size: 2rem !important;
  font-family: "Oxanium", sans-serif;
  font-style: italic;
  text-decoration-line: underline;
  color: #bdd3ca;
  margin-top: 5%;
  padding: 3% 15% 0 15%;
  @media (max-width: 600px) {
    align-self: flex-start;
    padding: 0px;
  }
`;

export const CourseContent = styled.div`
  font-size: 1.2rem !important;
  font-family: "Oxanium", sans-serif;
  color: #cdcdcd90;
  padding: 3% 15% 0 15%;
  font-style: italic;
  @media (max-width: 600px) {
    align-self: flex-start;
    padding: 0px;
  }
`;
