import './App.css'
import { ListOfSongs } from './components/ListOfSongs';

function App() {
  
  return (
    <>
      <div className="title">
        <h1>List of album</h1>
      </div>
      <div className="totalAlbums">
        <ListOfSongs />
      </div>
    </>
  )
}

export default App
