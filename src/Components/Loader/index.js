import { useSelector } from "react-redux";
import ReactLoading from "react-loading";
import styles from "./style.module.scss";
import { useNavigationValidator } from "../../hooks/navigation";

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
    return <WrappedComponent {...rest} route={route} />;
  };
  WithLoader.displayName = "WithLoader";
  return WithLoader;
};
