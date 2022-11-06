import Link from "next/link";
import { useState } from "react";
import { BsChevronDown } from "react-icons/bs";
import styles from "../styles/components/Patientcard.module.css";
const Patientcard = ({patient}) => {
  const [expandOpen, setExpandOpen] = useState(false);
  return (
    <div className={styles.patientcardWrapper}>
      <div
        className={styles.patientcardExpander}
        onClick={() => setExpandOpen(!expandOpen)}
      >
        <span>{patient.name}</span>
        <BsChevronDown />
      </div>
      <div
        className={
          expandOpen
            ? styles.patientcardExpandedActive
            : styles.patientcardExpanded
        }
      >
        <ul className={styles.patientcardUnordered}>
          <li>Name : {patient.name}</li>
          <li>Age : {patient.age}</li>
          <li>Sex : {patient.sex}</li>
          <li>Last visited : {patient.date}</li>
          <li>Reason for visit : {patient.reason}</li>
        </ul>
        <Link href="#" className={styles.profileButton}>
          View Full Profile
        </Link>
      </div>
    </div>
  );
};
export default Patientcard;
