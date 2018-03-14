import React from 'react';

const hobiies = ['cantar', 'comer', 'bailar']

const Lista = () => (
  <ul>
    {hobiies.map(function (hobie, i) {
      return <li key={i}><a href="#li">{hobie}</a></li>
    })}
  </ul>
)

export default Lista