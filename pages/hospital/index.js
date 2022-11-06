import Patientcard from "../../components/Patientcard";
import { useEffect } from "react";
import { useState } from "react";
import Header from "../../components/Header";
import styles from "../../styles/Hospital.module.css";
const Hospital = () => {
  const [waiting, setWaiting] = useState([]);
  async function fetchSession() {
    await fetch("http://localhost:3000/api/patient")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        setWaiting(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  useEffect(() => {
    fetchSession();
  }, []);
  return (
    <>
      <Header />
      <main className={styles.body}>
        <section className="waiting-wrapper">
          <div className={styles.titleContainer}>
            <p className={styles.title}>Waiting list</p>
            <span className={styles.titleLine}></span>
          </div>
          {waiting.map((p) => (
            <Patientcard patient={p} />
          ))}
        </section>
        <section>
          <div className={styles.titleContainer}>
            <p className={styles.title}>Previously visited</p>
          </div>
        </section>
      </main>
    </>
  );
};

export default Hospital;
