import { useRouter } from "next/router";
import styles from "../../styles/Patientid.module.css";
import Addsection from "../../components/Addsection";
import { useState } from "react";
const patientData = () => {
  const router = useRouter();
  console.log(router.query);
  const [openForm, setOpenForm] = useState(false)
  const { patientid } = router.query;
  return (
    <div className={styles.patientWrapper}>
      {openForm && <Addsection setOpenForm={setOpenForm}/>}
      <div className={styles.patientSecondaryHeader}>
        <nav className={styles.patientSecondaryHeaderNavbar}>
          <button>Back</button>
          <button onClick={() => {console.log('test');setOpenForm(true)}}>Add section</button>
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
