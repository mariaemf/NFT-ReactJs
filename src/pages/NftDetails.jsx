import React from "react";
import { useParams } from "react-router-dom";
import { Col, Container, Row } from "reactstrap";
import { NFT__DATA } from "../assets/data/data";
import CommonSection from "../components/ui/Common-section/CommonSection";
import LiveAuction from "../components/ui/live-auction/LiveAuction";
import "../styles/nft-details.css";

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

                <div className="d-flex align-items-center justify-content-between">
                  <div className="d-flex align-items-center gap-4 single__nft-seen">
                    <span>
                      {" "}
                      <i class="ri-eye-line"></i> 234
                    </span>
                    <span>
                      <i class="ri-heart-line"></i>252
                    </span>
                  </div>

                  <div className="d-flex align-items-center gap-2 single__nft-more">
                    <span>
                      {" "}
                      <i class="ri-send-plane-line"></i>
                    </span>
                    <span>
                      <i class="ri-more-2-line"></i>
                    </span>
                  </div>
                </div>

                <div className="nft__creator">
                  <div className="creator__img">
                    <img src={singleNft.creatorImg} alt="" />
                  </div>
                  <div className="creator__detail">
                    <p>Created By</p>
                    <h6>{singleNft.creator}</h6>
                  </div>
                </div>
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
