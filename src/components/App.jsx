import { Component } from 'react';
import Form from './Form/Form';
import List from './List/List';
import Filter from './Filter/Filter';

const INITIAL_STATE = {
  contacts: [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ],
  filter: '',
};

export class App extends Component {
  state = { ...INITIAL_STATE };

  handleSubmit = values => {
    if (this.state.contacts.some(({ name }) => name === values.name)) {
      alert(`${values.name} is already in contacts.`);
      return;
    }
    this.setState(prevState => ({
      contacts: [...prevState.contacts, { ...values }],
    }));
  };

  handleDeleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(({ id }) => id !== contactId),
    }));
  };

  handleChangeFilter = value => {
    this.setState({ ...value });
  };
  render() {
    const { contacts, filter } = this.state;
    return (
      <div>
        <h1>Phonebook</h1>
        <Form onSubmit={this.handleSubmit} />

        <h2>Contacts</h2>
        <Filter onChange={this.handleChangeFilter} />
        <List
          contacts={contacts}
          filter={filter.toLowerCase()}
          onDeleteContact={this.handleDeleteContact}
        />
      </div>
    );
  }
}