import React from "react";
import { useNavigate } from "react-router-dom";
import { NavigationBar, NavigationElement } from "./styles";
import PDFSource from "../../assets/resume.pdf";

const Header = () => {
  const navigate = useNavigate();

  const navigationTypes = [
    { title: "HOME", onClickFunction: () => navigate("/") },
    { title: "ABOUT", onClickFunction: () => navigate("/about") },
    { title: "ACADEMIC", onClickFunction: () => navigate("/academic") },
    { title: "WORK EXPERIENCE", onClickFunction: () => navigate("/work") },
    { title: "RESUME", onClickFunction: () => window.open(PDFSource) },
  ];

  return (
    <NavigationBar>
      {navigationTypes.map((item, index) => {
        return (
          <NavigationElement key={item.title} onClick={item.onClickFunction}>
            {item.title}
          </NavigationElement>
        );
      })}
    </NavigationBar>
  );
};

export default Header;
