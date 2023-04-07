import { Box, Button, Typography } from '@mui/material'
import React from 'react'

const Hero = () => {
    return (
        <Box sx={{
            mt: { lg: '150px', xs: '70px'},
            ml: { sm: '50px'}
        }}>
            <Typography color='#3e680b' fontWeight='700px' fontSize='50px'>
                Salad Street
            </Typography>
            <Typography fontWeight='700' sx ={{ fontSize: {lg: '44px', xs: '40px'}}}>
                Simplifying your <br /> healthy eating lifestyle.
            </Typography>
            <Typography fontSize='22px' lineHeight='35px' mb='15px'>
                Don't break the bank eating healthy.
            </Typography>
            <Button variant='contained' color='success' href='#menu'>Menu Here</Button>
        </Box>
    )
}

export default Hero
