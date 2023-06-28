import React from 'react'
import { songs } from '../../data/songs';
import { Album } from '../Album';

export const ListOfSongs = () => {
  const albums = songs

  return (
    <>
      {
        albums.map(song => (
          <Album
            key={song.id}
            image={song.cover_url} 
            name={song.name} 
            artist={song.artist}
            album={song.album}
            year={song.year}
            genre={song.genre}
            like={song.like}
          />
        ))
      }
    </>
  )
}
