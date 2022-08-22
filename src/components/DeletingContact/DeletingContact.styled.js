import styled from '@emotion/styled';

export const Text = styled.p`
  font-size: 20px;
  margin-bottom: 30px;
`;

export const Name = styled.span`
  color: blue;
`;

export const List = styled.ul`
  display: flex;
  justify-content: right;
`;

export const Item = styled.li`
  margin-right: 10px;

  :last-child {
    margin-right: 0;
  }
`;

export const ButtonCancel = styled.button`
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
`;

export const ButtonDelete = styled.button`
  box-shadow: inset 0px 1px 0px 0px #54a3f7;
  background: linear-gradient(to bottom, #007dc1 5%, #0061a7 100%);
  background-color: #1007dc;
  border-radius: 3px;
  border: 1px solid #124d77;
  display: inline-block;
  cursor: pointer;
  color: #f05d5d;
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
