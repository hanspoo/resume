import Image from 'next/image';
import photo from './defaultPerson.jpg';

export const Photo = (image: string) => {
  return (
    <div className="pt-6 content-center">
      <Image
        alt="Hans Poo"
        src={photo}
        style={{ width: '150px' }}
        className="content-center"
      />
    </div>
  );
};

Photo.defaultProps = {
  skills: photo,
};
