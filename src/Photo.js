// Photo.js
import React from 'react';

export default function Photo(props) {
  return (
    <figure>
      <img alt={props.name} src={props.imageSrc} />
      <figcaption>{props.name}</figcaption>
    </figure>
  );
}
