import React from 'react'
import { Stack, Typography } from '@mui/material';
import Icon from '../../assets/icons/gym.png';
import useStyles from './styles';
import './styles.css';
const BodyPart = ({ item, setBodyPart, bodyPart }) => {
  const classes = useStyles;
  return (
    <Stack
    type="button"
    alignItems="center"
    justifyContent="center"
    className="bodyPart-card"
    sx={bodyPart === item ? classes.selectedItem : classes.unselectedItem}
    onClick={() => {
      setBodyPart(item);
      window.scrollTo({ top: 1800, left: 100, behavior: 'smooth' });
    }}
  >
    <img src={Icon} alt="dumbbell" style={{ width: '40px', height: '40px' }} />
    <Typography fontSize="24px" fontWeight="bold" fontFamily="Alegreya" color="#3A1212" textTransform="capitalize"> {item}</Typography>
  </Stack>
  )
}

export default BodyPart