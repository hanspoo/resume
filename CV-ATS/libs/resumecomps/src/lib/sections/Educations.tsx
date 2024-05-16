import { Section } from '../utils/Section';
import { SectionSecondary } from '../utils/SectionSecondary';
import { Education } from '@cv-ats/models-types';

interface EducationProps {
  educations: Education[];
}
export function Educations({ educations }: EducationProps) {
  return (
    <Section title="Education">
      <ul>
        {educations.map((education: Education) => (
          <Education education={education} />
        ))}
      </ul>
    </Section>
  );
}

function Education({ education }: { education: Education }) {
  return (
    <SectionSecondary title={education.career}>
      <>
        <div>{education.institution}</div>
        <div>{education.location}</div>
        {education.since && (
          <div>
            {education.since} &rarr;{education.to}
          </div>
        )}
      </>
    </SectionSecondary>
  );
}
