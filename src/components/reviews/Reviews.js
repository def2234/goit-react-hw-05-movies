import Loading from 'components/loading/Loading';
import { GetMoviesReviews } from 'getMovies';
import { nanoid } from 'nanoid';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const [error, setError] = useState(null);
  const [status, setStatus] = useState('idl');

  const { movieId } = useParams();

  useEffect(() => {
    setStatus('pending');
    GetMoviesReviews(movieId)
      .then(item => {
        const results = item.results.map(({ author, content, id }) => {
          return {
            author,
            content,
            id,
          };
        });

        return results;
      })
      .then(review => {
        setStatus('resolve');
        setReviews(review);
      })
      .catch(error => {
        setStatus('rejected');
        setError(error.message);
      });
  }, [movieId]);

  return (
    <div>
      {status === 'rejected' && <h1>{error}</h1>}
      {status === 'pending' && <Loading />}
      {status === 'resolve' && (
        <ul>
          {reviews.map(({ author, content }) => (
            <li key={nanoid()}>
              <h4>Author: {author}</h4>
              <p>{content}</p>
            </li>
          ))}
        </ul>
      )}
      {reviews.length === 0 && <p> We don`t have reviews for this movie</p>}
    </div>
  );
};

export default Reviews;
