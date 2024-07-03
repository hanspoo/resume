import styles from './form-career-summary.module.css';

/* eslint-disable-next-line */
export interface FormCareerSummaryProps {}

export function FormCareerSummary(props: FormCareerSummaryProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to FormCareerSummary!</h1>
    </div>
  );
}

export default FormCareerSummary;
