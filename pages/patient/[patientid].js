import { useRouter } from "next/router";
import styles from "../../styles/Patientid.module.css";
const patientData = () => {
  const router = useRouter();
  console.log(router.query);
  const { patientid } = router.query;
  return (
    <div className={styles.patientWrapper}>
      <div className={styles.patientSecondaryHeader}>
        <nav className={styles.patientSecondaryHeaderNavbar}>
          <button>Back</button>
          <button>Add section</button>
        </nav>
      </div>
      <div className={styles.patientInnerDataWrapper}>
        <div className={styles.patientPagePatientCardWrapper}></div>
        <div className={styles.patientPagePatientTimelineWrapper}></div>
        <div className={styles.patientPagePatientCalenderWrapper}></div>
      </div>
    </div>
  );
};
export default patientData;
