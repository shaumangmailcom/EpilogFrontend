import { createDraftSafeSelector } from "@reduxjs/toolkit";

export const allStateSelector = (s) => s.wishes;

export const wishesDoneSelector = createDraftSafeSelector(
  allStateSelector,
  ({ current_page, ...wishes }) => Object.values(wishes).every((v) => v !== 0)
);
