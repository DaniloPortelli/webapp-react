import { Link } from "react-router-dom";

export default function MovieCard({ movie }) {

    const { id, title, director, genre, release_year, abstract } = movie || {};

    return (
        <>
            <div key={id}>
                <h3>{title}</h3>
                <p>Diretto da: {director}</p>
                <p>Genere: {genre}</p>
                <p>Data di uscita: {release_year}</p>
                <p>Trama: {abstract}</p>
                <Link to={`movies/${id}`}>info</Link>
            </div>
        </>
    )
}