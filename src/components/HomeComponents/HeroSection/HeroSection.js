import React from "react";
import { scrollToSection } from "src/utilityFunctions";
import { StyledHeroContainer } from "./HeroSection.styles";
import { StyledButton } from "src/components/UI/Components/Button.styles";
import * as variables from "src/variables";

const HeroSection = (props) => {
  const { menuRef } = props;
  return (
    <StyledHeroContainer>
      <div className="hero-inner">
        <div className="left">
          <h1 className="hero-heading">
            <span> Delicious Food</span>,
            <br />
            Delivered to You!
          </h1>
          <StyledButton
            href="#"
            className="view-menu"
            onClick={(e) => scrollToSection(e, menuRef.current, 65)}
          >
            View Menu
          </StyledButton>
        </div>
        <div className="right">
          <img src={variables.mainBannerImage} alt="React Restaurant" />
        </div>
      </div>
    </StyledHeroContainer>
  );
};

export default HeroSection;
