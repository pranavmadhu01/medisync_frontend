import React from "react";
import Timelinesingle from "./Timelinesingle";
import styles from "../styles/Timeline.module.css";

function Timeline({ data }) {
  return (
    <div className={styles.timelineWrapper}>
      {data.map((data) => (
        <Timelinesingle
          date={data.name}
          docname={data.docname}
          hosname={data.hosname}
        />
      ))}
    </div>
  );
}

export default Timeline;
