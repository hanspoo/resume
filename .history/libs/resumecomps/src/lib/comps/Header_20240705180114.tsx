import { ContactInfo } from '@free-resume/models-types';
import { useSelector } from 'react-redux';

interface HeaderProps {
  contactInfo: ContactInfo;
}

export function Header({ contactInfo }: HeaderProps) {
  if (!contactInfo) return <p>No resume available</p>;
  const {
    name,
    certgree,
    resumeEmail,
    location,
    phone,
    linkedin,
    birthDate,
    nationality,
  } = contactInfo;

  return (
    <div className="grid grid-cols-2 gap-2 mb-8 mt-8">
      <div>
        <h1 className="text-3xl font-bold mb-6 uppercase">{name}</h1>
        <div className="text-1xl font-bold uppercase">{certgree}</div>
      </div>

      <div className="text-right text-xs text-slate-400">
        <div>{resumeEmail}</div>
        <div>{location}</div>
        <div>{phone}</div>
        <div>
          {birthDate} - {nationality}
        </div>
        <div>{linkedin}</div>
      </div>
    </div>
  );
}
