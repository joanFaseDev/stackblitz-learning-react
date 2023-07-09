import React from 'react';
import './style.css';

import Gallery from './Gallery.js';
import { MainTitle } from './Title.js';
import { SubTitle } from './Title.js';

// Export the main function (A file cannot have more than one default export)
export default function App() {
  return (
    <div>
      <MainTitle content="Let's have fun while learning React!" />
      <SubTitle content="Quick introduction" />
      <Presentation />
      <SubTitle content="About Components" />
      <ComponentFeatures />
      <SubTitle content="Some famous programmers!" />
      <Gallery />
    </div>
  );
}

/**
 * JSX (JavaScript Syntax Extension) is a syntax extension for JavaScript that can be used to write HTML-like markup inside a JavaScript file.
 */
function Presentation() {
  return (
    <p>
      Hi! I'm Jordan, an aspiring web-developer. I'm going to use this little
      project to learn React and practice coding while I read the official
      documentation. By the way, this is my first
      <span className="react"> component</span>!
    </p>
  );
}

function ComponentFeatures() {
  const features = [
    {
      content:
        'Components are reusable and autonomous pieces of UI (user interface).',
      id: 1,
    },
    {
      content: 'Components are functions that return a markup.',
      id: 2,
    },
    {
      content:
        "Component's name starts with a capital letter, that way they can be properly dissociate from HTML markups.",
      id: 3,
    },
  ];
  // If the markup isn't on the same line as the return keyword then wrap it up in parentheses.
  return (
    <ul className="features">
      {features.map((feature) => {
        return (
          <li className="features-item" key={feature.key}>
            {feature.content}
          </li>
        );
      })}
    </ul>
  );
}

/**
 * Components can render other components but their definition must never be nest.
 * Here, Photo components are nested within Gallery but nonetheless Photo is defined outside of Gallery.
 */
// function Photo() {
//   return (
//     <img
//       src="https://picsum.photos/id/64/300"
//       alt="A young girl bathing in the sun"
//     />
//   );
// }

// function Gallery() {
//   return (
//     <div className="gallery">
//       <Photo />
//       <Photo />
//       <Photo />
//     </div>
//   );
// }
