import { createDraftSafeSelector } from "@reduxjs/toolkit";

export const allStateSelector = (s) => s.wishes;

export const q1State = (s) => s.wishes.think_large_decision;
export const q2State = (s) => s.wishes.want_to_think_large_decision;
export const q6State = (s) => s.wishes.patient_experience;
export const q7State = (s) => s.wishes.being_hospitalized;
export const q8State = (s) => s.wishes.visit_experience;
export const q9State = (s) => s.wishes.life_quality;
export const q10State = (s) => s.wishes.suffering_pain;
export const q11State = (s) => s.wishes.moral_belief;
export const q12State = (s) => s.wishes.living_yourself;
export const q13State = (s) => s.wishes.goals_of_care;
export const q14State = (s) => s.wishes.take_treatment;
export const heartState = (s) => s.wishes.heart_stops;
export const heartByUserState = (s) => s.wishes.heart_stops_by_user;
export const mechanicalState = (s) => s.wishes.mechanical_ventilation;
export const mechanicalByUserState = (s) =>
  s.wishes.mechanical_ventilation_by_user;
export const courseState = (s) => s.wishes.course_of_illness;
export const courseByUserState = (s) => s.wishes.course_of_illness_by_user;
export const intravenousState = (s) => s.wishes.intravenous_feeding;
export const intravenousByUserState = (s) =>
  s.wishes.intravenous_feeding_by_user;

export const wishesDoneSelector = createDraftSafeSelector(
  allStateSelector,
  ({ current_page, ...wishes }) => Object.values(wishes).every((v) => v !== 0)
);

export const sumOfAllSelector = createDraftSafeSelector(
  [q6State, q7State, q8State, q9State, q10State, q11State, q12State],
  (...all) => ({ sum: all.reduce((a, b) => a + b, 0), length: all.length })
);

export const wishesAvgSelector = createDraftSafeSelector(
  [sumOfAllSelector],
  ({ sum, length }) => sum / length
);
