import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const LinkNav = styled(NavLink)`
  display: inline-block;
  font-size: 20px;
  text-decoration: none;
  color: black;
  &:not(:last-child) {
    margin-right: 25px;
  }

  &:hover,
  :focus {
    color: #f95959;
  }
`;

export const Div = styled.div`
  padding: 20px 25px;
  box-shadow: 0px 1px 6px 0px rgba(0, 0, 0, 0.75);
`;
