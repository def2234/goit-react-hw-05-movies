import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Item = styled(Link)`
  display: block;
  text-decoration: none;
  color: black;
  font-size: 20px;
  &:not(:last-child) {
    margin-bottom: 10px;
  }

  &:hover,
  :focus {
    color: #f95959;
  }
`;

export const Ul = styled.ul`
  margin: 30px;
  padding: 0;
`;
