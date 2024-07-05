'use client';
import { Body } from './comps/Body';
import { Header } from './comps/Header';

export function TheResume() {
  return (
    <div className="bg-white p-4 m-4 text-blue-950 border-2 max-w-screen-lg">
      <Header />
      <Body />
      <footer className="mt-8 text-sm bg-slate-100 p-2">
        <span className="mr-1">This resume is a github project:</span>
        <a
          href="https://github.com/hanspoo/resume"
          className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
        >
          https://github.com/hanspoo/resume
        </a>{' '}
      </footer>
    </div>
  );
}
