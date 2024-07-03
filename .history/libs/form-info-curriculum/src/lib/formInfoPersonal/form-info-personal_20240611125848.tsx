// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface FormInfoPersonalProps {}

export function FormInfoPersonal(props: FormInfoPersonalProps) {
  return (
    <div className={styles['container']}>
      <ResumeForm />
    </div>
  );
}

export default FormInfoPersonal;
