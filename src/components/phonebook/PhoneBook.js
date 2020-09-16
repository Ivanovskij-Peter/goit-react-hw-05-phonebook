import React, { Component } from 'react';
import Filter from '../filter/Filter';
import ContactsForm from '../contacts/ContactsForm';
import ContactsItems from '../contacts/ContactsItems';
import './PhoneBook.css';
import { CSSTransition } from 'react-transition-group';

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
      <div className="container">
        <CSSTransition
          in={true}
          appear={true}
          classNames="Phone-slideIn"
          timeout={1000}
          unmountOnExit
        >
          <h1 className="Phone">PhoneBook</h1>
        </CSSTransition>
        <ContactsForm getContact={this.getContact} />
        {this.state.contacts.length > 1 && (
          <Filter
            filter={this.state.filter}
            getFilterName={this.getFilterName}
          />
        )}
        <ContactsItems
          contactsItems={this.filterItems()}
          deleteContact={this.deleteContact}
        />
      </div>
    );
  }
}
export default PhoneBook;
