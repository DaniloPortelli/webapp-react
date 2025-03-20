import MovieCard from "../components/MovieCard"
import { useState, useEffect, useContext } from "react"
import GlobalContext from '../contexts/globalContext';

export default function HomePage() {

  const [movies, setMovies] = useState([])

  const { setIsLoading } = useContext(GlobalContext)

  const fetchMovies = () => {

    setIsLoading(true)

    fetch("http://localhost:3000/movies")
      .then(res => res.json())
      .then(setMovies)
      .catch((error) => {
        console.log(error);
      })
      .then( () => setIsLoading(false) );
  };

  const renderMovies = () => {
    return movies.map((movie) => {
      return (
        <div key={movie.id}>
          <MovieCard movie={movie} />
        </div>
      );
    });
  };

  useEffect(fetchMovies, []);

  return (
    <>

      <div>
        {movies.map((movie) => {
          return (
            <div key={movie.id}>
              <MovieCard movie={movie} />
            </div>
          );
        })}
      </div>
    </>
  );
}