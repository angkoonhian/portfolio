import React, { useRef, Suspense, useState } from "react";
import { Row, Col, Image } from "antd";
import gic from "../images/gic.png";
import ost from "../images/ost-technologies.png";
import skilio from "../images/skilio.png";

class Card extends React.Component {
  render() {
    return (
      <div className='card'>
        <Row justify='start'>
          <Col xl={{ span: 10 }} lg={{ span: 10 }} xs={{ span: 8 }}>
            <img src={this.props.image} style={{ height: "50px" }}></img>
          </Col>
          <Col xl={{ span: 14 }} lg={{ span: 14 }} xs={{ span: 16 }}>
            <h1
              style={{
                fontWeight: "400",
                textAlign: "end",
                fontSize: "25px",
                color: "#2d5d62",
                paddingTop: "10px",
              }}
            >
              {this.props.company}
            </h1>
          </Col>
        </Row>

        <div className='line' style={{ backgroundColor: this.props.bgc }}></div>
        <h2
          style={{
            fontWeight: "300",
            paddingTop: "10px",
            paddingBottom: "10px",
          }}
        >
          {this.props.position}
        </h2>

        <p>{this.props.experience1}</p>
        <p>{this.props.experience2}</p>
        <p>{this.props.experience3}</p>
        <p>{this.props.experience4}</p>
        <h3
          style={{
            fontSize: "13px",
            fontWeight: "300",
            color: "#6d6d6d",
            paddingTop: "10px",
          }}
        >
          {this.props.duration}
        </h3>
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
            company='Government Investment Corporation (GIC) Singapore'
            position='Full stack software engineer intern'
            duration='Janurary 2022 - June 2022 | Singapore'
            bgc='#86DC3D'
            experience1='Responsible for full stack software development of Convertible Bonds trade editor (ARENA)
            '
            experience2='Managed to integrate functions from BRS (Black Rock Solutions) and CRD (Charles River) into Arena.'
            experience3='Extended functionality of microservices written in java springboot'
            experience4='Contributed to the deployment of GIC’s Convertible Bonds trade editor (ARENA)'
          />
        </Col>

        <Col xl={{ span: 15 }} lg={{ span: 18 }} xs={{ span: 20 }}>
          <Card
            image={ost}
            style={{ width: "100px", height: "auto" }}
            company='OST Technologies'
            position='Full stack software engineer'
            duration='July 2021 - December 2021 | Singapore'
            bgc='#86DC3D'
            experience1='Worked on an IOT project responsible for displaying sensor data on
a web portal with PHP , MySQL for backend and Angular 9 as
frontend'
            experience2='worked on developing an internal dashboard that aims to track all sensor location and enables UI friendly CRUD operations. React, Redux as state management and NestJS as backend'
          />
        </Col>
        <Col xl={{ span: 15 }} lg={{ span: 18 }} xs={{ span: 20 }}>
          <Card
            image={skilio}
            company='Skilio'
            position='Full stack software engineer intern'
            duration='January 2021 - July 2021 | Singapore'
            bgc='#86DC3D'
            content='ur team proposed an idea that merges finance and blockchain tech together by creating ETF for NFTs. Awarded most creative idea.'
            experience1='Built main app features with Angular, NgRx for state mangement, tailwind and nestjs / express as backend, coupled with firebase as database.'
            experience2='Built microservices for scheduling the sending of automated emails for reminders '
          />
        </Col>
      </div>
    </Row>
  );
};

export default Experiences;
