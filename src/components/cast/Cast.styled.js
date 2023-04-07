import styled from 'styled-components';

export const Ul = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;

export const Li = styled.li`
  flex-basis: calc((100% - 40px) / 5);
  list-style: none;
  text-align: center;
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.12), 0px 1px 1px rgba(0, 0, 0, 0.14),
    0px 1px 3px rgba(0, 0, 0, 0.12);
  border-radius: 0px 0px 4px 4px;
`;

export const Img = styled.img`
  margin: 0;
`;

export const Span = styled.span`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  margin-bottom: 10px;
  font-weight: 500;
`;

export const P = styled.p`
  margin: 0;
  font-weight: 400;
  margin-left: 5px;
`;

export const H4 = styled.h4`
  margin: 10px 0;
`;
