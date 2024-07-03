'use client';
import { store } from '@free-resume/redux-store';
import { TheResume } from '@free-resume/resumecomps';
import React from 'react';

import { Provider } from 'react-redux';

export default function Index() {
  return (
    <React.StrictMode>
      <Provider store={store}>
        <TheResume />
      </Provider>
    </React.StrictMode>
  );
}
