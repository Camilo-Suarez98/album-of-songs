import './App.css'
import { songs } from './api/songs'
import { Album } from './components/Album';

function App() {
  const albums = songs
  
  return (
    <>
      <div className="title">
        <h1>List of album</h1>
      </div>
      <div className="totalAlbums">
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
      </div>
    </>
  )
}

export default App

// {
//   albums.map(song => (
//     <Album key={song.id} name={song.artist} />
//   ))
// }