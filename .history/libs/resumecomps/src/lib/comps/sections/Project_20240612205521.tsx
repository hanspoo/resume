import { Tools } from './Tools';
import { Project as ProjectM } from '@free-resume/models-types';

export function Project({
  project: { name, description, tools },
}: {
  project: ProjectM;
}) {
  return (
    <div className="mb-2">
      <div>{name}</div>
      <div className="mb-1">{description}</div>
      <Tools tools={tools} />
    </div>
  );
}
