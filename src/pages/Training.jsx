// import { Box, Paper, Typography } from "@mui/material"
import NewTraining from "../components/NewTraining"
import Breadcrump from "../components/ui/Breadcrump"
import SearchBar from "../components/ui/SearchBar"
import TrainingCard from "../components/TrainingCard"
import { useEffect, useState } from "react"
import { get_all_training_details } from "../services/allAPI"

function Training() {
    const [trainings, setTrainings] = useState()

    useEffect(() => {
        const fetchData = async () => {
            const response = await get_all_training_details()
            if (199 < response.status < 300) {
                setTrainings(response.data)
            }
        }
        fetchData()
    }, [])
    return (
        <>
            {/* Breadcrump */}
            <Breadcrump current={["Dashboard", "Training"]} />

            {/* Training Heading */}
            <div className="d-flex align-items-center justify-content-between mt-5 ">
                <h2 style={{ letterSpacing: "5px" }}>Training</h2>
                <div className="d-flex  gap-2 w-50" >
                    <SearchBar place="Training ID" />
                </div>
                <div className="d-flex me-5">
                    <NewTraining />
                </div>
            </div>


            <div className="mt-5" style={{ display: "grid", gridTemplateColumns: "auto auto auto", gridGap: "1.5rem" }}>
                {
                    trainings?.map((training, key) => (
                        <TrainingCard key={key} training={training} />
                    ))
                }
            </div>
        </>
    )
}

export default Training