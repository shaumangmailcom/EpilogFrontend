import classNames from "classnames";
import React from "react";
import AppHeader from "../../Components/Header";
import styles from "./style.module.scss";

const Layout = ({
  reutrnBtn,
  children,
  header = true,
}) => {
  return (
    <div className={styles.layout}>
      {header && <AppHeader back={reutrnBtn} />}
      <main className={styles.main}>
        {children}
      </main>
    </div>
  );
};

export default Layout;
