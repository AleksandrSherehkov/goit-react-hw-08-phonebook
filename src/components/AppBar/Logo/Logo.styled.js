import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const Title = styled(Link)`
  display: block;
  font-size: 30px;
  text-transform: uppercase;
  font-weight: 700;
  letter-spacing: 2px;
  text-shadow: -1px -1px 1px rgba(255, 255, 255, 0.1), 1px 1px 1px rgba(0, 0, 0, 0.5);

  color: var(--main-text-color);

  transition: color var(--main-hover-animation);

  :hover,
  :focus {
    color: var(--accent-text-color);
  }
`;
