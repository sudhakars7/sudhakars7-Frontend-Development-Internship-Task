import React, { FC } from 'react';

interface Picture {
  id: number;
  title: string;
  url: string;
}

interface PicturesProps {
  photos: Picture[];
}

const Pictures: FC<PicturesProps> = ({ photos }) => {
  const filteredPhotos = photos ? photos.filter((photo) => {
    return true; 
  }) : [];

  return (
    <div>
      {filteredPhotos.map((photo) => (
        <div key={photo.id}>
          <img src={photo.url} alt={photo.title} />
          <p>{photo.title}</p>
        </div>
      ))}
    </div>
  );
};

export default Pictures;
