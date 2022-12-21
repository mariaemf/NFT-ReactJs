import React from "react";
import { Col, Container, Row } from "reactstrap";
import { NFT__DATA } from "../../../assets/data/data";
import NftCard from "../Nft-card/NftCard";
import "./treding.css";

const Treding = () => {
  return (
    <section>
      <Container>
        <Row>
          <Col lg="12" className="md-5">
            <h3 className="treding__title">Treding</h3>
          </Col>

          {NFT__DATA.slice(0, 8).map((item) => (
            <Col lg="3" md="4" sm="6" key={item.id} className="md-4">
              <NftCard item={item} />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Treding;
