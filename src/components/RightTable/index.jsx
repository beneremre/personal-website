import React from "react";
import { ImageFrame, Wrapper } from "./styles";
import JS from "../../assets/js.png";
import HTML from "../../assets/html.png";
import CSS from "../../assets/css.png";
import JQUERY from "../../assets/jquery.png";
import NODE from "../../assets/nodejs.png";
import JAVA from "../../assets/java.png";
import REACT from "../../assets/react.png";
import CPP from "../../assets/cpp.png";
import PYTHON from "../../assets/python.png";

import "../../index.css";

const RightTable = () => {
  return (
    <Wrapper>
      <ImageFrame src={JS} />
      <ImageFrame src={HTML} />
      <ImageFrame src={CSS} />
      <ImageFrame src={JQUERY} />
      <ImageFrame src={REACT} />
      <ImageFrame src={NODE} />
      <ImageFrame src={JAVA} />
      <ImageFrame src={CPP} />
      <ImageFrame src={PYTHON} />
    </Wrapper>
  );
};

export default RightTable;
