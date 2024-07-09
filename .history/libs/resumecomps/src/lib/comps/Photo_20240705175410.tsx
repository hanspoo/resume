import Image from 'next/image';
import defaultPerson from './defaultPerson.jpg';

interface PhotoProps {
  image: string;
}
export const Photo = ({image}: : PhotoProps) => {
  return (
    <div className="pt-6 content-center">
      <Image
        alt="Hans Poo"
        src={image}
        style={{ width: '150px' }}
        className="content-center"
      />
    </div>
  );
};

Photo.defaultProps = {
  image: defaultPerson,
};
