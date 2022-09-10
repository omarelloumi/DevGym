import React,{ useState } from 'react'
import { Box } from '@mui/material';

import Exercises from '../components/Exercises/Exercises';
import SearchExercises from '../components/SearchExercises/SearchExercises';
import HeroBanner from '../components/HeroBanner/HeroBanner';

const Home = () => {
  const [exercises, setExercises] = useState([]);
  const [bodyPart, setBodyPart] = useState('all');
  return (
    <Box>
      <HeroBanner/>
      <SearchExercises setExercises={setExercises} bodyPart={bodyPart} setBodyPart={setBodyPart}/>
      <Exercises/>
    </Box>
  )
}

export default Home