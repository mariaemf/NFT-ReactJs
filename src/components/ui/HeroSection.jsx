import React from "react";
import { Link } from "react-router-dom";
import { Col, Container, Row } from "reactstrap";
import "./hero-section.css";

const HeroSection = () => {
  return (
    <section className="hero__section">
      <Container>
        <Row>
          <Col lg="6" md="6">
            <div className="hero__content">
              <h2>
                Discover rare digital art and collect
                <span>sell extraordinary</span>NFTs
              </h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptate tempore commodi sapiente dicta nemo vitae magnam
                consequatur facilis reiciendis eum?
              </p>

              <div className="hero__btns d-flex aling-items-center gap-4">
                <button className="d-flex aling-items-center gap-2">
                  <i class="ri-rocket-line"></i>
                  <Link to="/market">Explore</Link>
                </button>
                <button className="d-flex aling-items-center gap-2">
                  <i class="ri-ball-pen-line"></i>
                  <Link to="/create">Explore</Link>
                </button>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default HeroSection;
