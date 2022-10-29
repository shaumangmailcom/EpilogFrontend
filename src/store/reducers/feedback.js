import { createSlice } from "@reduxjs/toolkit";

export const feedbackStateKeys = [
  {
    using_to_others: "using_to_others",
    use_our_system: "use_our_system",
    modest_fee: "modest_fee",
  },
  {
    dealing_with_fear: "dealing_with_fear",
    decreasing_fear: "decreasing_fear",
    human_limits: "human_limits",
    purpose_meaning: "purpose_meaning",
    care_goals: "care_goals",
    medical_care: "medical_care",
    important_relationships: "important_relationships",
    new_skill: "new_skill",
    medical_information: "medical_information",
    leaving_legacy: "leaving_legacy",
    personalized_will: "personalized_will",
    home_environment: "home_environment",
    eating_better: "eating_better",
    dealing_with_stress: "dealing_with_stress",
    my_finances: "my_finances",
    bucket_list: "bucket_list",
    best_distraction: "best_distraction",
    best_exercise: "best_exercise",
    my_pain: "my_pain",
    other_symptoms: "other_symptoms",
    hospital: "hospital",
    appointment: "appointment",
  },
  {
    // link_for_system: "link_for_system",
    care_physician: "care_physician",
    specialist_doctor: "specialist_doctor",
    health_plan: "health_plan",
    SNF: "SNF",
    family_member: "family_member",
    web_search: "web_search",
    email: "email",
  },
];
const initialState = {
  //page 0
  using_to_others: 0,
  use_our_system: 0,
  modest_fee: 0,

  //page 1
  dealing_with_fear: 0,
  decreasing_fear: 0,
  human_limits: 0,
  purpose_meaning: 0,
  care_goals: 0,
  medical_care: 0,
  important_relationships: 0,
  new_skill: 0,
  medical_information: 0,
  leaving_legacy: 0,
  personalized_will: 0,
  home_environment: 0,
  eating_better: 0,
  dealing_with_stress: 0,
  my_finances: 0,
  bucket_list: 0,
  best_distraction: 0,
  best_exercise: 0,
  my_pain: 0,
  other_symptoms: 0,
  hospital: 0,
  appointment: 0,

  //   page 2
  // link_for_system: "",
  care_physician: 0,
  specialist_doctor: 0,
  health_plan: 0,
  SNF: 0,
  family_member: 0,
  web_search: 0,
  email: "",
  completion_code: "",
  prolificId: "",
  ethnicity: "",
  current_page: 0,
  showModal2: false,
};

export const feedbackSlice = createSlice({
  name: "feedback",
  initialState,
  reducers: {
    resetFeedback: () => initialState,
    setFeedbackState: (state, { payload }) => ({ ...state, ...payload }),
    setCurrentPage: (state, { payload }) => {
      state.current_page = payload;
    },
    setShowModal2: (state, { payload }) => {
      state.showModal2 = payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  setFeedbackState,
  setCurrentPage,
  resetFeedback,
  setShowModal2,
} = feedbackSlice.actions;

export default feedbackSlice.reducer;
