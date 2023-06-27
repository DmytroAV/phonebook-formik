import { Formik } from 'formik';
import * as yup from 'yup';
import PropTypes from 'prop-types';
import { FormError } from '../FormError/FormError';
import { ContainerForm, LabelInput, InputField, BtnAddContacts } from './FormContacts.styled';

const nameRegex = /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/;
const nameTitle =
  "Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan";
const numberRegex = /\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/;
const numberTitle =
  'Phone number must be digits and can contain spaces, dashes, parentheses and can start with +';

const validationSchema = yup.object().shape({
  name: yup
    .string()
    .max(20)
    .matches(nameRegex, {
      message: nameTitle,
    })
    .required(),
  number: yup
    .string()
    .min(7)
    .max(15)
    .matches(numberRegex, {
      message: numberTitle,
    })
    .required(),
});

const initialValues = {
  name: '',
  number: '',
};

export const FormContacts = ({ onSubmit }) => {
  const handleSubmit = (value, { resetForm }) => {
    onSubmit(value);
    resetForm();
  };
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <ContainerForm
      // autoComplete="off"
      >
        <LabelInput htmlFor="name">
          Name
          <InputField type="text" name="name" placeholder="Enter full name" required />
          <FormError name="name" />
        </LabelInput>
        <LabelInput htmlFor="number">
          Phone Number
          <InputField type="tel" name="number" placeholder="Enter phone number" required />
          <FormError name="number" />
        </LabelInput>
        <BtnAddContacts type="submit">Add contacts</BtnAddContacts>
      </ContainerForm>
    </Formik>
  );
};

FormContacts.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
