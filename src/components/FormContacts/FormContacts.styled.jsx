import styled from 'styled-components';
import { Form, Field } from 'formik';

export const ContainerForm = styled(Form)`
  display: grid;
  justify-content: center;
  width: 100%;
  padding: 20px 12px 10px 20px;
  gap: 20px;
`;

export const LabelInput = styled.label`
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 20px;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 0 15px;
  font-weight: bold;
  font-style: italic;
`;

export const InputField = styled(Field)`
  border: 1px solid #c2c2c2;
  box-shadow: 1px 1px 4px #ebebeb;
  border-radius: 3px;
  padding: 7px;
  outline: none;
  max-width: 300px;
  :focus {
    border: 1px solid #0c0;
  }
`;

export const BtnAddContacts = styled.button`
  justify-self: self-end;
  border: none;
  cursor: pointer;
  padding: 8px 15px 8px 15px;
  background: #ff8500;
  color: #fff;
  box-shadow: 1px 1px 4px #dadada;
  border-radius: 3px;
  margin: 10px 10px 0 0;
  width: 150px;
  :hover {
    background: #ea7b00;
    color: #fff;
  }
`;
