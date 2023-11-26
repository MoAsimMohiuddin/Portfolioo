import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import ecommImg from '../assets/img/ecomm.png';
import chatAppImg from '../assets/img/chatapp.png';
import cohortChurnImg from '../assets/img/cohortchurn.png';
import apiTesterImg from '../assets/img/apitester.png';

export const Projects = () => {

  const projects = [
    {
      title: "API Tester",
      description: "Test Your APIs Easily!",
      imgUrl: apiTesterImg,
      githubLink: "https://github.com/MoAsimMohiuddin/API-Tester",
    },
    {
      title: "Real Time Chat Application",
      description: "Chat with your friends on a customized groupchat seamlessly!",
      imgUrl: chatAppImg,
      githubLink: "https://github.com/MoAsimMohiuddin/Real-Time-Chat-Application-using-NodeJS",
    },
    {
      title: "E-Commerce Website",
      description: "Website to sell eco-friendly products. Made using ReactJS",
      imgUrl: ecommImg,
      githubLink: "https://github.com/MoAsimMohiuddin/CCC-Sustaiable-ECOMM-using-React",
    },
    {
      title: "Churn Cohort Analysis",
      description: "Aimed to increase user retention on a Internet Service Provider Dataset!",
      imgUrl: cohortChurnImg,
      githubLink: "",
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col className="projects-window" size={12}>
              <div>
                <h2>Projects</h2>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Tab.Content id="slideInUp">
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="section">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
