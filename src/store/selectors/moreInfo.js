import { createDraftSafeSelector } from "@reduxjs/toolkit";

export const allStateSelector = (s) => s.more;

export const moreDoneSelector = createDraftSafeSelector(
  allStateSelector,
  ({ current_page, ...more }) => Object.values(more).every((v) => v !== 0)
);
