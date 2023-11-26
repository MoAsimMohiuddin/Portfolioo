import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import arrow1 from "../assets/img/arrow1.svg";
import arrow2 from "../assets/img/arrow2.svg";
import colorSharp from "../assets/img/color-sharp.png"
import jsImg from '../assets/img/js.png';
import bootstrapImg from '../assets/img/bootstrap.png';
import dbmsImg from '../assets/img/dbms.png';
import dsaImg from '../assets/img/dsa.png';
import javaImg from '../assets/img/Java-Logo.png';
import mongodbImg from '../assets/img/mongodb.png';
import nodeImg from '../assets/img/node.png';
import reactImg from '../assets/img/react-.png';
import redisImg from '../assets/img/redis.png';
import pythonImg from '../assets/img/python.png';
import htmlImg from '../assets/img/html.png';
import cssImg from '../assets/img/css.png';

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>Skills</h2>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                        <div className="item">
                                <img src={jsImg} alt="" />
                                <h5>Javascript</h5>              
                            </div>
                            <div className="item">
                                <img src={reactImg} alt="" />
                                <h5>ReactJS</h5>              
                            </div>
                            <div className="item">
                                <img src={htmlImg} alt="" />
                                <h5>HTML</h5>              
                            </div>
                            <div className="item">
                                <img src={cssImg} alt="" />
                                <h5>CSS</h5>              
                            </div>
                            <div className="item">
                                <img src={nodeImg} alt="" />
                                <h5>Node.js</h5>              
                            </div>
                            <div className="item">
                                <img src={mongodbImg} alt="" />
                                <h5>MongoDB</h5>              
                            </div>
                            <div className="item">
                                <img src={bootstrapImg} alt="" />
                                <h5>Bootstrap</h5>              
                            </div>
                            <div className="item">
                                <img src={redisImg} alt="" />
                                <h5>Redis</h5>              
                            </div>
                            <div className="item">
                                <img src={javaImg} alt="" />
                                <h5>Java</h5>              
                            </div>
                            <div className="item">
                                <img src={pythonImg} alt="" />
                                <h5>Python</h5>              
                            </div>
                            <div className="item">
                                <img src={dsaImg} alt="" />
                                <h5>Data Structures and Algorithms</h5>              
                            </div>
                            <div className="item">
                                <img src={dbmsImg} alt="" />
                                <h5>DBMS</h5>              
                            </div>
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  )
}
