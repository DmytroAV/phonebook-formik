import styled from 'styled-components';

export const ContainerContacts = styled.ul`
  display: grid;
  justify-content: center;
  width: 100%;
  padding: 0 30px;
  gap: 10px;
  list-style: none;
`;

export const InputFilterContacts = styled.input`
  border: 1px solid #c2c2c2;
  box-shadow: 1px 1px 4px #ebebeb;
  border-radius: 3px;
  padding: 5px;
  outline: none;
  width: 50%;
  :focus {
    border: 1px solid #0c0;
  }
`;

export const ListContact = styled.li`
  display: grid;
  grid-template-columns: 1fr 1fr 80px;
  gap: 5px;
  justify-items: center;
  align-items: center;
  list-style-type: none;
  font-weight: bold;
  float: left;
  padding: 8px;
  border-bottom: 2px solid #ddd;
`;

export const NameContact = styled.p`
  margin: 0;
  font-size: 18px;
  font-style: italic;
`;

export const NumberContact = styled.p`
  margin: 0;
  font-size: 16px;
  font-style: italic;
`;

export const ButtonDelete = styled.button`
  justify-self: center;
  border: none;
  cursor: pointer;
  padding: 8px 15px 8px 15px;
  background: #e37266;
  color: #fff;
  box-shadow: 1px 1px 4px #dadada;
  border-radius: 3px;
`;
