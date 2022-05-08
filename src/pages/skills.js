import React, { useRef, Suspense, useState } from "react";
import { Row, Col, Image } from "antd";
import {
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import "./award.css";
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
import django from "../images/skills/django.svg";
import gaussdb from "../images/skills/GaussDB.svg";
import { post } from "jquery";
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

const Skills = () => {
  return (
    <Row justify='space-around' style={{ position: "relative" }}>
      <div className='containerSkills'>
        <Col xl={{ span: 15 }} lg={{ span: 18 }} xs={{ span: 22 }}>
          <div className='card'>
            <h2>Programming languages</h2>
            <div className='line' style={{ backgroundColor: "#0ebeff" }}></div>
            <p>
              <Row justify='space-around' gutter={12}>
                <Col xl={{ span: 2 }} lg={{ span: 4 }} xs={{ span: 10 }}>
                  <img
                    src={javascript}
                    style={{ height: "50px", width: "50px" }}
                  />
                  <p></p>
                </Col>
                <Col xl={{ span: 2 }} lg={{ span: 4 }} xs={{ span: 10 }}>
                  <img
                    src={typescript}
                    style={{ height: "50px", width: "50px" }}
                  />
                  <p></p>
                </Col>
                <Col xl={{ span: 2 }} lg={{ span: 4 }} xs={{ span: 10 }}>
                  <img src={java} style={{ height: "50px", width: "50px" }} />
                  <p></p>
                </Col>
                <Col xl={{ span: 2 }} lg={{ span: 4 }} xs={{ span: 10 }}>
                  <img src={python} style={{ height: "50px", width: "50px" }} />
                  <p></p>
                </Col>
                <Col xl={{ span: 2 }} lg={{ span: 4 }} xs={{ span: 10 }}>
                  <img src={r} style={{ height: "50px", width: "50px" }} />
                  <p></p>
                </Col>
                <Col xl={{ span: 2 }} lg={{ span: 4 }} xs={{ span: 10 }}>
                  <img src={php} style={{ height: "50px", width: "50px" }} />
                  <p></p>
                </Col>
              </Row>
            </p>
          </div>
        </Col>
        <Col xl={{ span: 15 }} lg={{ span: 18 }} xs={{ span: 22 }}>
          <div className='card'>
            <h2>Front End Framework</h2>
            <div className='line' style={{ backgroundColor: "#0ebeff" }}></div>
            <p>
              <Row justify='space-around'>
                <Col xl={{ span: 2 }} lg={{ span: 4 }} xs={{ span: 10 }}>
                  <img src='https://img.icons8.com/color/48/000000/html-5--v1.png' />
                  <p></p>
                </Col>
                <Col xl={{ span: 2 }} lg={{ span: 4 }} xs={{ span: 10 }}>
                  <img src='https://img.icons8.com/dusk/48/000000/css3.png' />
                  <p></p>
                </Col>
                <Col xl={{ span: 2 }} lg={{ span: 4 }} xs={{ span: 10 }}>
                  <img src='https://img.icons8.com/color/48/000000/angularjs.png' />
                  <p></p>
                </Col>
                <Col xl={{ span: 2 }} lg={{ span: 4 }} xs={{ span: 10 }}>
                  <img src='https://img.icons8.com/officel/48/000000/react.png' />
                  <p></p>
                </Col>
                <Col xl={{ span: 2 }} lg={{ span: 4 }} xs={{ span: 10 }}>
                  <img src={vue} style={{ height: "50px", width: "50px" }} />
                  <p></p>
                </Col>
                <Col xl={{ span: 2 }} lg={{ span: 4 }} xs={{ span: 10 }}>
                  <img src='https://img.icons8.com/color/48/000000/redux.png' />
                  <p></p>
                </Col>
                <Col xl={{ span: 2 }} lg={{ span: 4 }} xs={{ span: 10 }}>
                  <img src='https://img.icons8.com/color/48/000000/gatsbyjs.png' />
                  <p></p>
                </Col>
                <Col xl={{ span: 2 }} lg={{ span: 4 }} xs={{ span: 10 }}>
                  <img src={nextjs} style={{ height: "50px", width: "50px" }} />
                  <p></p>
                </Col>
              </Row>
            </p>
          </div>
        </Col>
        <Col xl={{ span: 15 }} lg={{ span: 18 }} xs={{ span: 22 }}>
          <div className='card'>
            <h2>Back End Framework</h2>
            <div className='line' style={{ backgroundColor: "#0ebeff" }}></div>
            <p>
              <Row justify='space-around'>
                <Col xl={{ span: 2 }} lg={{ span: 4 }} xs={{ span: 10 }}>
                  <img
                    src={express}
                    style={{ height: "100px", width: "100px" }}
                  />
                  <p></p>
                </Col>
                <Col xl={{ span: 2 }} lg={{ span: 4 }} xs={{ span: 10 }}>
                  <img
                    src={nodejs}
                    style={{ height: "100px", width: "100px" }}
                  />
                  <p></p>
                </Col>
                <Col xl={{ span: 2 }} lg={{ span: 4 }} xs={{ span: 10 }}>
                  <img
                    src={springboot}
                    style={{ height: "100px", width: "100px" }}
                  />
                  <p></p>
                </Col>
                <Col xl={{ span: 2 }} lg={{ span: 4 }} xs={{ span: 10 }}>
                  <img
                    src={nestjs}
                    style={{ height: "100px", width: "100px" }}
                  />
                  <p></p>
                </Col>
                <Col xl={{ span: 2 }} lg={{ span: 4 }} xs={{ span: 10 }}>
                  <img
                    src={django}
                    style={{ height: "100px", width: "100px" }}
                  />
                  <p></p>
                </Col>
              </Row>
            </p>
          </div>
        </Col>
        <Col xl={{ span: 15 }} lg={{ span: 18 }} xs={{ span: 22 }}>
          <div className='card'>
            <h2>Database</h2>
            <div className='line' style={{ backgroundColor: "#0ebeff" }}></div>
            <p>
              <Row justify='space-around'>
                <Col xl={{ span: 2 }} lg={{ span: 4 }} xs={{ span: 10 }}>
                  <img src={mysql} style={{ height: "50px", width: "50px" }} />
                  <p></p>
                </Col>
                <Col xl={{ span: 2 }} lg={{ span: 4 }} xs={{ span: 10 }}>
                  <img
                    src={postgresql}
                    style={{ height: "50px", width: "50px" }}
                  />
                  <p></p>
                </Col>
                <Col xl={{ span: 2 }} lg={{ span: 4 }} xs={{ span: 10 }}>
                  <img
                    src={mongodb}
                    style={{ height: "50px", width: "70px" }}
                  />
                  <p></p>
                </Col>
                <Col xl={{ span: 2 }} lg={{ span: 4 }} xs={{ span: 10 }}>
                  <img
                    src={gaussdb}
                    style={{ height: "50px", width: "70px" }}
                  />
                  <p></p>
                </Col>
                <Col xl={{ span: 2 }} lg={{ span: 4 }} xs={{ span: 10 }}>
                  <img
                    src={firebase}
                    style={{ height: "50px", width: "50px" }}
                  />
                  <p></p>
                </Col>
                <Col xl={{ span: 2 }} lg={{ span: 4 }} xs={{ span: 10 }}>
                  <img
                    src={graphql}
                    style={{ height: "50px", width: "50px" }}
                  />
                  <p></p>
                </Col>
              </Row>
            </p>
          </div>
        </Col>
      </div>
    </Row>
  );
};

export default Skills;
