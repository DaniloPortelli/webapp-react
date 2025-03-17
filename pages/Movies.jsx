import Header from "../components/Header"
import { useParams } from "react-router-dom"

export default function Movies() {
    const { id } = useParams()

    return (
        <>
            <h1>Movie n. {id}</h1>
        </>
    )
}