import Image from 'next/image';
import defaultPerson from './defaultPerson.jpg';

PhotoProps{
  image:string;
}
export const Photo = (image: string) => {
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
