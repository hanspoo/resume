'use client';
import { store } from '@cv-ats/redux-store';
import { TheResume } from '@cv-ats/resumecomps';
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
