import React, {useEffect,useContext} from 'react'
import styled from 'styled-components'
import axios from 'axios'
import { Movies } from '../../components'
import {Hero} from '../../components'
import ENDPOINTS from '../../utils/constants/endpoints'
import MoviesContext from '../../context/MoviesContext'


const PageTitle=styled.h2`
  margin-bottom: 2rem;
  font-size: 2.5rem;
  color: #4361ee;
  letter-spacing: 1px;
  text-align: center;
`


const NowPlaying = () => {
  const {setMovies}=useContext(MoviesContext);

  useEffect(() => {
      async function fetchPopularMovies(){
        const response=await axios.get(ENDPOINTS.NOWPLAYING);

        setMovies(response.data.results);
      }

      fetchPopularMovies();
  },[])

  return (
    <div>
      <Hero />
      <PageTitle>Now Playing Movies</PageTitle>
      <Movies title="Now Playing Movies"/>
    </div>
  )
}

export default NowPlaying