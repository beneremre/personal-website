import React from "react";
import { ImageFrame, Wrapper } from "./styles";
import LinkedIn from "../../assets/linkedin.png";
import LinkedInActive from "../../assets/linkedin_active.png";
import Git from "../../assets/git.png";
import GitActive from "../../assets/git_active.png";
import Gmail from "../../assets/gmail.png";
import GmailActive from "../../assets/gmail_active.png";
import Insta from "../../assets/insta.png";
import InstaActive from "../../assets/insta_active.png";
import Whatsapp from "../../assets/whatsapp.png";
import WhatsappActive from "../../assets/whatsapp_active.png";
import "../../index.css";

const LeftNavigator = () => {
  return (
    <Wrapper className="icon-container">
      <ImageFrame className="icon" src={LinkedIn} />
      <ImageFrame
        className="hovered-icon"
        src={LinkedInActive}
        onClick={() => window.open("https://www.linkedin.com/in/beneremre/")}
      />
      <ImageFrame className="icon" src={Git} />
      <ImageFrame
        className="hovered-icon"
        src={GitActive}
        onClick={() => window.open("https://github.com/beneremre")}
      />
      <ImageFrame className="icon" src={Gmail} />
      <ImageFrame
        className="hovered-icon"
        src={GmailActive}
        onClick={() =>
          (window.location.href = `mailto:beneremre@alumni.sabanciuniv.edu`)
        }
      />
      <ImageFrame className="icon" src={Insta} />
      <ImageFrame
        className="hovered-icon"
        src={InstaActive}
        onClick={() => window.open("https://www.instagram.com/beneremree")}
      />
      <ImageFrame className="icon" src={Whatsapp} />
      <ImageFrame
        className="hovered-icon"
        src={WhatsappActive}
        onClick={() => window.open(`https://wa.me/+905069580573`)}
      />
    </Wrapper>
  );
};

export default LeftNavigator;
