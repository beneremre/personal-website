import React from "react";
import { Wrapper, Title, WorkTitle, WorkContent, WorkDetail } from "./styles";
import { experiences, detailedExperience } from "../../constants";
import RightTable from "../../components/RightTable";

export const Work = () => {
  return (
    <Wrapper>
      <Title>WORK EXPERIENCE</Title>
      <RightTable />
      {experiences.map((item, index) => {
        return (
          <>
            <WorkTitle>{item.name}</WorkTitle>
            <WorkContent>{item.content}</WorkContent>
            {detailedExperience[index].map((itm, idx) => {
              return <WorkDetail>{itm}</WorkDetail>;
            })}
          </>
        );
      })}
    </Wrapper>
  );
};

export default Work;
