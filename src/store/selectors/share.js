import { createDraftSafeSelector } from "@reduxjs/toolkit";

export const allStateSelector = (s) => s.share;
export const familyState = (s) => s.share.family;
export const friendsState = (s) => s.share.friends;
export const usualFeelingState = (s) => s.share.usual_feeling;
export const coWorkersState = (s) => s.share.co_workers;
export const feelPainState = (s) => s.share.feel_pain;
export const empathizeYourPainState = (s) => s.share.empathize_your_pain;
export const illnessState = (s) => s.share.illness;
export const illnessTreatmentState = (s) => s.share.illness_treatment;
export const goodTimeState = (s) => s.share.good_times_attention;
export const generalState = (s) => s.share.general_attention;

export const shareDoneSelector = createDraftSafeSelector(
  allStateSelector,
  ({ current_page, ...share }) =>
    Object.values(share).every((v) => (typeof v === "number" ? v !== 0 : null))
);
export const shareFirstThreeQAvgSelector = createDraftSafeSelector(
  [familyState, friendsState, coWorkersState],
  (family, freinds, co_workers) => (family + freinds + co_workers) / 3
);
// export const shareSecondThreeQAvgSelector = createDraftSafeSelector(
//   [feelPainState, empathizeYourPainState, illnessState],
//   (feel_pain, empathize_your_pain, illness) =>
//     (feel_pain + empathize_your_pain + illness) / 3
// );
export const shareSecondThreeQAvgSelector = createDraftSafeSelector(
  [feelPainState, illnessState, illnessTreatmentState],
  (feel_pain, illness, illness_treatment) =>
    (feel_pain + illness_treatment + illness) / 3
);
// export const shareTwoQAvgSelector = createDraftSafeSelector(
//   [illnessTreatmentState, goodTimeState],
//   (illness_treatment, good_times_attention) =>
//     (illness_treatment + good_times_attention) / 2
// );
export const shareTwoQAvgSelector = createDraftSafeSelector(
  [goodTimeState, generalState],
  (good_times_attention, general) => (good_times_attention + general) / 2
);
export const sumOfAllSelector = createDraftSafeSelector(
  [
    familyState,
    friendsState,
    coWorkersState,
    feelPainState,
    illnessState,
    illnessTreatmentState,
    goodTimeState,
    generalState,
    usualFeelingState,
  ],
  (...all) => ({ sum: all.reduce((a, b) => a + b, 0), length: all.length })
);
export const shareAvgTenSelector = createDraftSafeSelector(
  [sumOfAllSelector],
  ({ sum, length }) => sum / length
);
