import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ContactInfo } from '@free-resume/models-types';

const initialState: ContactInfo = {
  name: '',
  certgree: '',
  resumeEmail: '',
  location: '',
  phone: '',
  birthDate: '',
  nationality: '',
  linkedin: '',
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
