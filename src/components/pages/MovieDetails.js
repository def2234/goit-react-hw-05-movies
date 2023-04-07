import Loading from 'components/loading/Loading';
import { GetMoviesDetails } from 'getMovies';
import { Suspense, useEffect, useRef, useState } from 'react';
import picture from 'picture/PictureNotFaund.png';
import { Outlet, useLocation, useParams } from 'react-router-dom';
import {
  Div,
  DivDescr,
  GoToBack,
  H3,
  Img,
  Li,
  LinkItems,
} from './MovieDetails.styled';

const MovieDetails = () => {
  const [details, setDetails] = useState({});
  const [error, setError] = useState(null);
  const [status, setStatus] = useState('idl');
  const { movieId } = useParams();
  const location = useLocation();

  const backLinkHref = useRef(location.state?.from ?? '/');

  useEffect(() => {
    setStatus('pending');
    GetMoviesDetails(movieId)
      .then(item => {
        const genres = item.genres.map(item => item.name).join(', ');
        const { poster_path, title, overview, vote_average, release_date } =
          item;

        const details = {
          poster:
            poster_path !== null
              ? `https://image.tmdb.org/t/p/w300${poster_path}`
              : picture,
          title: title,
          overview: overview,
          genres: genres,
          score: Math.round(vote_average * 10),
          date: new Date(release_date).getFullYear(),
        };
        return details;
      })
      .then(movie => {
        setStatus('resolve');
        setDetails(movie);
      })
      .catch(error => {
        setError(error.message);
        setStatus('rejected');
      });
  }, [movieId]);

  return (
    <div>
      <GoToBack to={backLinkHref.current}>Go back</GoToBack>

      {status === 'pending' && <Loading />}
      <div>
        {status === 'rejected' && <h1>{error}</h1>}
        {status === 'resolve' && (
          <Div>
            <div>
              <Img
                src={details.poster}
                alt={details.title}
                width="300"
                height="450"
              />
            </div>
            <DivDescr>
              <h1>
                {details.title} ({details.date})
              </h1>
              <p>User Score: {details.score}%</p>
              <h2>Overview</h2>
              <p>{details.overview}</p>
              <h2>Genres</h2>

              <p>{details.genres}</p>
            </DivDescr>
          </Div>
        )}
      </div>
      <H3>Additional information</H3>
      <ul>
        <Li>
          <LinkItems to="cast"> Cast</LinkItems>
        </Li>
        <Li>
          <LinkItems to="reviews">Reviews</LinkItems>
        </Li>
      </ul>
      <Suspense fallback={<Loading />}>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default MovieDetails;
