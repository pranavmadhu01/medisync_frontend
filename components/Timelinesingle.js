import React from "react";
import styles from "../styles/Timeline.module.css";

function Timelinesingle({ name, docname, hosname }) {
  return (
    <div className={styles.timelineSingleWrapper}>
      <div className={styles.timelineSingleStick}></div>
      <div className={styles.timelineSingleContent}>
        <span>{name}</span>
        <span>{docname}</span>
        <span>{hosname}</span>
      </div>
    </div>
  );
}

export default Timelinesingle;
