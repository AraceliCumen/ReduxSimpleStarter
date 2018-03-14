import React from 'react';


const Lista = ({hobbies}) => (
  <ul>
    {hobbies.map(function (hobie, i) {
      return <li key={i}><a href="#li">{hobie}</a></li>
    })}
  </ul>
)

export default Lista