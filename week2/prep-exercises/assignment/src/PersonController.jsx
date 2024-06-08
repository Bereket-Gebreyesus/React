import React, { useState, useEffect } from 'react';
import Person from './Person';

function PersonController() {
  const [persons, setPersons] = useState([]);

  const getPersons = async () => {
    try {
      const response = await fetch('https://www.randomuser.me/api?results=10');
      const data = await response.json();
      const personsData = data.results.map(person => ({
        firstName: person.name.first,
        lastName: person.name.last,
        email: person.email,
        phone: person.phone 
      }));
      setPersons(personsData);
    } catch (error) {
      console.error('Error fetching the persons data:', error);
    }
  };

  useEffect(() => {
    getPersons();
  }, []);

  return (
    <div>
      <button onClick={getPersons}>Fetch New Person</button>
      <Person persons={persons} />
    </div>
  );
}

export default PersonController;