import React from "react";
import { Col, Container, Row } from "reactstrap";
import CommonSection from "../components/ui/Common-section/CommonSection";
import "../styles/wallet.css";

const wallet__data = [
  {
    title: "Bitcoin",
    desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Provident veritatis dignissimos amet aspernatur laudantium quas?",
    icon: "ri-bit-coin-line",
  },

  {
    title: "Coinbase",
    desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Provident veritatis dignissimos amet aspernatur laudantium quas?",
    icon: "ri-coin-line",
  },
  {
    title: "Metamask",
    desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Provident veritatis dignissimos amet aspernatur laudantium quas?",
    icon: "ri-money-cny-circle-line",
  },
  {
    title: "Authereum",
    desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Provident veritatis dignissimos amet aspernatur laudantium quas?",
    icon: "ri-bit-coin-line",
  },
];

const Wallet = () => {
  return (
    <>
      <CommonSection title="Connect Wallet" />
      <section>
        <Container>
          <Row>
            <Col lg="12" className="mb-5 text-center">
              <div className="w-50 m-auto">
                <h3 className="text-light">Connect your wallet</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptate, laudantium non laborum fugit deserunt quisquam
                  aliquam perspiciatis adipisci voluptatibus quaerat.
                </p>
              </div>
            </Col>

            {wallet__data.map((item, index) => (
              <Col lg="3" md="4" sm="6" key={index} className="mb-4">
                <div className="wallet__item">
                  <span>
                    <i class={item.icon}></i>
                  </span>
                  <h5 className=" text-center">{item.title}</h5>
                  <p>{item.desc}</p>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Wallet;
