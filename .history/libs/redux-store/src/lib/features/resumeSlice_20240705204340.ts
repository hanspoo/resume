import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {
  Resume,
  ContactInfo,
  Summary,
  Idiom,
  Experience,
} from '@free-resume/models-types';

const initialState: Resume = {
  contactInfo: {
    name: '',
    certgree: '',
    resumeEmail: '',
    location: '',
    phone: '',
    birthDate: '',
    nationality: '',
    linkedin: '',
  },
  summary: {
    pitch: '',
    highlights: [],
    competencies: [],
  },
  objective: '',
  skills: [],
  idioms: [],
  experiences: [],
  educations: [],
};

const resumeSlice = createSlice({
  name: 'resume',
  initialState,
  reducers: {
    updateResume: (state, action: PayloadAction<Resume>) => {
      return { ...state, ...action.payload };
    },
    updateContactInfo: (state, action: PayloadAction<ContactInfo>) => {
      return { ...state, contactInfo: { ...action.payload } };
    },

    updateCarrerSummary: (state, action: PayloadAction<Summary>) => {
      return { ...state, summary: { ...action.payload } };
    },
    updateCarrerIdioms: (state, action: PayloadAction<Idiom[]>) => {
      return { ...state, idioms: [...state.idioms, ...action.payload] };
    },
    updateCarrerExperience: (state, action: PayloadAction<Experience[]>) => {
      return {
        ...state,
        experiences: [...state.experiences, ...action.payload],
      };
    },
  },
});

export const { updateResume, updateContactInfo, updateCarrerSummary } =
  resumeSlice.actions;
export default resumeSlice.reducer;
