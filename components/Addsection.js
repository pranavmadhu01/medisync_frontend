import { useState } from "react";
export default function Addsection() {
  const [reason, setReason] = useState("");
  const [symptoms, setSymptoms] = useState("");
  const [issue, setIssue] = useState("");
  const [opinion, setOpinion] = useState("");
  async function popupHandleSubmit(e) {
    e.preventDefault();
    // fetch("")
  }
  return (
    <div className={styles.addsectionBackgroundMask}>
      <form
        className={styles.addsectionPopup}
        onSubmit={popupHandleSubmit}
      >
        <input
          type="text"
          placeholder="Reason"
          value={reason}
          onChange={(e) => setReason(e.target.value)}
        />
        <input
          type="text"
          placeholder="Symptoms"
          value={symptoms}
          onChange={(e) => setSymptoms(e.target.value)}
        />
        <input
          type="text"
          name=""
          id=""
          placeholder="identified issue"
          value={issue}
          onChange={(e) => setIssue(e.target.value)}
        />
        <input
          type="text"
          name=""
          id=""
          placeholder="opinion"
          value={opinion}
          onChange={(e) => setOpinion(e.target.value)}
        />
        <button type="submit">Sumbit</button>
      </form>
    </div>
  );
}
