import styled from "styled-components";

export const NavigationBar = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  position: relative;
  width: 100%;
  margin-top: 16px;
  right: 35px;
  gap: 45px;
  @media (max-width: 600px) {
    flex-direction: column;
    gap: 5px;
    margin-left: 4%;
    right: 0;
  }
`;

export const NavigationElement = styled.div`
  font-family: "Oxanium", sans-serif;
  font-size: 1.2rem;
  color: #bdd3ca;
  cursor: pointer;
  &:hover {
    font-size: 1.33rem;
    box-shadow: rgba(111, 110, 110, 100) 15px 18px 150px 10px;
  }
`;

export const ResumeNavigator = styled.a`
  font-family: "Oxanium", sans-serif;
  font-size: 1.5rem;
  color: #bdd3ca;
  cursor: pointer;
  &:hover {
    font-size: 1.53rem;
    box-shadow: rgba(0, 0, 0, 3) 0px 5px 15px 15px;
  }
`;
