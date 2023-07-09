// Gallery.js
import React from 'react';
import Photo from './Photo.js'

// Root component of this file
export default function Gallery() {
  const famousProgrammers = [
    {
      name: 'Alan Turing',
      imageSrc:
        'https://www.thesun.co.uk/wp-content/uploads/2019/07/NINTCHDBPICT000491505127.jpg',
      id: 1,
    },
    {
      name: 'Grace Hopper',
      imageSrc:
        'https://www.timeforkids.com/wp-content/uploads/2020/08/Grace_003.jpg?w=926',
      id: 2,
    },
    {
      name: 'Donald Ervin Knuth',
      imageSrc:
        'https://ieeecs-media.computer.org/wp-media/2018/03/11020301/donald-knuth-e1523412218270.jpg',
      id: 3,
    },
  ];
  return (
    <div className="gallery">
      {famousProgrammers.map((programmer) => {
        return (
          <Photo
            key={programmer.id}
            name={programmer.name}
            imageSrc={programmer.imageSrc}
          />
        );
      })}
    </div>
  );
}

