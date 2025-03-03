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
    "A Software Engineer",
    "Trying to navigate my way through this world",
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
        <Row className="align-items-center">
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
                An engineer, a befuddled soul, constantly trying to make sense of the world, and myself. I often wonder what happiness truly means to me. I picture it in the form of overflowing bank accounts, the perfect career, an enviable physique. But then I pause and ask myself—if I had all of it, would I really feel at peace? Would my mind finally be still? The thought lingers, unsettling yet familiar, and I find myself circling back to the same question: what is happiness, really?{" "}
              </p>

              <button className="more-btn" onClick={handleShowModal}>
                About me
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
                    <span className="modal-text">
                    Hey! I hope you liked my work. If you have a moment, I’d truly appreciate it if you could leave a message at the end of the page. A few words of appreciation would mean the world to me. <br /> <br />
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
