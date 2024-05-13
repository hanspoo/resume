import { Header } from "./comps/Header";
import { Body } from "./comps/Body";
import { resume } from "./resume";

function App() {
  console.log(JSON.stringify(resume));
  return (
    <div className="container mx-auto py-16">
      <Header />
      <Body />
    </div>
  );
}

export default App;
