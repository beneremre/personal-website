import styled from "styled-components";

export const Line = styled.div`
  font-size: ${(props) =>
    props.small ? "1rem !important" : "8rem !important"};
  background-size: cover;
  font-family: "Oxanium", sans-serif;
  color: #bdd3ca;
  margin-top: 1%;
  padding: 0 10% 0 10%;
  font-style: italic;
  &:hover {
    transform: scale(1.01);
  }
  @media (max-width: 600px) {
    display: inherit;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 8%;
  @media (max-width: 600px) {
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
  margin-bottom: 10px;
  margin-top: 20vh;
  background-color: #bdd3ca;
  color: #151019;
  border: 1px solid #bdd3ca;
  padding: 24px 36px;
  cursor: pointer;
  font-style: italic;
  &:hover {
    transform: scale(1.05);
  }
  @media (max-width: 600px) {
    margin-top: 8vh;
    padding: 18px 27px;
    margin-bottom: 30px;
  }
`;

export const ImageFrame = styled.img`
  border-radius: 100%;
  width: 150px;
  height: 150px;
  &:hover {
    transform: scale(1.05);
  }
  @media (max-width: 600px) {
    align-self: center;
  }
`;

export const AvatarFrame = styled.img`
  border-radius: 100%;
  width: 150px;
  height: 150px;
  position: fixed;
  top: 20;
  left: 20;
  &:hover {
    transform: scale(1.05);
  }
  @media (max-width: 600px) {
    display: none;
  }
`;
