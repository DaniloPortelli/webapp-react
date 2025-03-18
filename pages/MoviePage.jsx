import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import ReviewCard from '../components/ReviewCard';

export default function MoviePage() {
    const { id } = useParams(); 

    const [movie, setMovie] = useState({});

    const fetchMovie = () => {

        fetch(`http://localhost:3000/movies/${id}`)
            .then(res => res.json())
            .then(setMovie)
            .catch((error) => {
                console.log(error);
            });
    };

    useEffect(fetchMovie, [id]);

    const renderReviews = () => {
        return movie.reviews?.map((review) => {
          return <ReviewCard key={review.id} review={review} />;
        });
      };

    return (
        <>
            <h1>{movie?.title}</h1>
            <section>
                {renderReviews()}
            </section>
        </>
    );
}