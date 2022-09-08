import React from 'react'
import { Box, Stack, Typography, Grid } from '@mui/material';

import HeroBannerImage from '../../assets/images/banner.png';
import './styles.css';
const HeroBanner = () => {
  return (
    <Box sx={{ mt: { lg: '50px', xs: '10px' }, ml: { sm: '50px' } }} position="relative" p="20px">
    <Grid
        container
        direction="row"
        justifyContent="space-between"
        alignItems="center"
    >
        <Grid item xs={12} md={6}>
            <Typography color="#FF2625" fontWeight="600" fontSize="26px">Fitness Club</Typography>
            <Typography fontWeight={700} sx={{ fontSize: { lg: '44px', xs: '40px' } }} mb="23px" mt="30px">
                Sweat, Smile <br />
                And Repeat
            </Typography>
            <Typography fontSize="22px" fontFamily="Alegreya" lineHeight="35px">
                Check out the most effective exercises personalized to you
            </Typography>
            <Stack>
                <a href="#exercises" style={{ marginTop: '45px', textDecoration: 'none', width: '200px', textAlign: 'center', background: '#FF2625', padding: '14px', fontSize: '22px', textTransform: 'none', color: 'white', borderRadius: '4px' }}>Explore Exercises</a>
            </Stack>
        </Grid>
        <Grid item xs={12} md={6}>
            <img src={HeroBannerImage} alt="hero-banner" className="hero-banner-img" />
        </Grid>
    </Grid>
  </Box>
  )
}

export default HeroBanner