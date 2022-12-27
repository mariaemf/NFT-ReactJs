import React from "react";
import { useParams } from "react-router-dom";
import { Col, Container, Row } from "reactstrap";
import { NFT__DATA } from "../assets/data/data";
import CommonSection from "../components/ui/Common-section/CommonSection";
import LiveAuction from "../components/ui/live-auction/LiveAuction";

const NftDetails = () => {
  const { id } = useParams(); /*permite acessar parametros da rota atual*/

  const singleNft = NFT__DATA.find((item) => item.id === id);

  return (
    <>
      <CommonSection title={singleNft.title} />

      <section>
        <Container>
          <Row>
            <Col lg="6" md="6" sm="6">
              <img
                src={singleNft.imgUrl}
                alt=""
                className="w-100 single__nft-img"
              />
            </Col>

            <Col lg="6" md="6" sm="6">
              <div className="single__nft__content">
                <h2>{singleNft.title}</h2>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <LiveAuction />
    </>
  );
};

export default NftDetails;
