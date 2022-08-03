import React from "react";
import AppButton from "../Button";
import { Lable, Range } from "../SmallComponents";
import right from "../../Assets/images/right.svg";
import Form from "react-bootstrap/Form";
import styles from "./style.module.scss";
import { Col ,  Row} from "react-bootstrap";

export const StepCard = ({
  text,
  cardHeight,
  color,
  rightImg,
  textWidth = "100%",
  imgWidth,
}) => {
  return (
    <div className={styles.stepCard} style={{ height: cardHeight }}>
      <div style={{ width: textWidth }}>
        <p style={{ color }}>{text}</p>
      </div>
      <div style={{ width: imgWidth }}>
        <img src={rightImg} />
      </div>
    </div>
  );
};

export const SliderCard = ({ img, title, desc, options = [] }) => {
  return (
    <div className={styles.sliderCard}>
      {img && (
        <div className={styles.imgSec}>
          <img src={img} />
        </div>
      )}
      <p className={styles.title}>{title}</p>
      {desc && <p className={styles.desc}>{desc}</p>}
      {options.map((obj, ind) => (
        <Range className={styles.rgSlider} key={ind} {...obj} />
      ))}
    </div>
  );
};

export const CatgCard = ({ title, number, desc }) => {
  return (
    <div className={styles.catgCard}>
      <div className={styles.header}>
        <Lable lable={title} className={styles.head} />
        <p className={styles.lbl}>{number}</p>
      </div>
      <p className={styles.dtl}>{desc}</p>
    </div>
  );
};

export const CheckCard = ({ title, question, options = [] }) => {
  return (
    <div className={styles.checkCard}>
      <p className={styles.title}>{title}</p>
      {options.map((obj, ind) => (
        <CheckBox key={ind} {...obj} />
      ))}
      <div className={styles.descSec}>
        <p>
          If you think this form does not correctly reflect your preferences,
          feel free to change it.
        </p>
      </div>
    </div>
  );
};
export const CheckBox = ({ question }) => {
  return (
    <Form className="chkbx">
      <p className="qs">{question}</p>
      <Form.Check label="Yes" name="group1" />
      <Form.Check label="No" name="group1" />
    </Form>
  );
};

export const MatchCard = ({ img, desc, point, imgBg }) => {
  return (
    <Row className={styles.matchCard}>
      <Col xs={2} >
        <div className={styles.imgSec} style={{backgroundColor: imgBg}}>
          <img src={img} />
        </div>
      </Col>
      <Col xs={9}>
        <p className={styles.dtl}>
          {desc}
          <span> {point}</span>
        </p>
      </Col>
    </Row>
  );
};
