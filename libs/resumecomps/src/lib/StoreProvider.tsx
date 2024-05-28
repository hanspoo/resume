'use client';
import { AppStore, makeStore } from '@free-resume/redux-store';
import { useRef } from 'react';
import { Provider } from 'react-redux';

export function StoreProvider({ children }: { children: React.ReactNode }) {
  const storeRef = useRef<AppStore>();
  if (!storeRef.current) {
    // Create the store instance the first time this renders
    storeRef.current = makeStore();
  }

  return <Provider store={storeRef.current}>{children}</Provider>;
}
