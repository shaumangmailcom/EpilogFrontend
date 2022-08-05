import { createDraftSafeSelector } from "@reduxjs/toolkit";

export const allStateSelector = (s) => s.basic;

export const basicDoneSelector = createDraftSafeSelector(
  allStateSelector,
  ({ current_page, ...basic }) => Object.values(basic).every((v) => v !== null)
);
