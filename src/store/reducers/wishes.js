import { createSlice } from "@reduxjs/toolkit";

export const wishesStateKeys = [
  {
    think_large_decision: "think_large_decision",
    want_to_think_large_decision: "want_to_think_large_decision",
  },
  {
    general_feel: "general_feel",
    your_health: "your_health",
    health_decisions: "health_decisions",
  },
  {
    patient_experience: "patient_experience",
    being_hospitalized: "being_hospitalized",
    visit_experience: "visit_experience",
    life_quality: "life_quality",
  },
  {
    suffering_pain: "suffering_pain",
    moral_belief: "moral_belief",
    living_yourself: "living_yourself",
  },
  {
    goals_of_care: "goals_of_care",
  },
  {
    take_treatment: "take_treatment",
  },
];
const initialState = {
  think_large_decision: 0,
  want_to_think_large_decision: 0,
  general_feel: 0,
  your_health: 0,
  health_decisions: 0,
  patient_experience: 0,
  being_hospitalized: 0,
  visit_experience: 0,
  life_quality: 0,
  suffering_pain: 0,
  moral_belief: 0,
  living_yourself: 0,
  goals_of_care: 0,
  take_treatment: 0,
  current_page: 0,
  complex_situation: 0,
  captured: 0,
  wishes_for_medical: 0,
  preferances: 0,
};

export const wishesSlice = createSlice({
  name: "wishes",
  initialState,
  reducers: {
    resetWishes: () => initialState,
    setWishesState: (state, { payload }) => ({ ...state, ...payload }),
    setCurrentPage: (state, { payload }) => {
      state.current_page = payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setWishesState, setCurrentPage, resetWishes } =
  wishesSlice.actions;

export default wishesSlice.reducer;
