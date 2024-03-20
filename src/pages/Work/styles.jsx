import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-top: 8%;
  padding-bottom: 8%;
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
    align-self: center;
  }
`;

export const WorkTitle = styled.div`
  font-size: 2rem !important;
  font-family: "Oxanium", sans-serif;
  font-style: italic;
  color: #bdd3ca;
  margin-top: 5%;
  text-decoration-line: underline;
`;

export const WorkContent = styled.div`
  font-size: 1.2rem !important;
  font-family: "Oxanium", sans-serif;
  color: #cdcdcd90;
  padding: 3% 15% 0 18%;
  align-self: flex-start;
  @media (max-width: 600px) {
    align-self: center;
    padding: 0px;
  }
`;

export const WorkDetail = styled.div`
  font-size: 1.05rem !important;
  font-family: "Oxanium", sans-serif;
  color: #cdcdcd90;
  align-self: flex-start;
  padding: 1% 15% 0 18%;
  @media (max-width: 600px) {
    padding: 0px;
  }
`;
