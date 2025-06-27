import { useState } from 'react'
import {Route,Routes} from 'react-router';
import {
  Create,
  NowPlaying,
  Popular,
  TopRated,
  Detail
} from './pages/movies';
import Layout from './Layout/Layout';
import Home from './pages/Home';
import { theme } from './utils/constants/theme';
import { ThemeProvider } from 'styled-components';
import MoviesContext from './context/MoviesContext';

function App() {
  const [movies, setMovies] = useState([]);

  const contextValue = {
    movies,
    setMovies
  }

  return (
    <>
    <ThemeProvider theme={theme}>
      <MoviesContext.Provider value={contextValue}>
        <Layout>
          <Routes>
            <Route path='/' element={<Home />}></Route>
            {/* <Route path='/movie/create' element={<Create />}></Route> */}
            <Route path='/movie/popular' element={<Popular />}></Route>
            <Route path='/movie/now_playing' element={<NowPlaying />}></Route>
            <Route path='/movie/top_rated' element={<TopRated />}></Route>
            <Route path='/movie/:id' element={<Detail/>}></Route>
          </Routes>
        </Layout>
      </MoviesContext.Provider>
      </ThemeProvider>
    </>
  )
}

export default App
