'use client';
import { store } from '@free-resume/redux-store';
import { TheResume } from '@free-resume/resumecomps';
import { FormContainer } from 'form-info-curriculum';
import React from 'react';

import { Provider } from 'react-redux';

export default function Index() {
  return (
    <React.StrictMode>
      <Provider store={store}>
        <FormContainer />;
      </Provider>
    </React.StrictMode>
  );
}
