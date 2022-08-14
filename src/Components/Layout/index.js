import classNames from "classnames";
import React from "react";
import AppHeader from "../../Components/Header";
import styles from "./style.module.scss";

const Layout = ({
  reutrnBtn,
  childern,
  header = true,
  style = {},
  className = "",
}) => {
  return (
    <div className={styles.layout}>
      {header && <AppHeader back={reutrnBtn} />}
      <main className={className} style={style}>
        {childern}
      </main>
    </div>
  );
};

export default Layout;
