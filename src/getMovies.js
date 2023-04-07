const BASIK_URL = 'https://api.themoviedb.org/3';
const URL_SETTINGS = '/trending/all/day';
const API_KEY = '50c081603ce7d17904e2fe1fff4c28c2';

export const GetTrending = async () => {
  const response = await fetch(
    `${BASIK_URL}${URL_SETTINGS}?api_key=${API_KEY}`
  );
  if (!response.ok) {
    return Promise.reject(new Error('Something went wrong'));
  }
  return await response.json();
};

export const GetMoviesName = async query => {
  const response = await fetch(
    `${BASIK_URL}/search/movie?api_key=${API_KEY}&language=en-US&query=${query}&page=1&include_adult=false`
  );
  if (!response.ok) {
    return Promise.reject(
      new Error(`Movie with that name: ${query} not found`)
    );
  }
  return await response.json();
};

export const GetMoviesDetails = async MovieId => {
  const response = await fetch(
    `${BASIK_URL}/movie/${MovieId}?api_key=${API_KEY}&language=en-US`
  );
  if (!response.ok) {
    return Promise.reject(
      new Error(`Sorry the movie with this id: ${MovieId} was not found`)
    );
  }
  return await response.json();
};

export const GetMoviesCredits = async MovieId => {
  const response = await fetch(
    `${BASIK_URL}/movie/${MovieId}/credits?api_key=${API_KEY}&language=en-US`
  );
  if (!response.ok) {
    return Promise.reject(
      new Error(`Sorry the movie with this id: ${MovieId} was not found`)
    );
  }
  return await response.json();
};

export const GetMoviesReviews = async MovieId => {
  const response = await fetch(
    `${BASIK_URL}/movie/${MovieId}/reviews?api_key=${API_KEY}&language=en-US`
  );
  if (!response.ok) {
    return Promise.reject(
      new Error(`Sorry the movie with this id: ${MovieId} was not found`)
    );
  }
  return await response.json();
};
