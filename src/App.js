import React from 'react';
import './style.css';

// Export the main function
export default function App() {
  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <Presentation />
      <ComponentFeatures />
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
