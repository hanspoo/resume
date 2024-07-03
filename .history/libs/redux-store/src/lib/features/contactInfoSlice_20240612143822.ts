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
    updateContactInfo: (state, action: PayloadAction<ContactInfo>) => {
      return { ...state, ...action.payload };
    },
  },
});

export const { updateContactInfo } = resumeSlice.actions;
export default resumeSlice.reducer;
