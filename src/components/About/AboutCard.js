import React from "react";
import Card from "react-bootstrap/Card";
import { ImDroplet, ImPointRight, ImStatsDots } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            My name is <span className="purple">Tanja Andersen </span>
            and I am from <span className="purple"> Denmark 🇩🇰.</span>
            <br />
            <br />
            I’m a Master’s graduate of Interactive Digital Media also holding a
            Bachelor’s degree in Medialogy.I am passionate about blending
            creativity and technology and specialize in creating engaging and
            aestethic digital experiences.
            <br />
            {/* I have completed Integrated MSc (IMSc) in Maths and Computing at BIT
            Mesra. */}
            <br />
            <br />
            Apart from creating illustrations, some other things I enjoy working
            on are:
          </p>
          <ul>
            <li className="about-activity">• User Tests</li>
            <li className="about-activity">• Quality Assurance</li>
            <li className="about-activity">• UX Design</li>
            <li className="about-activity">• Game Development</li>
            <li className="about-activity">•Data Analysis</li>
          </ul>
          <br />
          <p style={{ textAlign: "justify" }}>
            In my free time I enjoy activities such as:
            <ul>
              <li className="about-activity">• Playing Video Games</li>
              <li className="about-activity">• Dungeons and Dragons</li>
              <li className="about-activity">• Drawing</li>
              <li className="about-activity">• Upcycling Furniture</li>
              <li className="about-activity">• Woodworking</li>
            </ul>
          </p>
          {/* <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Soumyajit</footer> */}
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
