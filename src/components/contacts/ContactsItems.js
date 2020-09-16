import React from 'react';

function ContactsItems({ contactsItems, deleteContact }) {
  console.log(contactsItems);
  return (
    <ul>
      {contactsItems.map(el => (
        <li key={el.id}>
          <p>{el.name}</p>
          <p>:{el.number}</p>
          <button onClick={() => deleteContact(el.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
}
export default ContactsItems;
