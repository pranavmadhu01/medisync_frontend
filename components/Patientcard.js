import Link from "next/link";
import { useState } from "react";
import { BsChevronDown } from "react-icons/bs";
import styles from "../styles/components/Patientcard.module.css";
const Patientcard = () => {
  const [expandOpen, setExpandOpen] = useState(false);
  return (
    <div className={styles.patientcardWrapper}>
      <div
        className={styles.patientcardExpander}
        onClick={() => setExpandOpen(!expandOpen)}
      >
        <span>Noah Johny</span>
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
          <li>Name : Noah Johny</li>
          <li>Age : 20</li>
          <li>Sex : Male</li>
          <li>Last visited : 06-11-2022</li>
          <li>Reason for visit : Pain in lower abdomen</li>
        </ul>
        <Link href="#" className={styles.profileButton}>
          View Full Profile
        </Link>
      </div>
    </div>
  );
};
export default Patientcard;
