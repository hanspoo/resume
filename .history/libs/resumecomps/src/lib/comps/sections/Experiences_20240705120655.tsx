import { Section } from '../utils/Section';
import { SectionSecondary } from '../utils/SectionSecondary';
import { Project } from './Project';
import { Tools } from './Tools';
import { Experience } from '@free-resume/models-types';

interface ExperiencesProps {
  experiences: Experience[];
}
export function Experiences({ experiences }: ExperiencesProps) {
  return (
    <Section title="Experience">
      <ul>
        {experiences.map((experience: Experience) => (
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
        <div className="mb-2">
          {experience.position}, {experience.location},{' '}
          {experience.since && (
            <span>
              {experience.since} &rarr; {experience.to}
            </span>
          )}
        </div>

        <div className="mb-2">{experience.description}</div>
        {experience.projects && experience.projects.length > 0 && (
          <h3 className="text-1xl font-bold mb-2">Projects</h3>
        )}
        {experience.projects?.map((p) => (
          <Project project={p} />
        ))}
        <Tools tools={experience.tools} />
      </>
    </SectionSecondary>
  );
}
