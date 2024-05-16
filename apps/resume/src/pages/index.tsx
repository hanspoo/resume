import styles from './index.module.css';
import { resume } from '../../public/resume';
import { ContainerSeccions } from '@cv-ats/resumecomps';
export function Index() {
  /*
   * Replace the elements below with your own.
   *
   * Note: The corresponding styles are in the ./index.css file.
   */
  return (
    <div className={styles.page}>
      <ContainerSeccions resume={resume}></ContainerSeccions>
    </div>
  );
}

export default Index;
