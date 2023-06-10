import { ErrorMessage } from 'formik';
import { ErrorText } from './FormError.styled';

export function FormError({ name }) {
  return <ErrorMessage name={name} render={message => <ErrorText>{message}</ErrorText>} />;
}
