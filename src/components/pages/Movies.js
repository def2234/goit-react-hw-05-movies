import SearchForm from 'components/searchForm/SearchForm';
import { GetMoviesName } from 'getMovies';

import { useEffect, useState } from 'react';

import { Link, useLocation, useSearchParams } from 'react-router-dom';

function Movies() {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [status, setStatus] = useState('idl');

  const [searchParams, setSearchParams] = useSearchParams();
  const searchQuery = searchParams.get('query') ?? '';

  const hendleFormSubmit = query => {
    updateQuery(query);
  };

  function updateQuery(query) {
    const nextQuery = query !== '' ? { query } : {};
    setSearchParams(nextQuery);
  }

  const location = useLocation();

  useEffect(() => {
    if (searchQuery === '') {
      return;
    }
    GetMoviesName(searchQuery)
      .then(query => {
        const movie = query.results.map(({ title, id }) => {
          return { title, id };
        });

        return movie;
      })
      .then(movie => {
        setStatus('resolve');
        setMovies(movie);
      })
      .catch(error => {
        setStatus('rejected');
        setError(error.message);
      });
  }, [searchQuery]);

  return (
    <div>
      <SearchForm onSubmit={hendleFormSubmit} />

      {status === 'rejected' && <h1>{error}</h1>}

      {status === 'resolve' && (
        <ul>
          {movies.map(({ title, id }) => {
            return (
              <li key={id}>
                <Link to={`${id}`} state={{ from: location }}>
                  {title}
                </Link>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}

export default Movies;
