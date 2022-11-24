import { BrowserRouter, Route, Routes } from 'react-router-dom'
import {
  Main,
  Genre,
  Favorite,
  Playlist,
  Popular,
  Download,
  Artist,
  Musicvideo,
} from './components/'
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/genre" element={<Genre />} />
        <Route path="/favorite" element={<Favorite />} />
        <Route path="/playlist" element={<Playlist />} />
        <Route path="/popular" element={<Popular />} />
        <Route path="/download" element={<Download />} />
        <Route path="/artist" element={<Artist />} />
        <Route path="/musicvideo" element={<Musicvideo />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
