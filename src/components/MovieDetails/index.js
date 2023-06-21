import { useParams } from "react-router-dom/cjs/react-router-dom.min";
function MovieDetails({ movies }) {
  console.log(movies);
  const { movieId } = useParams();
  const movieChoice = movies.find(item => {
    if (item.id === parseInt(movieId)) {
      return true
    } else {
      return false
    }
  });
  return (
    <div className='comp purple'>
      <h1>{movieChoice.title}</h1>
      <p>{movieChoice.description}</p>
    </div>
  );
}

export default MovieDetails;