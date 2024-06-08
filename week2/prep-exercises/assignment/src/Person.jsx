import React from 'react';

function Person({ persons }) {
  if (persons.length === 0) {
    return null;
  }

  return (
    <ul>
      {persons.map(person => (
        <li key={person.id}>
          <p>First name: {person.firstName}</p>
          <p>Last name: {person.lastName}</p>
          <p>Email: {person.email}</p>
          <p>Phone: {person.phone}</p>
        </li>
      ))}
    </ul>
  );
}

export default Person;