import { createSlice } from "@reduxjs/toolkit";
export const moreStateKeys = [
  {
    work: "work",
    friends_Family: "friends_Family",
    health: "health",
    other_activities: "other_activities",
    sleep: "sleep",
    fun: "fun",
  },
  {
    wake_up: "wake_up",
  },
  {
    distress: "distress",
  },
  {
    pain_level: "pain_level",
    pain_level_week: "pain_level_week",
  },
  {
    sleeping_deficulty: "sleeping_deficulty",
    sleeping_deficulty_week: "sleeping_deficulty_week",
  },
  {
    relationship: "relationship",
    relationship_week: "relationship_week",
  },
  {
    practical_life: "practical_life",
    practical_life_week: "practical_life_week",
  },
];
const initialState = {
  work: 0,
  friends_Family: 0,
  health: 0,
  other_activities: 0,
  sleep: 0,
  fun: 0,
  wake_up: 0,
  distress: 0,
  pain_level: 0,
  pain_level_week: 0,
  sleeping_deficulty: 0,
  sleeping_deficulty_week: 0,
  relationship: 0,
  relationship_week: 0,
  practical_life: 0,
  practical_life_week: 0,
  current_page: 0,
};

export const moreInfoSlice = createSlice({
  name: "moreInfo",
  initialState,
  reducers: {
    setMoreInfoState: (state, { payload }) => ({ ...state, ...payload }),
    setCurrentPage: (state, { payload }) => {
      state.current_page = payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setMoreInfoState, setCurrentPage } = moreInfoSlice.actions;

export default moreInfoSlice.reducer;
