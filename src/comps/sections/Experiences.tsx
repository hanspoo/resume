import { useSelector } from "react-redux";
import { RootState } from "../../redux/app/store";
import { Section } from "../utils/Section";
import { SectionSecondary } from "../utils/SectionSecondary";

export function Experiences() {
  const { resume } = useSelector((state: RootState) => state.counter);
  if (!resume) return <p>Resume not defined</p>;
  return (
    <Section title="Experience">
      <ul>
        {resume.experiences.map((experience) => (
          <Experience experience={experience} />
        ))}
      </ul>
    </Section>
  );
}

function Experience({ experience }: { experience: Experience }) {
  return (
    <SectionSecondary title={experience.company}>
      <>
        <div>{experience.position}</div>
        <div>{experience.location}</div>
        <div>{experience.description}</div>
        {experience.since && (
          <div className="mt-2">
            {experience.since} &rarr; {experience.to}
          </div>
        )}
      </>
    </SectionSecondary>
  );
}
