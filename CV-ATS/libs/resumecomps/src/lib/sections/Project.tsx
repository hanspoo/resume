import { Tools } from './Tools';
import { Project } from '@cv-ats/models-types';

export function Project({
  project: { name, description, tools },
}: {
  project: Project;
}) {
  return (
    <div className="mb-2">
      <div>{name}</div>
      <div className="mb-1">{description}</div>
      <Tools tools={tools} />
    </div>
  );
}
