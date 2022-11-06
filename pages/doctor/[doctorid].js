import { useRouter } from "next/router";
import Patientcard from "../../components/Patientcard";
import styles from "../../styles/Doctorid.module.css";
const doctorData = () => {
  const router = useRouter();
  console.log(router.query);
  const { doctorid } = router.query;
  return (
    <div className={styles.doctoridWrapper}>
      <div className={styles.doctoridInnerWrapper}>
        <div className={styles.doctoridPatientWrapper}>
          <Patientcard />
          <Patientcard />
          <Patientcard />
          <Patientcard />
          <Patientcard />
          <Patientcard />
          <Patientcard />
          <Patientcard />
          <Patientcard />
          <Patientcard />
          <Patientcard />
          <Patientcard />
          <Patientcard />
          <Patientcard />
          <Patientcard />
          <Patientcard />
          <Patientcard />
          <Patientcard />
          <Patientcard />
          <Patientcard />
        </div>
        <div className={styles.gradientMask}></div>
      </div>
    </div>
  );
};
export default doctorData;
