import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import { Row, Col } from "react-bootstrap";
import AppHeader from "../../Components/Header";
import styles from "./style.module.scss";
import AppButton from "../../Components/Button";
import right from "../../Assets/images/right.svg"

const data = [
  {
    title: "Welcome to Epilog",
    desc: "This system is a journey companion for people who are dealing with complex medical diagnosis, and their families. This system will try to help you make better decisions dealing with illness, reduce the level of stress, and improve the quality of your life.",
  },
  {
    title: "Illness is part of the human condition",
    desc: "And, with the progress of medical science and knowledge, we live longer.",
  },
  {
    title: "We are here to help",
    desc: "Unfortunately, being ill comes with diminished quality of life. The good news is that there are ways to make things much better.",
  },
  {
    title: "We want to know you better",
    desc: "In our joint journey we will suggest some steps that we believe will make you better-off. It is not going to be quick, but everything we know suggests that it will be worth the effort.",
  },
  {
    title: "Focus on well-being",
    desc: "In most cases, being ill focuses people and their families on the illness to such an extent that there is no room for other important matters. We are here to help you gain control of the situation, and reduce the stress caused by the storm.",
  },
  {
    title: "Cumulative experience",
    desc: "While each human being has very little experience dealing with the complexities you are dealing right now, our cumulative experience is vast. And taking all that we know together in to account, can be very helpful in making every one of your days better.",
  },
  {
    title: "Individual experience",
    desc: "At Epilog we have been studying in depth the many ways that people cope with illness, and the circumstances around it. Some of these approaches are better, some are not so good, some fit some people and some fit others.",
  },
];
const Home = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    
    <div className={styles.home}>
      {/* <AppHeader /> */}
      <div className={styles.banner} />
      <Row className={styles.row}>
        <Col xs={6} className={styles.grid}>
          {data.length > 0 && (
            <Carousel activeIndex={index} onSelect={handleSelect} interval='1500' pause="hover" >
              {data.map((item) => (
                <Carousel.Item>
                  <div className={styles.slidContent}>
                    <p className="title">{item.title}</p>
                    <p className="desc">{item.desc}</p>
                  </div>
                </Carousel.Item>
              ))}
            </Carousel>
          )}
          <Row className={styles.btnRow}>
            <AppButton hrefLink="/information" title="Let’s Start" src={right} minWidth="118px" />
          </Row>
        </Col>
      </Row>
    </div>
    
  );
};

export default Home;
