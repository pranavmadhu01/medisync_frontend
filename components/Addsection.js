import { useState } from "react";
import styles from "../styles/AddSection.module.css"
import {AiOutlineCloseCircle} from "react-icons/ai"
export default function Addsection({setOpenForm}) {
  const [reason, setReason] = useState("");
  const [symptoms, setSymptoms] = useState("");
  const [issue, setIssue] = useState("");
  const [opinion, setOpinion] = useState("");
  async function popupHandleSubmit(e) {
    e.preventDefault();
    // fetch("")
  }
  console.log('hehe')
  return (

    <div className={styles.addsectionBackgroundMask}>
      <form
        className={styles.addsectionPopup}
        onSubmit={popupHandleSubmit}
      >
        <AiOutlineCloseCircle className={styles.close} 
        onClick={() => setOpenForm(false)}/>
        <input
          type="text"
          placeholder="Reason"
          value={reason}
          onChange={(e) => setReason(e.target.value)}
          className={styles.inp}
        />
        <input
          type="text"
          placeholder="Symptoms"
          value={symptoms}
          onChange={(e) => setSymptoms(e.target.value)}
          className={styles.inp}
        />
        <input
          type="text"
          name=""
          id=""
          placeholder="identified issue"
          value={issue}
          onChange={(e) => setIssue(e.target.value)}
          className={styles.inp}
        />
        <input
          type="text"
          name=""
          id=""
          placeholder="opinion"
          value={opinion}
          onChange={(e) => setOpinion(e.target.value)}
          className={styles.inp}
        />
        <button 
        type="submit"
        className={styles.submit}
        >Sumbit</button>
      </form>
    </div>
  );
}
