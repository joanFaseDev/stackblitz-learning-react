// List.js

import React from 'react';

export default function List(props) {
  return (
    <ul className={props.nameClass}>
      {props.items.map((item) => {
        return <li key={item.id}>{item.content}</li>;
      })}
    </ul>
  );
}
