import { Box } from '@mui/material'
import React from 'react'
import Hero from '../components/Hero'
import Contact from '../components/Contact'
import Salads from '../components/Salads'

const Home = () => {
    return (
        <Box>
            <Hero/>
            <Contact/>
            <Salads/>
        </Box>
    )
}

export default Home
