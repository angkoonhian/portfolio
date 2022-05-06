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

const Projects = () => {
  const { Meta } = Card;
  return (
    <Row justify='space-around'>
      <Col xl={{ span: 5 }} lg={{ span: 7 }} xs={{ span: 20 }}>
        <Card
          style={{ width: "auto", marginBottom: "35px" }}
          cover={
            <Image
              width='100%'
              height='150px'
              style={{ objectFit: "cover" }}
              alt='example'
              src={contrannect}
            />
          }
          actions={[
            <SettingOutlined key='setting' />,
            <EditOutlined key='edit' />,
            <EllipsisOutlined key='ellipsis' />,
          ]}
        >
          <Meta title='Contrannect' description='This is the description' />
        </Card>
      </Col>
      <Col xl={{ span: 5 }} lg={{ span: 7 }} xs={{ span: 20 }}>
        <Card
          style={{ width: "auto", marginBottom: "35px" }}
          cover={
            <Image
              width='100%'
              height='150px'
              style={{ objectFit: "cover" }}
              alt='example'
              src={relish}
            />
          }
          actions={[
            <SettingOutlined key='setting' />,
            <EditOutlined key='edit' />,
            <EllipsisOutlined key='ellipsis' />,
          ]}
        >
          <Meta title='Relish' description='This is the description' />
        </Card>
      </Col>
      <Col xl={{ span: 5 }} lg={{ span: 7 }} xs={{ span: 20 }}>
        <Card
          style={{ width: "auto", marginBottom: "35px" }}
          cover={
            <Image
              width='100%'
              height='150px'
              style={{ objectFit: "cover" }}
              alt='example'
              src={dataplea}
            />
          }
          actions={[
            <SettingOutlined key='setting' />,
            <EditOutlined key='edit' />,
            <EllipsisOutlined key='ellipsis' />,
          ]}
        >
          <Meta title='Data Plea' description='This is the description' />
        </Card>
      </Col>
      <Col xl={{ span: 5 }} lg={{ span: 7 }} xs={{ span: 20 }}>
        <Card
          style={{ width: "auto", marginBottom: "35px" }}
          cover={
            <Image
              width='100%'
              height='150px'
              style={{ objectFit: "cover" }}
              alt='example'
              src={kampong}
            />
          }
          actions={[
            <SettingOutlined key='setting' />,
            <EditOutlined key='edit' />,
            <EllipsisOutlined key='ellipsis' />,
          ]}
        >
          <Meta
            title='Kampong'
            description='A youth team-up platform that allows youths to meet and launch social initiatives for the benefit of the community.'
          />
        </Card>
      </Col>
      <Col xl={{ span: 5 }} lg={{ span: 7 }} xs={{ span: 20 }}>
        <Card
          hoverable
          style={{ width: "auto", marginBottom: "35px" }}
          cover={
            <Image
              width='100%'
              height='150px'
              style={{ objectFit: "cover" }}
              alt='example'
              src={reisen}
            />
          }
          actions={[
            <SettingOutlined key='setting' />,
            <EditOutlined key='edit' />,
            <EllipsisOutlined key='ellipsis' />,
          ]}
        >
          <Meta title='Reisen' description='This is the description' />
        </Card>
      </Col>
      <Col xl={{ span: 5 }} lg={{ span: 7 }} xs={{ span: 20 }}>
        <Card
          style={{ width: "auto", marginBottom: "35px" }}
          cover={
            <Image
              width='100%'
              height='150px'
              style={{ objectFit: "cover" }}
              alt='example'
              src={teleconsult}
            />
          }
          actions={[
            <SettingOutlined key='setting' />,
            <EditOutlined key='edit' />,
            <EllipsisOutlined key='ellipsis' />,
          ]}
        >
          <Meta title='Teleconsult' description='This is the description' />
        </Card>
      </Col>
      <Col xl={{ span: 5 }} lg={{ span: 7 }} xs={{ span: 20 }}>
        <Card
          style={{ width: "auto", marginBottom: "35px" }}
          cover={
            <Image
              width='100%'
              height='150px'
              style={{ objectFit: "cover" }}
              alt='example'
              src={chatwsamuel}
            />
          }
          actions={[
            <SettingOutlined key='setting' />,
            <EditOutlined key='edit' />,
            <EllipsisOutlined key='ellipsis' />,
          ]}
        >
          <Meta
            title='Chat With Samuel'
            description='This is the description'
          />
        </Card>
      </Col>
      <Col xl={{ span: 5 }} lg={{ span: 7 }} xs={{ span: 20 }}>
        <Card
          style={{ width: "auto", marginBottom: "35px" }}
          cover={
            <Image
              width='100%'
              height='150px'
              style={{ objectFit: "cover" }}
              alt='example'
              src={sb2j}
            />
          }
          actions={[
            <SettingOutlined key='setting' />,
            <EditOutlined key='edit' />,
            <EllipsisOutlined key='ellipsis' />,
          ]}
        >
          <Meta title='SB2J' description='This is the description' />
        </Card>
      </Col>
    </Row>
  );
};

export default Projects;
