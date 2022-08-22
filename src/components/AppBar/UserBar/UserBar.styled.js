import styled from '@emotion/styled';
import { BiUser } from 'react-icons/bi';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const GroupWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

export const UserIcon = styled(BiUser)`
  background-color: var(--accent-text-color);
  color: var(--second-text-color);
  padding: 10px;
`;

export const TextWrapper = styled.div`
  margin-left: 25px;
  margin-right: 25px;
`;

export const Text = styled.p`
  font-weight: 700;
  margin-bottom: 5px;
`;

export const UserName = styled.span`
  color: var(--accent-text-color);
`;

export const Email = styled.p`
  font-size: 14px;
  color: #cccccc;
`;

export const Button = styled.button`
  box-shadow: inset 0px 1px 0px 0px #54a3f7;
  background: linear-gradient(to bottom, #007dc1 5%, #0061a7 100%);
  background-color: #007dc1;
  border-radius: 3px;
  border: 1px solid #124d77;
  display: inline-block;
  cursor: pointer;
  color: #ffffff;
  font-family: Arial;
  font-size: 13px;
  padding: 6px 24px;
  text-decoration: none;
  text-shadow: 0px 1px 0px #154682;

  cursor: pointer;
  transition: background-color var(--main-hover-animation);

  :hover,
  :focus {
    background: linear-gradient(to bottom, #0061a7 5%, #007dc1 100%);
    background-color: #0061a7;
  }

  width: 30%;
`;
