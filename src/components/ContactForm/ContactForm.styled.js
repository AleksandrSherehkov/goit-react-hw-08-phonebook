import styled from '@emotion/styled';
import { Field } from 'formik';

export const TitlePage = styled.h2`
  text-align: center;
  margin-bottom: 10px;
  text-transform: uppercase;
  font-weight: 700;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
`;

export const Title = styled.span`
  font-weight: 600;
  color: var(--main-text-color);
  margin-bottom: 5px;
`;

export const StyledField = styled(Field)`
  background-color: #e9eaf7;
  height: 40px;
  padding: 0 10px 0 10px;

  border: 1px solid var(--second-bg-color);
  outline: none;

  color: var(--main-text-color);
  font-size: 14px;

  :focus {
    border-color: var(--accent-bg-color);
  }

  ::placeholder {
    font-size: 12px;
    color: var(--main-text-color);
  }
`;

export const Button = styled.button`
  margin: 0 auto;
  box-shadow: inset 0px 1px 0px 0px #54a3f7;
  background: linear-gradient(to bottom, #007dc1 5%, #0061a7 100%);
  background-color: #007dc1;
  border-radius: 3px;
  border: 1px solid #124d77;
  display: block;
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
`;
