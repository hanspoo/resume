import { useSelector } from "react-redux";
import { RootState } from "../redux/app/store";

export function Header() {
  const { resume } = useSelector((state: RootState) => state.counter);
  if (!resume) return <p>No resume available</p>;
  const {
    name,
    grade,
    email,
    address,
    phone,
    linkedin,
    birthDate,
    nationality,
  } = resume;

  return (
    <div className="grid grid-cols-2 gap-2 mb-8 mt-8">
      <div>
        <h1 className="text-3xl font-bold mb-6 uppercase">{name}</h1>
        <div className="text-1xl font-bold uppercase">{grade}</div>
      </div>

      <div className="text-right text-xs text-slate-400">
        <div>{email}</div>
        <div>{address}</div>
        <div>{phone}</div>
        <div>
          {birthDate} - {nationality}
        </div>
        <div>{linkedin}</div>
      </div>
    </div>
  );
}
