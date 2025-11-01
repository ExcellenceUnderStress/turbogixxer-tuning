import { FunctionComponent } from 'react';
import styles from './HeaderSection.module.css';

const HeaderSection = () => {
  return (
    <div className={styles.headerSection}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.headingAndSupportingText}>
            <div className={styles.headingAndSubheading}>
              <div className={styles.heading}>Services</div>
            </div>
            <div className={styles.supportingText} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderSection as FunctionComponent;
