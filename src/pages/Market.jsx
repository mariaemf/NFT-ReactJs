import React from "react";
import { Col, Container, Row } from "reactstrap";
import CommonSection from "../components/ui/Common-section/CommonSection";
const Market = () => {
  return (
    <>
      <CommonSection title={"MarketPlace"} />

      <section>
        <Container>
          <Row>
            <Col lg="12"></Col>
            <div className="market__product__filter">
              <div className="filter__left">
                <div className="all_categorry__filter">
                  <h6>All Categories</h6>
                  <select>
                    <option value="art">Art</option>
                    <option value="music">Music</option>
                    <option value="domain-name">Domain Name</option>
                    <option value="virtual-word"> Virtual Name</option>
                    <option value="trending-card">Trending Cards</option>
                  </select>
                </div>
              </div>
              <div className="filter__right"></div>
            </div>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Market;
