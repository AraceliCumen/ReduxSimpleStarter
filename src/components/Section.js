import React from 'react';
import Lista from './Lista'

const Section = ({person}) => (
  <section>
    <h1>{person.name}</h1>
    <img src={person.foto} />
    <p>{person.bio}</p>
    <h3>Mis Hobiies:</h3>
    <Lista hobbies = {person.hobbies}/>
  </section>
)

export default Section