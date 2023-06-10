import { Component } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { nanoid } from 'nanoid';
import { Message } from './Message/Message';
import { FormContacts } from './FormContacts/FormContacts';
import { Contacts } from './Contacts/Contacts';
import { Section } from './Section/Section';
import { GlobalStyle } from './GlobalStyle';

const notifyOptions = {
  position: 'top-right',
  autoClose: 5000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
  theme: 'colored',
};
class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  createContact = ({ name, number }) => {
    const { contacts } = this.state;
    const normalName = name.toLowerCase();
    const checkName = contacts.some(({ name }) => name.toLowerCase() === normalName);
    if (checkName) {
      toast.error(`${name} is already in your phonebook`, notifyOptions);
      return;
    }

    const newContact = {
      id: nanoid(),
      name: name,
      number: number,
    };

    this.setState(state => ({
      contacts: [...state.contacts, newContact],
    }));
  };

  handleFilterChange = ({ target: { value } }) => {
    this.setState({ filter: value });
  };

  addFilterContacts = () => {
    const { filter, contacts } = this.state;
    const normalFilter = filter.toLowerCase();
    return contacts.filter(({ name }) => name.toLowerCase().includes(normalFilter));
  };

  deleteContact = contactId => {
    this.setState(state => ({
      contacts: state.contacts.filter(item => item.id !== contactId),
    }));
  };

  render() {
    const { contacts, filter } = this.state;
    const filteredContacts = this.addFilterContacts();
    return (
      <>
        <GlobalStyle />
        <div className="container">
          <Section title="Phonebook">
            <FormContacts onSubmit={this.createContact} />
          </Section>
          <Section title="Contacts">
            {contacts.length !== 0 ? (
              <Contacts
                items={filteredContacts}
                onChange={this.handleFilterChange}
                onDelete={this.deleteContact}
                value={filter}
              />
            ) : (
              <Message message="There are no contacts in your phonebook. Please add your first contact!" />
            )}
          </Section>
          <ToastContainer />
        </div>
      </>
    );
  }
}

export default App;
