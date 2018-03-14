import React from 'react';
import Lista from './Lista'

const hobiies=['cantar', 'comer', 'bailar']

const Section = (img) => (
  <section>
    <img src={img} />
    <h3>Mis Hobiies:</h3>
    <Lista hobbies = {hobiies}/>
  </section>
)

export default Section