import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './entertainment/Home'
import MovieDetails from './entertainment/MovieDetails'
import { MantineProvider } from '@mantine/core'
import CastMovies from './entertainment/CastMovies'
import TvShowDetails from './entertainment/TvShowDetails'
import PageNotFound from './entertainment/PageNotFound'
import ReturnToHome from './entertainment/ReturnToHome'

function App() {

  return (
    <MantineProvider>
      <BrowserRouter>
        <ReturnToHome />
        <br />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/movie/:id' element={<MovieDetails />} />
          <Route path='/tvshow/:id' element={<TvShowDetails />} />
          <Route path='/cast/:id' element={<CastMovies />} />
          <Route path='*' element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </MantineProvider>
  )
}

export default App
