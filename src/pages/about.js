import React, { useRef, Suspense, useState } from "react";
import { Row, Col, Image } from "antd";
import {
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import akh from "../images/akh.jpg";

const About = () => {
  return (
    <Row justify='center' style={{ paddingBottom: "50px" }}>
      <Col span={20}>
        <h1 style={{ textAlign: "center" }}>
          Mission-driven full stack developer with a passion for thoughtful UI
          design, collaboration, and teaching.
        </h1>
        <p style={{ textAlign: "center", color: "black" }}>
          I’ve always sought out opportunities and challenges that are
          meaningful to me. — I've never stopped engaging my passion to help
          others and solve problems. As a web developer, I enjoy using my
          obsessive attention to detail, my unequivocal love for making things,
          and my mission-driven work ethic to literally change the world. That's
          why I’m excited to make a big impact at a high growth company.
        </p>
      </Col>
      {/* <Col lg={{ span: 11 }} xs={{ span: 20 }}></Col> */}
    </Row>
  );
};

export default About;
