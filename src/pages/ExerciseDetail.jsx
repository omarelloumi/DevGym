import React from 'react'
import { Box } from "@mui/material";
import Detail from '../components/Detail/Detail';
import ExerciseVideos from '../components/ExerciseVideos/ExerciseVideos';
import SimilarExercises from '../components/SimilarExercises/SimilarExercises';
const ExerciseDetail = () => {
  return (
    <Box sx={{ mt: { lg: '96px', xs: '60px' } }}>
      <Detail/>
      <ExerciseVideos/>
      <SimilarExercises/>
    </Box>
  )
}

export default ExerciseDetail