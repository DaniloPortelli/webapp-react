import MovieCard from "../components/MovieCard"
import { useState, useEffect } from "react"

export default function HomePage() {

    const [movies, setMovies] = useState([])

    const fetchMovies = () => { 

        fetch("http://localhost:3000/movies")
            .then(res => res.json())
            .then(setMovies)
          .catch((error) => {
            console.log(error);
          });
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