interface PhotoProps {
  url: string;
}
export function Photo({ url }: PhotoProps) {
  return (
    <div className="pt-6 content-center">
      <img src={url} style={{ width: '150px' }} className="content-center" />
    </div>
  );
}
