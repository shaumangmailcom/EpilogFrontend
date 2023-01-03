import { createSelector } from "@reduxjs/toolkit";

export const latestTryState = (s) => s.user.latestTry;

export const latestTrySelector = createSelector(latestTryState, (latest) => {
  let route = getRoute(latest);
  return { route, latest };
});
function getRoute(latest) {
  if (!latest) return "/";
  const { share, wishes, basicInfo, journey, moreInfo, doctor } = latest;
  const values = Object.values({
    share,
    wishes,
    basicInfo,
    journey,
    moreInfo,
    // doctor,
  });
  const isBasic = values.every((v) => !v);
  if (isBasic) return "/";
  // const isDone = !!doctor;
  // if (isDone) return "/done";
  // const isCompleted = !!doctor;
  // if (!isCompleted) return "/completed";
  const isLastModule = !!share || !!wishes;
  if (isLastModule) return "/feedback";
  const isJourney = !!moreInfo;
  if (isJourney) return "/journey";
  const isMore = !!basicInfo;
  if (isMore) return "/range";
}

const slash = ["/", "/home", "/basic", "/stepEnd"];
const range = [...slash, "/range", "/thankyou"];
export const share = [
  "/share-start",
  "/share",
  "/share-thank",
  "/share-end",
  "/shair-complex",
];
export const wishes = [
  "/wishes-start",
  "/wishes",
  "/wishes-end",
  "/complex-situation",
  "/wishes-person",
];

export const journey = [...range, "/journey","/terms","/privacy"];
export const feedback = ["/feedback"];
export const routes = {
  "/": slash,
  "/range": range,
  "/journey": journey,
  "/feedback": feedback,
};
