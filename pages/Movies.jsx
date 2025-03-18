import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"

import ReviewCard from '../components/ReviewCard';


export default function Movies({reviews}) {
    const { id } = useParams()

    const [movie, setMovie] = useState()
    
        useEffect(() => {
    
            fetch(`http://localhost:3000/movies/${id}`)
                .then(res => res.json())
                .then(setMovie)
    
        }, [id])

  

          return (
            <>
              <h1>{movie?.title}</h1>
              <img src={movie?.image} alt={movie?.title} />
        
              <section>
                <h4>Our community reviews</h4>
                {renderReviews()}
              </section>
            </>
          )
}