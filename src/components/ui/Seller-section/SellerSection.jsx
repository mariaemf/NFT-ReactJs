import React from "react";
import { Col, Container, Row } from "reactstrap";
import ava01 from "../../../assets/images/ava-01.png";
import "./seller.css";

const SellerSection = () => {
  return (
    <section>
      <Container>
        <Row>
          <Col lg="12" className="mb-5">
            <div className="seller__section-title">
              <h3>Top Seller</h3>
            </div>
          </Col>
          <Col lg="2">
            <div className="single_seller-card d-flex aling-items-center gap-3">
              <div className="seller__img">
                <img src={ava01} alt="" />
              </div>

              <div className="seller__content">
                <h6>Trista Francis</h6>
                <h6>4.89 ETH</h6>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default SellerSection;
