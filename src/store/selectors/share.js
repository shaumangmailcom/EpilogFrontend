import { createDraftSafeSelector } from "@reduxjs/toolkit";

export const allStateSelector = (s) => s.share;

export const shareDoneSelector = createDraftSafeSelector(
  allStateSelector,
  ({ current_page, ...share }) =>
    Object.values(share).every((v) => (typeof v === "number" ? v !== 0 : null))
);
