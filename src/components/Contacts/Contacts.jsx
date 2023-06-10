import PropTypes from 'prop-types';
import { Message } from '../Message/Message';
import {
  ContainerContacts,
  InputFilterContacts,
  ListContact,
  NameContact,
  NumberContact,
  ButtonDelete,
} from './Contacts.styled';

export const Contacts = ({ items, value, onChange, onDelete }) => {
  return (
    <ContainerContacts>
      <InputFilterContacts
        placeholder="Find contacts by name"
        name="filter"
        value={value}
        onChange={onChange}
      />
      {items.length === 0 ? (
        <Message message="There is no such name in your phonebook. Please enter correct contacts name!" />
      ) : (
        items.map(item => (
          <ListContact key={item.id}>
            <NameContact>{item.name}:</NameContact>
            <NumberContact>{item.number}</NumberContact>
            <ButtonDelete type="button" onClick={() => onDelete(item.id)}>
              Delete
            </ButtonDelete>
          </ListContact>
        ))
      )}
    </ContainerContacts>
  );
};

Contacts.propTypes = {
  onChange: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }),
  ).isRequired,
};
