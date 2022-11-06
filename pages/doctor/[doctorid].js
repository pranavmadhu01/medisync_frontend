import { useRouter } from "next/router";
import Header from "../../components/Header";
import Patientcard from "../../components/Patientcard";
import Search from "../../components/Search";
import styles from "../../styles/Doctorid.module.css";
const doctorData = () => {
  const router = useRouter();
  console.log(router.query);
  const { doctorid } = router.query;
  return (
    <div className={styles.doctoridWrapper}>
      <Header />
      <div className={styles.doctoridInnerWrapper}>
        <Search />
        <div className={styles.doctoridPatientWrapper}>
          <div className={styles.dummy}></div>
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
