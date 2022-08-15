import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { latestTrySelector, routes } from "../store/selectors/route";

export const useNavigationValidator = () => {
  const route = useSelector(latestTrySelector);
  const isLoaded = useSelector((s) => s.user.isLoaded);
  const navigation = useNavigate();
  const location = useLocation();
  useEffect(() => {
    if (isLoaded && (route === "/" || location.pathname !== route)) {
      // console.log("yahan");
      let pathRoutes = routes[route];
      if (pathRoutes && !pathRoutes.includes(location.pathname)) {
        navigation(route);
      }
    }
  }, [route, location, isLoaded, navigation]);
  console.log("yahan", route);
  return route;
};
