import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.png";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              Nice to <span className="purple"> meet </span> you!
            </h1>
            <p className="home-about-body">
              I am a Msc graduate with a flair for technology, design, quality,
              aesthetics, and storytelling.
              <br />
              <i>
                <b className="purple">
                  This page contains some of the graphics I have created for a
                  few of the more visual projects I have worked on in the past.
                </b>
              </i>
              <br />
              <br />
              <br />
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img
                src={myImg}
                className="img-fluid rounded-avatar"
                alt="avatar"
              />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <p>
              Feel free to <span className="purple">connect </span>with me on
              Linkedin{" "}
              <a
                href="https://www.linkedin.com/in/tanja-andersen-9054b9174/"
                target="_blank"
                rel="noreferrer"
                className="icon-colour  home-social-icons"
              >
                <FaLinkedinIn />
              </a>
            </p>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
