import React from "react";
import { Container } from "reactstrap";
import "./cpmmon-section.css";

const CommonSection = ({ title }) => {
  return (
    <section className="common__section">
      <Container className="text-center">{title}</Container>
    </section>
  );
};

export default CommonSection;
