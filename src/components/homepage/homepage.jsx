import React from 'react'

const Homepage = ({allAlbums}) => {
  const albums = allAlbums
  console.log(albums)

  const renderAlbums = () => {
    return Object.keys(albums).map((key, index) => (
      <div key={index}>
        <h3>Album: {key}</h3>
        <p>Details: {JSON.stringify(albums[key])}</p>
      </div>
    ));
  };

  return (
    <div>
      {albums && Object.keys(albums).length > 0 ? (
        renderAlbums()
      ) : (
        <p>No albums available.</p>
      )}
    </div>
  );
};

export default Homepage