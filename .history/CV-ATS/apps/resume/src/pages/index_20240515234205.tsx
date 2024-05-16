import styles from './index.module.css';
import { resume } from '../../public/resume';
import { containerSeccions } from '@cv-ats/resumecomps';
export function Index() {
  /*
   * Replace the elements below with your own.
   *
   * Note: The corresponding styles are in the ./index.css file.
   */
  return (
    <div className={styles.page}>
      <containerSeccions></containerSeccions>
    </div>
  );
}

export default Index;
