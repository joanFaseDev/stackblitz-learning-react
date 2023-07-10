// Navbar.js

import React from 'react';

export default function Navbar(props) {
  return (
    <nav className={props.nameClass}>
      <ul>
        {props.links.map((link) => {
          return (
            <li key={link.id}>
              <a href={link.src}>{link.content}</a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
