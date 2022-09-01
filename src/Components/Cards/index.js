import React, { useCallback } from "react";
import { Lable, Range, UserCard } from "../SmallComponents";
import Form from "react-bootstrap/Form";
import styles from "./style.module.scss";
import { Col, Row } from "react-bootstrap";
import classNames from "classnames";

export const StepCard = ({
  text,
  cardHeight,
  color,
  rightImg,
  textWidth = "100%",
  imgWidth,
  onClick,
  active,
  className,
}) => {
  return (
    <div
      className={classNames(
        styles.stepCard,
        active ? styles.active : "",
        className
      )}
      onClick={onClick}
      style={{ height: cardHeight }}
    >
      <div style={{ width: textWidth }}>
        <p style={{ color }}>{text}</p>
      </div>
      <div style={{ width: imgWidth }}>
        <img alt="" src={rightImg} />
      </div>
    </div>
  );
};

export const SliderCard = ({
  img,
  title,
  desc,
  options = [],
  onChange,
  data = {},
}) => {
  const changeItem = useCallback(
    (id, value) => {
      onChange?.({ [id]: value });
    },
    [onChange]
  );
  return (
    <div className={styles.sliderCard}>
      {img && (
        <div className={styles.imgSec}>
          <img alt="" src={img} />
        </div>
      )}
      <p className={styles.title}>{title}</p>
      {desc && <p className={styles.desc}>{desc}</p>}
      {options.map((obj, ind) => {
        let value = data[obj.id] || 0;
        if (obj.validateKey && data[obj.validateKey] < 1) return null;
        return (
          <Range
            onChange={changeItem}
            value={value}
            className={styles.rgSlider}
            key={ind}
            {...obj}
          />
        );
      })}
    </div>
  );
};

export const CatgCard = ({ title, number, desc, dMsg = [], pMsg = [] }) => {
  let descs = [];
  if (typeof desc === "string") descs.push(desc);
  if (Array.isArray(desc)) descs = [...desc];
  return (
    <div className={styles.catgCard}>
      <div className={styles.header}>
        <Lable lable={title} className={styles.head} />
        <p className={styles.lbl}>{number}</p>
      </div>
      {descs.map((text, ind) => (
        <p className={styles.dtl}>{text}</p>
      ))}
      {dMsg.map((dMsg, ind) => (
        <div className={classNames(styles.chat, styles.dTriangle, "bgLight")}>
          <p className={classNames(styles.title, "primaryDark")}>Doctor</p>
          <p className={styles.msg}>{dMsg}</p>
        </div>
      ))}
      {pMsg.map((pMsg, ind) => (
        <div className={classNames(styles.chat, styles.pTriangle, "bgPrimary")}>
          <p className={classNames(styles.title, "primaryLight")}>You</p>
          <p className={styles.msg}>{pMsg}</p>
        </div>
      ))}
    </div>
  );
};

export const CheckCard = ({ title, question, options = [], onClick }) => {
  return (
    <div className={styles.checkCard}>
      <p className={styles.title}>{title}</p>
      {options.map((obj, ind) => (
        <CheckBox key={ind} {...obj} onClick={onClick} />
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
export const CheckBox = ({ question, id, value, onClick }) => {
  return (
    <div className="chkbx">
      <p className="qs">{question}</p>
      <div
        className={classNames(
          styles.parent_check,
          value === "Yes" ? styles.active : ""
        )}
        onClick={() => {
          onClick?.(id, "Yes");
        }}
      >
        <Form.Check
          label="Yes"
          name="group1"
          className={styles.form_check_new}
          // style={{ margin: 0 }}
          checked={value === "Yes"}
          onChange={(e) => console.log(e.target.checked)}
        />
      </div>
      <div
        className={classNames(
          styles.parent_check,
          value === "No" ? styles.active : ""
        )}
        onClick={() => {
          onClick?.(id, "No");
        }}
      >
        <Form.Check
          onChange={(e) => console.log(e.target.checked)}
          label="No"
          name="group1"
          className={styles.form_check_new}
          // style={{ margin: 0 }}
          checked={value === "No"}
        />
      </div>
    </div>
  );
};

export const MatchCard = ({ img, desc, point, imgBg }) => {
  return (
    <Row className={styles.matchCard}>
      <Col xs={2} md={2}>
        <div className={styles.imgSec} style={{ backgroundColor: imgBg }}>
          <img alt="" src={img} />
        </div>
      </Col>
      <Col xs={9} md={10}>
        <p className={styles.dtl}>
          {desc}
          <span> {point}</span>
        </p>
      </Col>
    </Row>
  );
};

export const JourneyCard = ({ src, title, onClick }) => {
  return (
    <div className={styles.jcrd} onClick={onClick}>
      <p className={styles.title}>{title}</p>
      <img alt="" src={src} />
    </div>
  );
};
export const TextSec = ({ text, margin, textAlign, checkLabel }) => {
  return (
    <div className={classNames(styles.textSec, 'textSec')} style={{ margin: margin, textAlign }}>
      {checkLabel && (
        <Form.Check
          label={checkLabel}
          name="group1"
          className="checkLabel"
        />
      )}
      {text && <p>{text}</p>}
    </div>
  );
};
export const ReviewCard = ({ title, img, options = [], profBg, margin }) => {
  return (
    <div className={styles.reviewCard} style={{ margin }}>
      <UserCard title={title} img={img} profBg={profBg} border="none" padding="0 0 16px" fontFamily="heebo700" />
      {options.map((text, ind) => (
        <TextSec margin="8px 0 0" key={ind} text={text} />
      ))}
    </div>
  );
};
