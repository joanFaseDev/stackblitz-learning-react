// Title.js

import React from 'react';

export function MainTitle(props) {
  return (
    <h1 id={props.id} className="main-title">
      {props.content}
    </h1>
  );
}

export function SubTitle(props) {
  return (
    <h2 id={props.id} className="sub-title">
      {props.content}
    </h2>
  );
}
