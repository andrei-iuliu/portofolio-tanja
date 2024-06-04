import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

// Uneased to meet you imports
import anxiety from "../../Assets/Projects/uneased-to-meet-you/Anxiety 1.2.png";
import barLit from "../../Assets/Projects/uneased-to-meet-you/Bar (Lit).png";
import barNotification from "../../Assets/Projects/uneased-to-meet-you/Bar Notification.png";
import baseBuildingLit from "../../Assets/Projects/uneased-to-meet-you/Base Building (Lit).png";
import bgNight from "../../Assets/Projects/uneased-to-meet-you/bg-night.png";
import F1_1 from "../../Assets/Projects/uneased-to-meet-you/F1_1.png";
import F2_1 from "../../Assets/Projects/uneased-to-meet-you/F2_1.png";
import F3_1 from "../../Assets/Projects/uneased-to-meet-you/F3_1.png";
import F4_1 from "../../Assets/Projects/uneased-to-meet-you/F4_1.png";
import F5_1 from "../../Assets/Projects/uneased-to-meet-you/F5_1.png";
import friendBarExample2 from "../../Assets/Projects/uneased-to-meet-you/Friend Bar Example 2.png";
import fullBackgroundDay from "../../Assets/Projects/uneased-to-meet-you/Full Background (Day).png";
import fullFemMC from "../../Assets/Projects/uneased-to-meet-you/Full Fem MC.png";
import fullMascMC from "../../Assets/Projects/uneased-to-meet-you/Full Masc MC.png";
import M1_1 from "../../Assets/Projects/uneased-to-meet-you/M1_1.png";
import M2_1 from "../../Assets/Projects/uneased-to-meet-you/M2_1.png";
import M3_1 from "../../Assets/Projects/uneased-to-meet-you/M3_1.png";
import M4_1 from "../../Assets/Projects/uneased-to-meet-you/M4_1.png";
import M5_1 from "../../Assets/Projects/uneased-to-meet-you/M5_1.png";
import main from "../../Assets/Projects/uneased-to-meet-you/main.png";
import marcus2 from "../../Assets/Projects/uneased-to-meet-you/Marcus 2.0.png";
import marcus from "../../Assets/Projects/uneased-to-meet-you/Marcus.png";
import NB1_2 from "../../Assets/Projects/uneased-to-meet-you/NB1_2.png";
import NB2_2 from "../../Assets/Projects/uneased-to-meet-you/NB2_2.png";
import startScreen from "../../Assets/Projects/uneased-to-meet-you/Start Screen 2.0.png";

//Game Jam 2019 Imports
import forest2D from "../../Assets/Projects/2019-game-jam/2D.Forest.png";
import angryShroom from "../../Assets/Projects/2019-game-jam/AngryShroom1.png";
import exitTree from "../../Assets/Projects/2019-game-jam/ExitTree.png";
import hole from "../../Assets/Projects/2019-game-jam/Hole.png";
import icon from "../../Assets/Projects/2019-game-jam/Icon.png";
import jumpSprite from "../../Assets/Projects/2019-game-jam/Jump1.5Sprite1.png";
import platform from "../../Assets/Projects/2019-game-jam/Platform1.png";
import spike from "../../Assets/Projects/2019-game-jam/Spike.png";
import thickTree from "../../Assets/Projects/2019-game-jam/ThickTree.Hole.png";
import thickTreeHole from "../../Assets/Projects/2019-game-jam/ThickTreeHole.png";
import walkSprite from "../../Assets/Projects/2019-game-jam/Walk1Sprite1.png";

//BCI Imports
import canyonBGNoSun from "../../Assets/Projects/2021-bci/Canyon BG (No Sun).png";
import canyonBG from "../../Assets/Projects/2021-bci/Canyon BG.png";
import example from "../../Assets/Projects/2021-bci/Example.png";
import finnWithSign from "../../Assets/Projects/2021-bci/Finn with sign_1.png";
import gymnast from "../../Assets/Projects/2021-bci/Gymnast.png";
import nonCanyonBG from "../../Assets/Projects/2021-bci/Non-canyon BG.png";

//Food Waste Imports
import applePng from "../../Assets/Projects/2019-food-waste/applepng.png";
import banana from "../../Assets/Projects/2019-food-waste/banan.png";
import door from "../../Assets/Projects/2019-food-waste/Door.png";
import fridgeFreezerColor from "../../Assets/Projects/2019-food-waste/Fridgefreezercolor.png";
import ham from "../../Assets/Projects/2019-food-waste/ham.png";
import noBread from "../../Assets/Projects/2019-food-waste/nobread.png";
import noCrisper from "../../Assets/Projects/2019-food-waste/NoCrisper.png";
import noDoorNoCrisper from "../../Assets/Projects/2019-food-waste/NoDoorNoCrisper.png";
import openFreezer from "../../Assets/Projects/2019-food-waste/open_freezer.png";
import trash from "../../Assets/Projects/2019-food-waste/trash.png";

function Projects() {
  const uneasedCarousel = [
    anxiety,
    barLit,
    barNotification,
    baseBuildingLit,
    bgNight,
    F1_1,
    F2_1,
    F3_1,
    F4_1,
    F5_1,
    friendBarExample2,
    fullBackgroundDay,
    fullFemMC,
    fullMascMC,
    M1_1,
    M2_1,
    M3_1,
    M4_1,
    M5_1,
    main,
    marcus2,
    NB1_2,
    NB2_2,
    startScreen,
  ];

  const gameJamCarousel = [
    forest2D,
    angryShroom,
    exitTree,
    hole,
    icon,
    jumpSprite,
    platform,
    thickTree,
    thickTreeHole,
    walkSprite,
  ];

  const bciCarousel = [
    canyonBGNoSun,
    canyonBG,
    example,
    finnWithSign,
    gymnast,
    nonCanyonBG,
  ];

  const foodWasteCarousel = [
    applePng,
    banana,
    door,
    fridgeFreezerColor,
    ham,
    noBread,
    noCrisper,
    noDoorNoCrisper,
    openFreezer,
    trash,
  ];

  const images = [
    "https://via.placeholder.com/600x300?text=Image+1",
    "https://via.placeholder.com/600x300?text=Image+2",
    "https://via.placeholder.com/600x300?text=Image+3",
  ];

  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={6} className="project-card">
            <ProjectCard
              title="BCI Pole Vaulting (2021)"
              description="As part of a project-team working on creating a rehabilitative game for stroke patients, I helped create a Brain Computer Interface controlled pole vaulting game. For this project I functioned as Producer, lead Quality Assurance and User Research manager, and Art Director, planning and creating several game assets and backdrops in Adobe Illustrator.  "
              images={bciCarousel}
            />
          </Col>

          <Col md={6} className="project-card">
            <a
              href="https://drion.itch.io/uneased-to-meet-you"
              target="_blank"
              rel="noopener noreferrer"
              className="no-underline"
            >
              <ProjectCard
                title="Uneased to Meet You (2020)"
                description="For this project I took the role of Team Lead of a small game dev team and developed a 2D platformer game. Aditionally I functioned as lead QA and UR, Lead Writer, writing all of the story and dialogue in the game as well as implementing it in code, producer, taking a big part in game planning and idea generation. Additionally I functioned as Art Director, setting the visual tone and creating all the graphical elements of the game, including a diverse cast of sprites, interchangable day to night backgrounds and buildings, different game screens and much more."
                images={uneasedCarousel}
              />
            </a>
          </Col>

          <Col md={6} className="project-card">
            <ProjectCard
              title="Game Jam Project (2019)"
              // description="During a 24-hour game jam, I oversaw the creation of animated sprites, designed the team logo, developed an endless scrollable background, and produced all additional assets"
              description={
                "I was recruited by a team to create artwork for them during a 24-hour game jam. I oversaw the creation of animated sprites, designed the team logo as per their wishes, developed an endless scrollable background, and produced additional assets."
              }
              images={gameJamCarousel}
            />
          </Col>

          <Col md={6} className="project-card">
            <ProjectCard
              title="Foodwaste App (2019)"
              // description="I worked on developing an app to reduce food waste. My work with this project involved production, UX design, programming and most of all, producing assets for the app both vector graphics made in Illustrator and hand drawn assets. "
              description={
                "As part of a dedicated team, I contributed to the development of an app aimed at reducing food waste. My responsibilities included overseeing production, crafting intuitive UX designs, and programming. Most of all, I created a variety of assets for the app, encompassing both vector graphics in Illustrator and hand-drawn illustrations."
              }
              images={foodWasteCarousel}
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
