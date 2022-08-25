import { useSelector } from "react-redux";
import ReactLoading from "react-loading";
import styles from "./style.module.scss";
import { useNavigationValidator } from "../../hooks/navigation";
import ScrollToTop from "../Navigation/ScrollToTop";

export const withLoader = (WrappedComponent) => {
  const WithLoader = ({ ...rest }) => {
    const loading = useSelector((state) => state.common.loading);
    const route = useNavigationValidator();
    if (loading)
      return (
        <div className={styles.loader}>
          <ReactLoading type="bars" color="#4059ad" />
        </div>
      );
    return (
      <ScrollToTop>
        <WrappedComponent {...rest} route={route} />
      </ScrollToTop>
    );
  };
  WithLoader.displayName = "WithLoader";
  return WithLoader;
};
