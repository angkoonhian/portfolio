import React, { useRef, Suspense, useState } from "react";
import { Row, Col, Card, Image } from "antd";
import {
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import "./projects.css";
import contrannect from "../images/contrannect.png";
import relish from "../images/relish.png";
import kampong from "../images/kampong.png";
import dataplea from "../images/datapleapic.png";
import reisen from "../images/reisen.png";
import chatwsamuel from "../images/chatwsamuel.png";
import teleconsult from "../images/teleconsult.png";
import sb2j from "../images/sb2j.jpg";
import nestjs from "../images/skills/nestjs.svg";
import nodejs from "../images/skills/nodejs.svg";
import springboot from "../images/skills/springboot.svg";
import express from "../images/skills/express.svg";
import nextjs from "../images/skills/nextjs.svg";
import vue from "../images/skills/vue.svg";
import r from "../images/skills/r.svg";
import python from "../images/skills/python.svg";
import java from "../images/skills/java.svg";
import php from "../images/skills/php.svg";
import javascript from "../images/skills/javascript.svg";
import typescript from "../images/skills/typescript.svg";
import mysql from "../images/skills/mysql.svg";
import postgresql from "../images/skills/postgresql.svg";
import mongodb from "../images/skills/mongodb.svg";
import graphql from "../images/skills/graphql.svg";
import firebase from "../images/skills/firebase.svg";
import gaussdb from "../images/skills/GaussDB.svg";
import django from "../images/skills/django.svg";
import github from "../images/github.svg";
import easytrading from "../images/easytrading.png";

const Projects = () => {
  const { Meta } = Card;
  return (
    <Row justify='space-around'>
      <Col
        xl={{ span: 5 }}
        lg={{ span: 7 }}
        xs={{ span: 20 }}
        sm={{ span: 17 }}
      >
        <Card
          style={{ width: "auto", marginBottom: "35px" }}
          cover={
            <Image
              width='100%'
              height='200px'
              style={{ objectFit: "cover" }}
              alt='example'
              src={contrannect}
            />
          }
          actions={[
            <a
              style={{
                color: "black",
              }}
              alt='https://github.com/angkoonhian/BuildConnectMain'
              href='https://github.com/angkoonhian/BuildConnectMain'
            >
              <img
                src={github}
                style={{
                  marginTop: "10px",
                  marginBottom: "10px",
                  marginRight: "5px",
                }}
              ></img>
              {"  "}
              View Code on Github!
            </a>,
          ]}
        >
          <Meta
            title='Contrannect'
            description='Contrannect is a Singapore-based construction network that aims to connect contractors in Singapore, digitising the construction industry. It is designed to aid sourcing for construction work, making it more accessible for all players and increasing competitiveness.'
          />

          <br></br>
          <p style={{ fontWeight: "bold" }}>Tech Stack</p>
          <Row gutter={10} justify='space-around'>
            <Col span={5}>
              <img src='https://img.icons8.com/officel/32/000000/react.png' />
            </Col>
            <Col span={5}>
              <img src='https://img.icons8.com/color/32/000000/redux.png' />
            </Col>
            <Col span={5}>
              <img style={{ height: "40px", width: "50px" }} src={nestjs} />
            </Col>
            <Col span={5}>
              <img style={{ height: "40px", width: "40px" }} src={graphql} />
            </Col>
            <Col span={5}>
              <img style={{ height: "40px", width: "60px" }} src={mongodb} />
            </Col>
            <Col span={5}>
              <img style={{ height: "40px", width: "60px" }} src={nodejs} />
            </Col>
          </Row>
        </Card>
      </Col>
      <Col
        xl={{ span: 5 }}
        lg={{ span: 7 }}
        xs={{ span: 20 }}
        sm={{ span: 17 }}
      >
        <Card
          style={{ width: "auto", marginBottom: "35px" }}
          cover={
            <Image
              width='100%'
              height='200px'
              style={{ objectFit: "cover" }}
              alt='example'
              src={relish}
            />
          }
          actions={[
            <a
              style={{
                color: "black",
              }}
              alt='https://github.com/angkoonhian/Orbital-relish'
              href='https://github.com/angkoonhian/Orbital-relish'
            >
              <img
                src={github}
                style={{
                  marginTop: "10px",
                  marginBottom: "10px",
                  marginRight: "5px",
                }}
              ></img>
              {"  "}
              View Code on Github!
            </a>,
          ]}
        >
          <Meta
            title='Relish'
            description='Relish aims to recruit stay-home chefs, be it aspiring teenagers who want to dabble in cooking or stay-home spouses that want to showcase their ethnic cuisine, and to connect these chefs to a wider customer base that would rather home-cooked food rather than what is readily available out there now.'
          />
          <br></br>
          <p style={{ fontWeight: "bold" }}>Tech Stack</p>
          <Row gutter={10} justify='space-around'>
            <Col span={5}>
              <img src='https://img.icons8.com/color/32/000000/angularjs.png' />
            </Col>
            <Col span={5}>
              <img src='https://img.icons8.com/color/32/000000/redux.png' />
            </Col>
            <Col span={5}>
              <img style={{ height: "40px", width: "40px" }} src={mysql} />
            </Col>
            <Col span={5}>
              <img style={{ height: "40px", width: "60px" }} src={php} />
            </Col>
            <Col span={5}>
              <img style={{ height: "40px", width: "60px" }} src={nodejs} />
            </Col>
          </Row>
        </Card>
      </Col>
      <Col
        xl={{ span: 5 }}
        lg={{ span: 7 }}
        xs={{ span: 20 }}
        sm={{ span: 17 }}
      >
        <Card
          style={{ width: "auto", marginBottom: "35px" }}
          cover={
            <Image
              width='100%'
              height='200px'
              style={{ objectFit: "cover" }}
              alt='example'
              src={dataplea}
            />
          }
          actions={[
            <a
              style={{
                color: "black",
              }}
            >
              <img
                src={github}
                style={{
                  marginTop: "10px",
                  marginBottom: "10px",
                  marginRight: "5px",
                }}
              ></img>
              {"  "}
              View Code on Github!
            </a>,
          ]}
        >
          <Meta
            title='Data Plea'
            description='DataPlea is a platform that serves to simplify the process of image labelling / annotation. It allows users to annotate their images from just about anywhere. DataPlea also enables users without programming background to learn and take part in the image annotation process that will in turn benefit the tech community.'
          />
          <br></br>
          <p style={{ fontWeight: "bold" }}>Tech Stack</p>
          <Row gutter={10} justify='space-around'>
            <Col span={5}>
              <img src='https://img.icons8.com/officel/32/000000/react.png' />
            </Col>
            <Col span={5}>
              <img src='https://img.icons8.com/color/32/000000/redux.png' />
            </Col>
            <Col span={5}>
              <img style={{ height: "40px", width: "50px" }} src={nestjs} />
            </Col>
            <Col span={5}>
              <img style={{ height: "40px", width: "40px" }} src={graphql} />
            </Col>
            <Col span={5}>
              <img style={{ height: "40px", width: "60px" }} src={mongodb} />
            </Col>
            <Col span={5}>
              <img style={{ height: "40px", width: "60px" }} src={nodejs} />
            </Col>
          </Row>
        </Card>
      </Col>
      <Col
        xl={{ span: 5 }}
        lg={{ span: 7 }}
        xs={{ span: 20 }}
        sm={{ span: 17 }}
      >
        <Card
          style={{ width: "auto", marginBottom: "35px" }}
          cover={
            <Image
              width='100%'
              height='200px'
              style={{ objectFit: "cover" }}
              alt='example'
              src={kampong}
            />
          }
          actions={[
            <a
              style={{
                color: "black",
              }}
              alt='https://github.com/angkoonhian/kampong-backend'
              href='https://github.com/angkoonhian/kampong-backend'
            >
              <img
                src={github}
                style={{
                  marginTop: "10px",
                  marginBottom: "10px",
                  marginRight: "5px",
                }}
              ></img>
              {"  "}
              View Code on Github!
            </a>,
          ]}
        >
          <Meta
            title='Kampong'
            description='A youth team-up platform that allows youths to meet and launch social initiatives for the benefit of the community. Youths today are becoming increasingly engaged in social issues. However, when trying to kick start their ideas, they often bump into a couple of problems: the lack of connection with people with the right skills, the resources to expand the ideas, or a platform to commit to.'
          />
          <br></br>
          <p style={{ fontWeight: "bold" }}>Tech Stack</p>
          <Row gutter={10} justify='space-around'>
            <Col span={5}>
              <img src='https://img.icons8.com/color/32/000000/angularjs.png' />
            </Col>
            <Col span={5}>
              <img src='https://img.icons8.com/color/32/000000/redux.png' />
            </Col>
            <Col span={5}>
              <img style={{ height: "40px", width: "50px" }} src={nestjs} />
            </Col>
            <Col span={5}>
              <img style={{ height: "40px", width: "40px" }} src={express} />
            </Col>
            <Col span={5}>
              <img style={{ height: "40px", width: "60px" }} src={postgresql} />
            </Col>
            <Col span={5}>
              <img style={{ height: "40px", width: "60px" }} src={graphql} />
            </Col>
            <Col span={5}>
              <img style={{ height: "40px", width: "60px" }} src={nodejs} />
            </Col>
          </Row>
        </Card>
      </Col>
      <Col
        xl={{ span: 5 }}
        lg={{ span: 7 }}
        xs={{ span: 20 }}
        sm={{ span: 17 }}
      >
        <Card
          hoverable
          style={{ width: "auto", marginBottom: "35px" }}
          cover={
            <Image
              width='100%'
              height='200px'
              style={{ objectFit: "cover" }}
              alt='example'
              src={reisen}
            />
          }
          actions={[
            <a
              style={{
                color: "black",
              }}
              alt='https://github.com/angkoonhian/huawei-reisen'
              href='https://github.com/angkoonhian/huawei-reisen'
            >
              <img
                src={github}
                style={{
                  marginTop: "10px",
                  marginBottom: "10px",
                  marginRight: "5px",
                }}
              ></img>
              {"  "}
              View Code on Github!
            </a>,
          ]}
        >
          <Meta
            title='Reisen'
            description='Information and resources are scattered across the web making it tedious to create an itinerary with feasible routes. As leisure travellers, one of the biggest hindrances to travelling is coming up with a feasible and personalised itinerary. To ease foreigners into travelling again, we have to find a way to revolutionize the way people plan their itineraries.'
          />
          <br></br>
          <p style={{ fontWeight: "bold" }}>Tech Stack</p>
          <Row gutter={10} justify='space-around'>
            <Col span={5}>
              <img src='https://img.icons8.com/officel/32/000000/react.png' />
            </Col>
            <Col span={5}>
              <img src='https://img.icons8.com/color/32/000000/redux.png' />
            </Col>
            <Col span={5}>
              <img style={{ height: "40px", width: "50px" }} src={nestjs} />
            </Col>
            <Col span={5}>
              <img style={{ height: "40px", width: "60px" }} src={gaussdb} />
            </Col>
            <Col span={5}>
              <img style={{ height: "40px", width: "60px" }} src={nodejs} />
            </Col>
          </Row>
        </Card>
      </Col>
      <Col
        xl={{ span: 5 }}
        lg={{ span: 7 }}
        xs={{ span: 20 }}
        sm={{ span: 17 }}
      >
        <Card
          style={{ width: "auto", marginBottom: "35px" }}
          cover={
            <Image
              width='100%'
              height='200px'
              style={{ objectFit: "cover" }}
              alt='example'
              src={teleconsult}
            />
          }
          actions={[
            <a
              style={{
                color: "black",
              }}
              alt='https://github.com/angkoonhian/brainhack2021-teleconsult-backend'
              href='https://github.com/angkoonhian/brainhack2021-teleconsult-backend'
            >
              <img
                src={github}
                style={{
                  marginTop: "10px",
                  marginBottom: "10px",
                  marginRight: "5px",
                }}
              ></img>
              {"  "}
              View Code on Github!
            </a>,
          ]}
        >
          <Meta
            title='Teleconsult'
            description='It is a healthcare hackathon project that focuses on GP clinics where they do not have the necessary technological infrastructure. 

Allows patients to have bookings for more of these GP clinics through a centralized application, rather than only for hospitals and polyclinics

Allows clinics to easily manage and inform patients about ongoing queue situations  to minimise physical contact with other patients, hence decreasing the overall exposure of each patient.
'
          />
          <br></br>
          <p style={{ fontWeight: "bold" }}>Tech Stack</p>
          <Row gutter={10} justify='space-around'>
            <Col span={5}>
              <img src='https://img.icons8.com/officel/32/000000/react.png' />
            </Col>
            <Col span={5}>
              <img src='https://img.icons8.com/color/32/000000/redux.png' />
            </Col>
            <Col span={5}>
              <img style={{ height: "40px", width: "50px" }} src={nestjs} />
            </Col>
            <Col span={5}>
              <img style={{ height: "40px", width: "60px" }} src={mongodb} />
            </Col>
            <Col span={5}>
              <img style={{ height: "40px", width: "60px" }} src={nodejs} />
            </Col>
          </Row>
        </Card>
      </Col>
      <Col
        xl={{ span: 5 }}
        lg={{ span: 7 }}
        xs={{ span: 20 }}
        sm={{ span: 17 }}
      >
        <Card
          style={{ width: "auto", marginBottom: "35px" }}
          cover={
            <Image
              width='100%'
              height='200px'
              style={{ objectFit: "cover" }}
              alt='example'
              src={chatwsamuel}
            />
          }
          actions={[
            <a
              style={{
                color: "black",
              }}
              alt='https://github.com/angkoonhian/hacknroll-ChatWithSamuel'
              href='https://github.com/angkoonhian/hacknroll-ChatWithSamuel'
            >
              <img
                src={github}
                style={{
                  marginTop: "10px",
                  marginBottom: "10px",
                  marginRight: "5px",
                }}
              ></img>
              {"  "}
              View Code on Github!
            </a>,
          ]}
        >
          <Meta
            title='Chat With Samuel'
            description='This is a mini project for my Hack & Roll 2021. I tried using web socket to start a live connection between users. Users can create chat rooms to chat with others. A machine learning model is used to summarise what the users have typed in the chat box.'
          />
          <br></br>
          <p style={{ fontWeight: "bold" }}>Tech Stack</p>
          <Row gutter={10} justify='space-around'>
            <Col span={4}>
              <img src='https://img.icons8.com/officel/32/000000/react.png' />
            </Col>
            <Col span={4}>
              <img src='https://img.icons8.com/color/32/000000/redux.png' />
            </Col>
            <Col span={4}>
              <img style={{ height: "40px", width: "50px" }} src={nestjs} />
            </Col>
            <Col span={4}>
              <img style={{ height: "40px", width: "40px" }} src={graphql} />
            </Col>
            <Col span={4}>
              <img style={{ height: "40px", width: "60px" }} src={mongodb} />
            </Col>
          </Row>
        </Card>
      </Col>
      <Col
        xl={{ span: 5 }}
        lg={{ span: 7 }}
        xs={{ span: 20 }}
        sm={{ span: 17 }}
      >
        <Card
          style={{ width: "auto", marginBottom: "35px" }}
          cover={
            <Image
              width='100%'
              height='200px'
              style={{ objectFit: "cover" }}
              alt='example'
              src={easytrading}
            />
          }
          actions={[
            <a
              style={{
                color: "black",
              }}
              alt='https://github.com/angkoonhian/BT3103-easyTrading'
              href='https://github.com/angkoonhian/BT3103-easyTrading'
            >
              <img
                src={github}
                style={{
                  marginTop: "10px",
                  marginBottom: "10px",
                  marginRight: "5px",
                }}
              ></img>
              {"  "}
              View Code on Github!
            </a>,
          ]}
        >
          <Meta
            title='Easy Trading'
            description='A platform to match buyers and sellers and facilitate the purchase/renting/trading of unwanted items through a website that allows sellers to list their underutilized/unwanted items and buyers to browse through them via an easy-to-use and aesthetically pleasing user interface. Buyers and sellers will be able to message each other within the website to negotiate a deal and leave reviews and ratings
'
          />
          <br></br>
          <p>
            Website:{" "}
            <a href='https://bt3103-finalproject.web.app/'>
              https://bt3103-finalproject.web.app/
            </a>
          </p>
          <br></br>
          <p style={{ fontWeight: "bold" }}>Tech Stack</p>
          <Row gutter={10} justify='space-around'>
            <Col span={5}>
              <img style={{ height: "35px", width: "50px" }} src={github} />
            </Col>
            <Col span={5}>
              <img style={{ height: "35px", width: "50px" }} src={vue} />
            </Col>
            <Col span={5}>
              <img style={{ height: "35px", width: "50px" }} src={firebase} />
            </Col>
            <Col span={5}>
              <img style={{ height: "40px", width: "60px" }} src={mongodb} />
            </Col>
          </Row>
        </Card>
      </Col>
    </Row>
  );
};

export default Projects;
