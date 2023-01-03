import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { stepRoutes } from "../store/reducers/doctor";
import {
  journey,
  latestTrySelector,
  routes,
  share,
  wishes,
} from "../store/selectors/route";

export const useNavigationValidator = () => {
  const { route, latest } = useSelector(latestTrySelector);
  const isLoaded = useSelector((s) => s.user.isLoaded);
  const navigation = useNavigate();
  const location = useLocation();
  useEffect(() => {
    if (isLoaded && (route === "/" || location.pathname !== route)) {
      let pathRoutes = routes[route];
      let journeyRoute = ["/terms","/privacy"];
      pathRoutes.push("/terms","/privacy")
      if (latest) {
        journeyRoute = journey;
        if (
          // !latest.doctor &&
          !latest.wishes &&
          !latest.share
        ) {
          journeyRoute = [
            ...journeyRoute,
            // ...stepRoutes,
            ...wishes,
            ...share,
          ];
        }
        // else if (!latest.wishes && !latest.share) {
        //   journeyRoute = [...journeyRoute, ...stepRoutes];
        // }
        else if (latest.share) journeyRoute = [...journeyRoute, ...share];
        else if (latest.wishes) {
          journeyRoute = [...journeyRoute, ...wishes];
        }
        if (route === "/journey") pathRoutes = journeyRoute;
      }
      if (route === "/feedback") {
        pathRoutes = [...journeyRoute, ...pathRoutes];
      }
      // console.log("yahan", pathRoutes, route);
      if (pathRoutes && !pathRoutes.includes(location.pathname)) {
        navigation(route);
      }
    }
  }, [route, location, isLoaded, navigation, latest]);
  return route;
};
