import React, { useRef, Suspense, useState } from "react";
import { Row, Col, Image } from "antd";
import {
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import contrannect from "../images/contrannect.png";
import "./award.css";
class Card extends React.Component {
  render() {
    return (
      <div className='card'>
        <h2>{this.props.title}</h2>
        <div className='line' style={{ backgroundColor: this.props.bgc }}></div>
        <p>{this.props.content}</p>
      </div>
    );
  }
}
const Awards = () => {
  const { Meta } = Card;
  return (
    <Row justify='space-around'>
      <div className='containerAward'>
        <Col xl={{ span: 8 }} lg={{ span: 10 }} xs={{ span: 20 }}>
          <Card
            title='NUS 2021 Data Science Competition Finalist'
            bgc='#fcd000'
            content='Our team trained a computer vision model via YoloV4 for counting acumen
chips accurately, detecting anomalies and auditing manual entries.
'
          />
        </Col>

        <Col xl={{ span: 8 }} lg={{ span: 10 }} xs={{ span: 20 }}>
          <Card
            title='PSA Code Sprint Finalist'
            bgc='#fcd000'
            content='eveloped a video analytics system that uses YoloV4 to detect and flag out erroneous driver behaviours.
'
          />
        </Col>
        <Col xl={{ span: 8 }} lg={{ span: 10 }} xs={{ span: 20 }}>
          <Card
            title='NUS 2022 Fintech Blockchain Competition Finalist (Most
Creative Idea)'
            bgc='#fcd000'
            content='ur team proposed an idea that merges finance and blockchain tech together by creating ETF for NFTs. Awarded most creative idea.'
          />
        </Col>
        <Col xl={{ span: 8 }} lg={{ span: 10 }} xs={{ span: 20 }}>
          <Card
            title='Huawei Spark Hackathon 2022 Finalist'
            bgc='#fcd000'
            content='Developed an itinerary generator that works based on your personal
preferences and is powered by machine learning with huawei cloud services.'
          />
        </Col>
        <Col xl={{ span: 8 }} lg={{ span: 10 }} xs={{ span: 20 }}>
          <Card
            title='NUS Venture Initiation Program@SOC awardee ($10,000)'
            bgc='#fcd000'
            content='Developed an itinerary generator that works based on your personal
preferences and is powered by machine learning with huawei cloud services.'
          />
        </Col>
      </div>
    </Row>
  );
};

export default Awards;
