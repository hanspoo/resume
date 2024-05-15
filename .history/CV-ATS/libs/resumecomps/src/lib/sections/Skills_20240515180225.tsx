import { useSelector } from 'react-redux';
import { RootState } from '../../redux/app/store';
import { SectionSecondary } from '../utils/SectionSecondary';
import { Skill } from '@cv-ats/models-types';

export function Skills() {
  const { resume } = useSelector((state: RootState) => state.counter);
  if (!resume) return <p>Resume not defined</p>;
  return (
    <SectionSecondary title="Skills">
      <div className="grid grid-cols-2 gap-2">
        {resume.skills.map((skill: Skill) => (
          <Skill skill={skill} />
        ))}
      </div>
    </SectionSecondary>
  );
}

function Skill({ skill }: { skill: Skill }) {
  return (
    <>
      <div>{skill.skill}</div> <div className="text-right">{skill.level}</div>
    </>
  );
}
