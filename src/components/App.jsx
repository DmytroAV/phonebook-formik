import { Component } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { nanoid } from 'nanoid';
import { Message } from './Message/Message';
import { FormContacts } from './FormContacts/FormContacts';
import { Contacts } from './Contacts/Contacts';
import { Section } from './Section/Section';
import { GlobalStyle } from './GlobalStyle';
import items from './json/contacts.json';

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

const LS_KEY = 'phonebook_contacts';

class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  componentDidMount() {
    const contacts_LS = JSON.parse(localStorage.getItem(LS_KEY));

    if (contacts_LS !== null) {
      this.setState({ contacts: contacts_LS });
    }

    if (!contacts_LS || contacts_LS.length === 0) {
      localStorage.setItem(LS_KEY, JSON.stringify(items));
      this.setState({ contacts: items });
    }
  }
  componentDidUpdate(_, prevState) {
    if (prevState.contacts !== this.state.contacts) {
      localStorage.setItem(LS_KEY, JSON.stringify(this.state.contacts));
    }
  }

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
    if (contacts) {
      return contacts.filter(({ name }) => name.toLowerCase().includes(normalFilter));
    }
    return;
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
            {contacts ? (
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
