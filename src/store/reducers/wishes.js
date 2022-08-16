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
const recommendation = {
  heart_stops: "No",
  heart_stops_by_user: null,
  mechanical_ventilation: "No",
  mechanical_ventilation_by_user: null,
  course_of_illness: "No",
  course_of_illness_by_user: null,
  intravenous_feeding: "No",
  intravenous_feeding_by_user: null,
};
const initialState = {
  think_large_decision: 0,
  want_to_think_large_decision: 0,
  general_feel: 0,
  your_health: 0,
  health_decisions: 0,
  // for average
  patient_experience: 0,
  being_hospitalized: 0,
  visit_experience: 0,
  life_quality: 0,
  suffering_pain: 0,
  moral_belief: 0,
  living_yourself: 0,
  // for average end
  goals_of_care: null,
  take_treatment: null,
  current_page: 0,

  //  wishes complex questions
  operational_system: null,
  complex_medical_situations: 0,
  correct_medical_care: 0,
  want_and_change_the_way: 0,
  true_preferences: 0,
  //  wishes complex questions end
  // for recommendation
  ...recommendation,
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
    setRecommendation: (state, { payload }) => {
      return {
        ...state,
        heart_stops: payload,
        heart_stops_by_user: null,
        mechanical_ventilation: payload,
        mechanical_ventilation_by_user: null,
        course_of_illness: payload,
        course_of_illness_by_user: null,
        intravenous_feeding: payload,
        intravenous_feeding_by_user: null,
      };
    },
  },
});

// Action creators are generated for each case reducer function
export const { setWishesState, setCurrentPage, resetWishes,setRecommendation } =
  wishesSlice.actions;

export default wishesSlice.reducer;
