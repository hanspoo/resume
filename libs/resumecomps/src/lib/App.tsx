import { Body } from './comps/Body';
import { Header } from './comps/Header';

export function TheResume() {
  return (
    <div
      id="pdf-content"
      className="container mx-auto py-10"
      style={{ width: '8.5in' }}
    >
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
