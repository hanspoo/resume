import styles from './resumecomps.module.css';

/* eslint-disable-next-line */
export interface ResumecompsProps {}

export function Resumecomps(props: ResumecompsProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to Resumecomps!</h1>
    </div>
  );
}

export default Resumecomps;
