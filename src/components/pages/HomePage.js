import ListMovies from 'components/listMovies/ListMovies';
import Loading from 'components/loading/Loading';
import { GetTrending } from 'getMovies';
import { useState, useEffect } from 'react';
import { H1 } from './HomePage.styled';

function HomePage() {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [status, setStatus] = useState('idl');

  useEffect(() => {
    setStatus('pending');
    GetTrending()
      .then(items => {
        const movies = items.results.map(item => {
          return {
            title: item.title ?? item.name,
            id: item.id,
          };
        });

        return movies;
      })
      .then(movies => {
        setStatus('resolve');
        setMovies(movies);
      })
      .catch(error => {
        setStatus('rejected');
        setError(error.message);
      });
  }, []);

  return (
    <section>
      <H1>Trending today</H1>
      {status === 'pending' && <Loading />}
      {status === 'rejected' && <h1>{error}</h1>}
      {status === 'resolve' && <ListMovies title={movies} />}
    </section>
  );
}

export default HomePage;
