import React,{ useEffect, useState } from 'react'
import { Box } from "@mui/material";
import Detail from '../components/Detail/Detail';
import ExerciseVideos from '../components/ExerciseVideos/ExerciseVideos';
import SimilarExercises from '../components/SimilarExercises/SimilarExercises';
import { useParams } from 'react-router-dom';
import { exerciseOptions, fetchData } from '../utils/fetchData';
const ExerciseDetail = () => {
  const [exerciseDetail, setExerciseDetail] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    const fetchExercisesData = async () => {
      const exerciseDbUrl = 'https://exercisedb.p.rapidapi.com';
      const exerciseDetailData = await fetchData(`${exerciseDbUrl}/exercises/exercise/${id}`, exerciseOptions);
      setExerciseDetail(exerciseDetailData);
    }
    fetchExercisesData();
  }, [id])
  
  return (
    <Box sx={{ mt: { lg: '96px', xs: '60px' } }}>
      <Detail exerciseDetail={exerciseDetail} />
      <ExerciseVideos/>
      <SimilarExercises/>
    </Box>
  )
}

export default ExerciseDetail