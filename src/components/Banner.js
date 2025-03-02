import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/header-img.svg";
import { ArrowRightCircle } from "react-bootstrap-icons";
import asimImg from "../assets/img/asim.jpg";
import "animate.css";

export const Banner = () => {
  const [showModal, setShowModal] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = [
    "Architecting software, debugging reality",
    "Debugging my code, and occasionally my life",
    "Turning coffee into code (and sometimes chaos)",
  ];
  const period = 800;

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
      ? fullText.substring(0, text.length - 2)
      : fullText.substring(0, text.length + 2);

    setText(updatedText);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 1.5);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex((prevIndex) => prevIndex - 1);
      setDelta(period / 2);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(200);
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
                <span className="txt-rotate" dataPeriod="1000">
                  <span className="wrap">{text}</span>
                </span>
              </h1>
              <p>
                {" "}
                Hey, I’m Asim. A Software Engineer who occasionally questions his life choices. I write code, break things, then pretend I meant to do it. If there’s a new tech trend, I’ll probably adopt it—only to regret it later. Web dev keeps me on my toes, mainly because something is always on fire.
                Beyond coding, I have an unhealthy obsession with Data Structures and Algorithms. Why? Because nothing screams fun like dynamic programming and time complexity ruining your day. I enjoy solving algorithmic puzzles, mostly so I can flex about it later. Optimizing code is my passion… until I realize the bottleneck is me.
                When I’m not busy debugging my life choices, I’m watching Barça remind the world why football is art. Messi? Absolute GOAT—no debates, no discussions. Football is my escape, except when my team loses, in which case, it’s just another source of pain.
                Welcome to my portfolio.
              </p>

              <button className="more-btn" onClick={handleShowModal}>
                Catsoncake
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
                <div
                  style={{ backgroundColor: "black" }}
                  className="modal-content"
                >
                  <span className="close" onClick={handleCloseModal}>
                    &times;
                  </span>
                  <h2>hollaaaa!</h2>
                  <p>
                    <span className="catsoncake">
                      Cats love cake, but this one left without a bite. If you're still hungry, you know where to find me (Just text me please)
                      <br /><span className="mark-ruffalo">- Mark Ruffalo in disguise</span>
                    </span>
                  </p>
                  <img src={asimImg} className="modal-image" alt=""></img>
                </div>
              </div>
            )}
          </Col>
        </Row>
      </Container>
    </section>
  );
};
