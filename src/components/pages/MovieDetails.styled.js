import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const GoToBack = styled(Link)`
  margin: 10px 20px;
  display: block;
  text-decoration: none;
  color: black;
  font-size: 500;
  &:hover,
  :focus {
    color: #f95959;
  }
`;

export const Div = styled.div`
  display: flex;
  padding: 0 20px;
`;

export const DivDescr = styled.div`
  margin-left: 15px;
`;

export const H3 = styled.h3`
  margin-left: 20px;
`;

export const Li = styled.li`
  list-style: none;
`;

export const LinkItems = styled(Link)`
  text-decoration: none;
  color: black;
  font-size: 15px;
  &:hover,
  :focus {
    color: #f95959;
  }
`;

export const Img = styled.img`
  object-fit: contain;
`;
