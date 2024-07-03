import styles from './form-info-curriculum.module.css';

/* eslint-disable-next-line */
export interface FormInfoCurriculumProps {}

export function FormInfoCurriculum(props: FormInfoCurriculumProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to FormInfoCurriculum!</h1>
    </div>
  );
}

export default FormInfoCurriculum;
