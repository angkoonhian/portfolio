import React, { useRef, Suspense, useState } from "react";
import { Row, Col, Image } from "antd";
import gic from "../images/gic.png";
import ost from "../images/ost-technologies.png";
import skilio from "../images/skilio.png";

class Card extends React.Component {
  render() {
    return (
      <div className='card'>
        <img src={this.props.image} style={{ height: "50px" }}></img>
        <h2>{this.props.title}</h2>
        <h3>{this.props.duration}</h3>
        <div className='line' style={{ backgroundColor: this.props.bgc }}></div>
        <p>{this.props.content}</p>
      </div>
    );
  }
}

const Experiences = () => {
  const { Meta } = Card;
  return (
    <Row justify='space-around'>
      <div className='containerAward'>
        <Col xl={{ span: 15 }} lg={{ span: 18 }} xs={{ span: 20 }}>
          <Card
            image={gic}
            title='Full stack software engineer intern @ Government Investment Corporation (GIC) Singapore'
            duration='Janurary 2022 - June 2022'
            bgc='#86DC3D'
            content='Our team trained a computer vision model via YoloV4 for counting acumen
chips accurately, detecting anomalies and auditing manual entries.
'
          />
        </Col>

        <Col xl={{ span: 15 }} lg={{ span: 18 }} xs={{ span: 20 }}>
          <Card
            image={ost}
            style={{ width: "100px", height: "auto" }}
            title='Full stack software engineer @ OST Technologies'
            duration='July 2021 - December 2021'
            bgc='#86DC3D'
            content='eveloped a video analytics system that uses YoloV4 to detect and flag out erroneous driver behaviours.
'
          />
        </Col>
        <Col xl={{ span: 15 }} lg={{ span: 18 }} xs={{ span: 20 }}>
          <Card
            image={skilio}
            title='Full stack software engineer intern @ Skilio'
            duration='January 2021 - July 2021'
            bgc='#86DC3D'
            content='ur team proposed an idea that merges finance and blockchain tech together by creating ETF for NFTs. Awarded most creative idea.'
          />
        </Col>
      </div>
    </Row>
  );
};

export default Experiences;
