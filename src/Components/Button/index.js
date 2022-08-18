import classNames from "classnames";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "./style.module.scss";

const AppButton = ({
  height,
  width,
  boxMargin="0px 0px 0px auto",
  minWidth,
  padding,
  backgroundColor,
  color,
  borderRadius,
  fontSize,
  title,
  src = null,
  imgWidth,
  margin,
  onClick,
  className,
  hrefLink,
  imgMargin,
}) => {
  const navigate = useNavigate();
  return (
    <div className={styles.buttonBox}>
      <div
        className={styles.buttonHref}
        style={{margin:boxMargin}}
        onClick={() => {
          hrefLink && navigate(hrefLink);
        }}
      >
        <div
          onClick={onClick}
          style={{
            height,
            width,
            backgroundColor,
            borderRadius,
            margin,
            padding,
            color,
            fontSize,
            minWidth,
          }}
          className={classNames(styles.icon_bttn, className)}
        >
          <p style={{ color, fontSize }} className={styles.icon_bttn_p}>
            {title}
          </p>
          {src && (
            <img style={{ margin: imgMargin, width: imgWidth }} src={src} />
          )}
        </div>
      </div>
    </div>
  );
};

export default AppButton;
