import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

export default function MovieCards({ movies }) {
    const { id } = useParams()
    return (
        <>
            {
                movies.map((m) => {
                    const { id, title, director, genre, release_year, abstract } = m || {};
                    return (
                        <div key={id}>
                            <h3>{title}</h3>
                            <p>Diretto da: {director}</p>
                            <p>Genere: {genre}</p>
                            <p>Data di uscita: {release_year}</p>
                            <p>Trama: {abstract}</p>
                        </div>
                    )


                })
            }


        </>
    )
}