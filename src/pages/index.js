import React, { useRef, Suspense, useState, useEffect } from "react";
// import { createShaderCanvas } from "react-shader-canvas";
import * as THREE from "three";
import { Canvas, extend, useFrame } from "@react-three/fiber";
import { shaderMaterial, Points, PointMaterial } from "@react-three/drei";
import glsl from "babel-plugin-glsl/macro";
import "./styles.css";
import $ from "jquery";
import "./nav.css";
import { Row, Col, Card, Avatar, Button } from "antd";
// import ScrollspyNav from "react-scrollspy-nav";
import Projects from "./projects";
import Awards from "./award";
import About from "./about";
import { DownloadOutlined } from "@ant-design/icons";
import Skills from "./skills";
import github from "../images/github.svg";
import Experiences from "./experience";
import linkedin from "../images/linkedin.svg";
import medium from "../images/medium.svg";
import angkoonhian from "../../angkoonhian.pdf";
import * as random from "maath/random/dist/maath-random.esm";

function Stars(props) {
  const ref = useRef();
  const [sphere] = useState(() =>
    random.inSphere(new Float32Array(500000), { radius: 0.8 })
  );
  useFrame((state, delta) => {
    ref.current.rotation.x -= delta / 151;
    ref.current.rotation.y -= delta / 118;
  });
  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points
        ref={ref}
        positions={sphere}
        stride={3}
        frustumCulled={false}
        {...props}
      >
        <PointMaterial
          transparent
          color='#77A8A3'
          // color='#A1C7C7'
          size={0.0004}
          sizeAttenuation={true}
          depthWrite={true}
        />
      </Points>
    </group>
  );
}

// Shader for bird's position
const Scene = () => {
  return (
    <Canvas
      camera={{ position: [0, 0, 1] }}
      style={{
        width: "100%",
        position: "absolute",
      }}
    >
      <Stars />
    </Canvas>
  );
};

function Overlay() {
  useEffect(function onFirstMount() {
    $(".navTrigger").click(function () {
      $(this).toggleClass("active");
      console.log("Clicked menu");
      $("#mainListDiv").toggleClass("show_list");
      $("#mainListDiv").fadeIn();
    });

    // $(window).scroll(function () {
    //   if ($(document).scrollTop() > $(window).height() * 0.3) {
    //     $(".nav").addClass("affix");
    //     $(".nav").css("opacity", $(document).scrollTop() / 500);
    //     console.log("OK");
    //   } else {
    //     $(".nav").removeClass("affix");
    //     $(".nav").css("opacity", 0);
    //   }
    // });

    return function unMount() {
      $(".navTrigger").off("click");
    };
  });

  return (
    <div
      class='container-fluid'
      style={{ position: "relative", display: "block", overflowY: "auto" }}
    >
      <Scene />
      <nav
        class='nav fixed-top'
        style={{ left: "0px", right: "0px", margin: "0px" }}
      >
        <div class='container'>
          <div class='logo'>
            <a href='#'>AKH</a>
          </div>
          <div id='mainListDiv' class='main_list'>
            <nav
              scrollTargetIds={["About", "Direction", "Features", "Contact"]}
              currentClassName='is-current'
              // offset={-100}
              scrollDuration='500'
            >
              <ul class='navlinks'>
                <li>
                  <a href='#About'>About</a>
                </li>
                <li>
                  <a href='#Direction'>Experience</a>
                </li>
                <li>
                  <a href='#Features'>Projects</a>
                </li>
                <li>
                  <a href='#Contact'>Skill</a>
                </li>
                <li>
                  <a href='#Contact'>Awards</a>
                </li>
                <li>
                  <a href='#Contact'>Socials</a>
                </li>
                <li>
                  <a href={angkoonhian} download='AngKoonHian.pdf'>
                    Resume
                  </a>
                </li>
              </ul>
            </nav>
          </div>
          <span class='navTrigger' style={{ paddingRight: "30px" }}>
            <i></i>
            <i></i>
            <i></i>
          </span>
        </div>
      </nav>
      <div
        style={{
          paddingTop: "300px",
          pointerEvents: "none",
        }}
      >
        <div
          style={{
            top: "50%",
            left: "50%",
            textAlign: "center",
          }}
        >
          <h1
            style={{
              margin: 0,
              padding: 0,
              fontSize: "12em",
              fontWeight: 400,
              letterSpacing: "-0.05em",
            }}
          >
            Ang Koon Hian.
          </h1>
          <h1
            style={{
              margin: 0,
              padding: 0,
              fontSize: "2em",
              fontWeight: 400,
              letterSpacing: "-0.05em",
            }}
          >
            A passionate software engineer
          </h1>
        </div>
        <div style={{ marginTop: "400px" }}>
          <h1 style={{ textAlign: "center", fontSize: "5em", fontWeight: 500 }}>
            About
          </h1>
          <About></About>
          <h1 style={{ textAlign: "center", fontSize: "5em", fontWeight: 500 }}>
            Experience
          </h1>
          <Experiences></Experiences>
          <h1
            style={{
              textAlign: "center",
              fontSize: "5em",
              fontWeight: 500,
              paddingTop: "100px",
            }}
          >
            Projects
          </h1>
          <div>
            <Projects></Projects>
          </div>

          <h1
            style={{
              textAlign: "center",
              fontSize: "5em",
              fontWeight: 500,
              paddingTop: "100px",
            }}
          >
            Skills
          </h1>
          <Skills></Skills>
          <h1
            style={{
              textAlign: "center",
              fontSize: "5em",
              fontWeight: 500,
              paddingTop: "100px",
            }}
          >
            Awards
          </h1>
          <Awards></Awards>
          <h1
            style={{
              textAlign: "center",
              fontSize: "5em",
              fontWeight: 500,
              paddingTop: "100px",
            }}
          >
            Socials
          </h1>

          <Row justify='center' gutter={48} style={{ marginBottom: "100px" }}>
            <Col span={1}>
              <a
                href='https://github.com/angkoonhian'
                alt='https://github.com/angkoonhian'
              >
                <img
                  style={{ width: "50px", height: "auto" }}
                  src={github}
                  alt='github'
                />
              </a>
            </Col>
            <Col span={1}>
              <a
                href='https://www.linkedin.com/in/ang-koon-hian-0005a2101/'
                alt='https://www.linkedin.com/in/ang-koon-hian-0005a2101/'
              >
                <img
                  style={{ width: "50px", height: "auto" }}
                  src={linkedin}
                  alt='github'
                />
              </a>
            </Col>
            <Col span={1}>
              <a
                href='https://medium.com/@angkoonhian'
                alt='https://medium.com/@angkoonhian'
              >
                <img
                  style={{ width: "50px", height: "auto" }}
                  src={medium}
                  alt='github'
                />
              </a>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
}
// markup
const IndexPage = () => {
  return (
    <main style={{ height: "100vh" }}>
      <div>
        <Overlay />
      </div>
    </main>
  );
};

export default IndexPage;
