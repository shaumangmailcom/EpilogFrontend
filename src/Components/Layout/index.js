import React from "react";
import AppHeader from "../../Components/Header";
import styles from "./style.module.scss";

const Layout = ({reutrnBtn,childern}) => {
  return (
    <div className={styles.layout}>
      <AppHeader back={reutrnBtn}  />
        <main>{childern}</main>
    </div>
  );
};

export default Layout;