import { nanoid } from 'nanoid';

import { Item, Ul } from './ListMovies.styled.js';
import PropTypes from 'prop-types';

const ListMovies = ({ title }) => {
  return (
    <div>
      <Ul>
        {title.map(({ title, id }) => {
          return (
            <Item key={nanoid()} to={`movies/${id}`}>
              {title}
            </Item>
          );
        })}
      </Ul>
    </div>
  );
};

ListMovies.propTypes = {
  title: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
    })
  ),
};

export default ListMovies;
