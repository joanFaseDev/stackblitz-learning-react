import React from 'react';
import './style.css';

import Gallery from './Gallery.js';
import List from './List.js';
import Navbar from './Navbar.js';
import Paragraph from './Paragraph.js';
import { MainTitle } from './Title.js';
import { SubTitle } from './Title.js';

// Export the main function (A file cannot have more than one default export)
export default function App() {
  return (
    <div>
      <MainTitle
        id="hero-title"
        content="Let's have fun while learning React!"
      />
      <Navbar
        nameClass="navbar"
        links={[
          {
            id: 1,
            src: '#introduction',
            content: 'Quick introduction',
          },
          {
            id: 2,
            src: '#about-components',
            content: 'About Components',
          },
          {
            id: 3,
            src: '#famous-programmers',
            content: 'Some famous programmers!',
          },
          {
            id: 4,
            src: '#about-jsx',
            content: 'About JSX',
          },
        ]}
      />
      <SubTitle id="introduction" content="Quick introduction" />
      <Paragraph
        nameClass="paragraph"
        content="Hi! I'm Jordan, an aspiring web-developer. I'm going to use this little
      project to learn React and practice coding while I read the official
      documentation. By the way, this is my first component!"
      />
      <SubTitle id="about-components" content="About Components" />
      <ComponentFeatures />
      <SubTitle id="famous-programmers" content="Some famous programmers!" />
      <Gallery />
      <SubTitle id="about-jsx" content="About JSX" />
      <List
        nameClass="list"
        items={[
          {
            id: 1,
            content: 'JSX stands for JavaScript Syntax Extension.',
          },
          {
            id: 2,
            content:
              'JSX is a syntax extension for JavaScript that is used to write HTML-like markup inside a JavaScript file.',
          },
          {
            id: 3,
            content:
              'Often in modern web development, logic determined content. JSX makes it possible for rendering logic and markup to live together in the same place, components.  ',
          },
          {
            id: 4,
            content:
              "JSX requires a compiler to works properly (e.g. Babel) as browsers don't understand it by default.",
          },
        ]}
      />
      <Paragraph
        nameClass="paragraph"
        content="There are three rules to follow while using JSX: "
      />
      <Paragraph
        nameClass="paragraph justified"
        content="A component must return a single element. If there are two or more elements to return then these elements need to be nested within a single parent tag. The reason being that JSX, when executed, is converted in objects. In JavaScript, a function cannot return more than one object except if these objects are nested inside an array. That's the same principle applied here."
      />
      <Paragraph
        nameClass="paragraph justified"
        content="JSX requires tags to be explicitely closed. Self-closing tags like <input> must be written as <input />."
      />
      <Paragraph
        nameClass="paragraph justified"
        content="JSX uses camelCase most of the time. When JSX turns into JavaScript, its attributes become key for JavaScript's objects. JavaScript has strict rules on identifiers (no reserved words, can't contain dashes,...), that is why cameCase is preferred here. As an exemple, the 'class' attribute (a reserved word in JS) becomes 'className' in JSX."
      />
    </div>
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
