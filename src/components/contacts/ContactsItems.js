import React from 'react';
import './ContactsItems.css';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

function ContactsItems({ contactsItems, deleteContact }) {
  return (
    <TransitionGroup component="ul" className="list">
      {contactsItems.map(el => (
        <CSSTransition key={el.id} timeout={300} classNames="list-fade">
          <li key={el.id} className="item">
            <p>{el.name}</p>
            <p>{el.number}</p>
            <button className="btn" onClick={() => deleteContact(el.id)}>
              X
            </button>
          </li>
        </CSSTransition>
      ))}
    </TransitionGroup>
  );
}
export default ContactsItems;
