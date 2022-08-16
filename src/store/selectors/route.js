import {  createSelector } from "@reduxjs/toolkit";

export const latestTryState = (s) => s.user.latestTry;

export const latestTrySelector = createSelector(
  latestTryState,
  (latest) => {
    console.log( "one");
    if (!latest) return "/";
    const { share, wishes, basicInfo, journey, moreInfo } = latest;
    const values = Object.values({
      share,
      wishes,
      basicInfo,
      journey,
      moreInfo,
    });
    const isBasic = values.every((v) => !v);
    console.log( "two");
    if (isBasic) return "/";
    const isLastModule = !!share || !!wishes;
    console.log( "three");
    if (isLastModule) return "/feedback";
    const isJourney = !!moreInfo;
    console.log( "four");
    console.log(isJourney, "isBasic", values);
    if (isJourney) return "/journey";
    console.log( "five");
    const isMore = !!basicInfo;
    if (isMore) return "/range";
  }
);

const slash = ["/", "/basic", "/stepEnd"];
const range = [...slash, "/range", "thankyou"];
const share = [
  "/share-start",
  "/share",
  "/share-thank",
  "/share-end",
  "/shair-complex",
];
const wishes = [
  "/wishes-start",
  "/wishes",
  "/wishes-end",
  "/complex-situation",
  "/wishes-person",
];
const journey = [...range, "/journey", ...share, ...wishes];
const feedback = [...journey, "/feedback"];
export const routes = {
  "/": slash,
  "/range": range,
  "/journey": journey,
  "/feedback": feedback,
};
