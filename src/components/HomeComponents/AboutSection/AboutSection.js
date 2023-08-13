import React from "react";
import { aboutImage } from "src/variables";
import { StyledAboutSection } from "./AboutSection.styles";

const AboutSection = () => {
  return (
    <StyledAboutSection>
      <div className="row">
        <div className="image">
          <div className="image-container">
            <img src={aboutImage} alt={"Burgers With Fries and Tomatoes"} />
          </div>
        </div>
        <div className="text">
          <h2>
            <span>Learn More</span> About Us
          </h2>
          <p>
            Quisque pellentesque iaculis mi vitae fermentum. Nullam non sapien
            imperdiet, imperdiet augue vitae, suscipit massa. Morbi elementum
            tincidunt felis a finibus. Sed eget tempor est. Sed eu tellus in
            quam volutpat placerat vitae at nisi. Vivamus ac consequat ipsum.
            Nam in nibh at ex euismod tempor quis sit amet ligula.
          </p>
          <ul>
            <li>
              Quisque pellentesque iaculis mi vitae fermentum. Nullam non sapien
              imperdiet
            </li>
            <li>Sed eget tempor est. </li>
            <li>Sed eu tellus in quam volutpat placerat vitae at nisi.</li>
            <li> Quisque pellentesque iaculis mi vitae fermentum.</li>
          </ul>
          <p>
            Quisque pellentesque iaculis mi vitae fermentum. Nullam non sapien
            imperdiet, imperdiet augue vitae, suscipit massa. Morbi elementum
            tincidunt felis a finibus. Sed eget tempor est. Sed eu tellus in
            quam volutpat placerat vitae at nisi. Vivamus ac consequat ipsum.
            Nam in nibh at ex euismod tempor quis sit amet ligula.
          </p>
        </div>
      </div>
    </StyledAboutSection>
  );
};

export default AboutSection;
