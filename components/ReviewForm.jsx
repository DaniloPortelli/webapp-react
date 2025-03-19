import { useState } from 'react';
import axios from 'axios';


export default function ReviewForm({ movie_id, reloadReviews }) {
  const endpoint = `http://localhost:3000/movies/${movie_id}/reviews`;

  const initialValue = {
    name: 'Anonimo',
    text: 'lorem ipsum frontend',
    vote: 4,
  };

  const [formData, setFormData] = useState(initialValue);

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post(endpoint, formData, {
        headers: {
          'Content-Type': 'application/json',
        },
      })
      .then(() => {
        setFormData(initialValue);
        reloadReviews();
      })
      .catch((err) => console.log(err));
      
  };

  const setFieldValue = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <>
      <div>
        <h5>Add reviews</h5>
        <div>
          <form onSubmit={handleSubmit}>
            <div>
              <label>Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={setFieldValue}
              />
            </div>
            <div>
              <label>text</label>
              <textarea
                name="text"
                value={formData.text}
                onChange={setFieldValue}
              ></textarea>
            </div>
            <div>
              <label>Vote</label>
              <input
                type="number"
                min={1}
                max={5}
                name="vote"
                value={formData.vote}
                onChange={setFieldValue}
              />
            </div>
            <div>
              <button type="submit">
                Crea Recensione
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}