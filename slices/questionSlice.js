import { createSlice } from "@reduxjs/toolkit";

//initial state - all the checkbox options that we give to the user. One state for each option
/**
 * Q1: What is/are your preferred programming languages
 *   a. Python b. Java c. JavaScript d. C/C++
 *
 * Q2. Where would you apply for a job?
 *   a. Facebook b. Apple c. Netflix d. Google
 */
const initialState = {
  languageOptionPython: false,
  languageOptionJava: false,
  languageOptionJavascript: false,
  languageOptionC: false,
  companyOptionFacebook: false,
  companyOptionApple: false,
  companyOptionNetflix: false,
  companyOptionGoogle: false,
};

// create data slice
export const questionSlice = createSlice({
  name: "questionData",
  initialState,
  reducers: {
    setLanguageOptionPython: (state, action) => {
      state.languageOptionPython = action.payload;
    },
    setLanguageOptionJava: (state, action) => {
      state.languageOptionJava = action.payload;
    },
    setLanguageOptionJavascript: (state, action) => {
      state.languageOptionJavascript = action.payload;
    },
    setLanguageOptionC: (state, action) => {
      state.languageOptionC = action.payload;
    },
    setCompanyOptionFacebook: (state, action) => {
      state.companyOptionFacebook = action.payload;
    },
    setCompanyOptionApple: (state, action) => {
      state.companyOptionApple = action.payload;
    },
    setCompanyOptionNetflix: (state, action) => {
      state.companyOptionNetflix = action.payload;
    },
    setCompanyOptionGoogle: (state, action) => {
      state.companyOptionGoogle = action.payload;
    },
  },
});

// export reducers
export const {
  setLanguageOptionPython,
  setLanguageOptionJava,
  setLanguageOptionJavascript,
  setLanguageOptionC,
  setCompanyOptionFacebook,
  setCompanyOptionApple,
  setCompanyOptionNetflix,
  setCompanyOptionGoogle,
} = questionSlice.actions;

// create and export selectors
export const selectLanguageOptionPython = (state) =>
  state.questionData.languageOptionPython;

export const selectLanguageOptionJava = (state) =>
  state.questionData.languageOptionJava;

export const selectLanguageOptionJavascript = (state) =>
  state.questionData.languageOptionJavascript;

export const selectLanguageOptionC = (state) =>
  state.questionData.languageOptionC;

export const selectCompanyOptionFacebook = (state) =>
  state.questionData.companyOptionFacebook;

export const selectCompanyOptionApple = (state) =>
  state.questionData.companyOptionApple;

export const selectCompanyOptionNetflix = (state) =>
  state.questionData.companyOptionNetflix;

export const selectCompanyOptionGoogle = (state) =>
  state.questionData.companyOptionGoogle;

export default questionSlice.reducer;
