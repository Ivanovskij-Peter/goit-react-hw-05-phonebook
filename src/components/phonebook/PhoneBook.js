import React, { Component } from 'react';
import Filter from '../filter/Filter';
import ContactsForm from '../contacts/ContactsForm';
import ContactsItems from '../contacts/ContactsItems';

class PhoneBook extends Component {
  state = {
    contacts: [],
    filter: '',
  };
  componentDidMount() {
    const contacts = localStorage.getItem('contacts')
      ? JSON.parse(localStorage.getItem('contacts'))
      : [];
    this.setState({ contacts });
  }
  componentDidUpdate(prevPops, prevState) {
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }
  getContact = contact => {
    const result = this.state.contacts.some(el => el.name === contact.name);
    if (result) {
      alert(`is already in contacts`);
    } else {
      this.setState(prev => {
        return { ...prev, contacts: [...prev.contacts, contact] };
      });
    }
  };

  getFilterName = event => {
    this.setState({ filter: event.target.value });
  };
  filterItems = () => {
    return this.state.filter
      ? this.state.contacts.filter(el =>
          el.name.toLowerCase().includes(this.state.filter.toLowerCase()),
        )
      : this.state.contacts;
  };
  deleteContact = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(el => el.id !== id),
    }));
  };

  render() {
    return (
      <div>
        <h1>PhoneBook</h1>
        <ContactsForm getContact={this.getContact} />
        <h2>Contacts</h2>
        <Filter filter={this.state.filter} getFilterName={this.getFilterName} />
        <ContactsItems
          contactsItems={this.filterItems()}
          deleteContact={this.deleteContact}
        />
      </div>
    );
  }
}
export default PhoneBook;
