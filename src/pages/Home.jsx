import React from 'react'
import { Box } from '@mui/material';

import Exercises from '../components/Exercises/Exercises';
import SearchExercises from '../components/SearchExercises/SearchExercises';
import HeroBanner from '../components/HeroBanner/HeroBanner';

const Home = () => {
  return (
    <Box>
      <HeroBanner/>
      <SearchExercises/>
      <Exercises/>
    </Box>
  )
}

export default Home