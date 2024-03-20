import styled from "styled-components";

export const Wrapper = styled.div`
  position: fixed;
  right: 0;
  top: 15%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 30px;
  gap: 20px;
  @media (max-width: 600px) {
    display: none;
  }
`;

export const ImageFrame = styled.img`
  width: 50px;
  height: 50px;
  &:hover {
    transform: scale(1.1);
  }
`;
