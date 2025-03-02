import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.svg";
import { useForm, ValidationError } from "@formspree/react";
import useAnalyticsEventTracker from './useAnalyticsEventTracker'; // Google Analytics
import "animate.css";

export const Contact = () => {
  const gaEventTracker = useAnalyticsEventTracker('Contact us');
  const formInitialDetails = {
    message: "",
  };
  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [buttonText, setButtonText] = useState("Send");

  const onFormUpdate = (category, value) => {
    setFormDetails({
      ...formDetails,
      [category]: value,
    });
  };

  const [state, handleSubmit] = useForm("xknlljrv");
  if (state.succeeded) {
    return (
      <div className="feedback-msg">
        <h1>Thanks❤️</h1>
      </div>
    );
  }

  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={6}>
            <img src={contactImg} />
          </Col>
          <Col size={12} md={6}>
            <div>
              <h2>Get In Touch</h2>
              <form onSubmit={handleSubmit}>
                <Row>
                  <Col size={12} className="px-1">
                    <textarea
                      id="message"
                      name="message"
                      rows="6"
                      value={formDetails.message}
                      placeholder="Send me a Message (it's anonymous, istg)"
                      onChange={(e) => onFormUpdate("message", e.target.value)}
                    ></textarea>
                    <ValidationError
                      prefix="Message"
                      field="message"
                      errors={state.errors}
                    />
                    <button type="submit"  onClick={()=>gaEventTracker('call')} disabled={state.submitting}>
                      <span>{buttonText}</span>
                    </button>
                  </Col>
                </Row>
              </form>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
