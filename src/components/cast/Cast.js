import { GetMoviesCredits } from 'getMovies';
import { nanoid } from 'nanoid';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import picture from 'picture/PictureNotFaund.png';
import { H4, Li, P, Span, Ul } from './Cast.styled';

const Cast = () => {
  const [credits, setCredits] = useState([]);
  const [error, setError] = useState(null);
  const [status, setStatus] = useState('idl');

  const { movieId } = useParams();

  useEffect(() => {
    GetMoviesCredits(movieId)
      .then(item => {
        const cast = item.cast.map(({ character, name, profile_path, id }) => {
          return {
            character,
            name,
            photo:
              profile_path !== null
                ? `https://image.tmdb.org/t/p/w200${profile_path}`
                : picture,
            id,
          };
        });

        return cast;
      })
      .then(cast => {
        setStatus('resolve');
        setCredits(cast);
      })
      .catch(error => {
        setStatus('rejected');
        setError(error.message);
      });
  }, [movieId]);

  return (
    <div>
      {status === 'rejected' && <h1>{error}</h1>}
      {status === 'pending' && <h3>Loading...</h3>}
      {status === 'resolve' && (
        <Ul>
          {credits.map(({ photo, name, character }) => (
            <Li key={nanoid()}>
              <img src={photo} alt={name} width="200" height="300" />
              <H4>{name}</H4>
              <Span>
                Character: <P>{character}</P>
              </Span>
            </Li>
          ))}
        </Ul>
      )}
    </div>
  );
};

export default Cast;
