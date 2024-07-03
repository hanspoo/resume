import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Resume, CntactInfo } from '@free-resume/models-types';

const initialState: Resume = {
  name: '',
  grade: '',
  email: '',
  address: '',
  phone: '',
  birthDate: '',
  nationality: '',
  linkedin: '',
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
  },
});

export const { updateResume } = resumeSlice.actions;
export default resumeSlice.reducer;
