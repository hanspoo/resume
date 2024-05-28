import { StoreProvider } from '@free-resume/resumecomps';
import Link from 'next/link';
import React from 'react';

export default function Index() {
  return (
    <React.StrictMode>
      <StoreProvider>
        <div className="flex w-full items-center justify-center h-screen ">
          <Link href={`/resumes/1`}>
            <button className="p-4 shadow-md rounded-md px-20 m-4 hover:text-white text-blue-200 bg-blue-800">
              Ver el CV
            </button>
          </Link>
        </div>
      </StoreProvider>
    </React.StrictMode>
  );
}
