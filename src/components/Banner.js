import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/header-img.svg";
import { ArrowRightCircle } from "react-bootstrap-icons";
import asimImg from '../assets/img/asimm.jpeg';
import "animate.css";

export const Banner = () => {
  const [showModal, setShowModal] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = [
    "Full Stack Web Developer",
    "Also A student",
    "Pursuing my Bachelors rn :)",
  ];
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
  }, [text]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex((prevIndex) => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex((prevIndex) => prevIndex + 1);
    }
  };

  const handleShowModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
            <div>
              <span className="tagline">Welcome to my Portfolio</span>
              <h1>
                {`Hi! I'm Asim.`}{" "}
                <span
                  className="txt-rotate"
                  dataPeriod="1000"
                  data-rotate='[ "Web Developer", "Web Designer", "UI/UX Designer" ]'
                >
                  <span className="wrap">{text}</span>
                </span>
              </h1>
              <p>
                Hey, I'm Asim. A passionate Full Stack Web Developer from India.
                Whether it's adapting to new technologies or staying updated
                with the latest trends in web development, I thrive on
                continuous improvement. Beyond my development skills, I have a
                deep-seated interest in Data Structures and Algorithms.
                Understanding the foundation of computing allows me to optimize
                and enhance the performance of the applications I build. I find
                joy in solving algorithmic puzzles and optimizing code to make
                applications run faster and smoother.
              </p>
              <button
                className="more-btn"
                onClick={handleShowModal}
              >
                More About Me
                <ArrowRightCircle size={25} />
              </button>
            </div>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <div>
              <img src={headerImg} alt="Header Img" />
            </div>
          </Col>
          <Col>
            {showModal && (
              <div className="custom-modal">
                <div style={{backgroundColor:"black"}}  className="modal-content">
                  <span className="close" onClick={handleCloseModal}>
                    &times;
                  </span>
                  <h2>About Me</h2>
                  <p>
                    Hey! I hope you liked my work. Make sure to leave a message at the end of the page.
                    Thank you for your time😉
                  </p>
                  <img src={asimImg} className="modal-image"></img>
                </div>
              </div>
            )}
          </Col>
        </Row>
      </Container>
    </section>
  );
};
