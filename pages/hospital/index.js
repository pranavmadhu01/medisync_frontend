import Patientcard from "../../components/Patientcard"
import { useState } from "react"
export const Hospital = () => {
    const [wating, setWaiting] = useState([])
        return(
        <>
        <section className="waiting-wrapper">
            <p>Waiting list...</p>
        </section>
        <section>
            <p>Previously visited</p>
        </section>
        </>
    )
}