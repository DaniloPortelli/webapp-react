
export default function ReviewCard({ review }) {

  const { id, name, vote, text } = review || {};

  return (
    <>

      <>
        <div key={id}>
          <div>
            <h5>{name}</h5>
            <p>{text}</p>
            <span>Voto: {vote}</span>
          </div>
        </div>
      </>
      

    </>
  )
}