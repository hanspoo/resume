import { useSelector } from "react-redux";
import { RootState } from "../../redux/app/store";
import { SectionSecondary } from "../utils/SectionSecondary";

export function Idioms() {
  const { resume } = useSelector((state: RootState) => state.counter);
  if (!resume) return <p>Resume not defined</p>;
  return (
    <SectionSecondary title="Idioms">
      <ul>
        {resume.idioms.map((idiom) => (
          <Idiom idiom={idiom} />
        ))}
      </ul>
    </SectionSecondary>
  );
}

function Idiom({ idiom }: { idiom: Idiom }) {
  return (
    <div>
      <div>
        {idiom.language}, {idiom.level}
      </div>
      <div>{idiom.studies}</div>
    </div>
  );
}
