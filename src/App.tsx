import { Header } from "./comps/Header";
import { Body } from "./comps/Body";
import { resume } from "./resume";

function App() {
  console.log(JSON.stringify(resume));
  return (
    <div className="container mx-auto py-16">
      <Header />
      <Body />
      <footer className="mt-8 text-sm bg-slate-100 p-2">
        <span className="mr-1">This resume is a github project:</span>
        <a
          href="https://github.com/hanspoo/resume"
          className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
        >
          https://github.com/hanspoo/resume
        </a>
      </footer>
    </div>
  );
}

export default App;
