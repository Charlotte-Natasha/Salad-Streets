import React from 'react'
import { Link } from 'react-router-dom'
import { Stack } from '@mui/material'

import logo from '../images/slogo.png'

const Navbar = () => {
    return (
        <Stack direction='row' justifyContent='space-around' sx={{ gap: {sm: '122px', xs: '40px'}, mt: {sm: '26px', xs: '16px'}, justifyContent: 'none'}} px='20px'>
            <Link to='/'>
            <img src={logo} alt="logo" style={{width: '50px', height: '50px', margin: '0 20px'
            }}/>
            </Link>
            <Stack direction='row' alignItems='flex-end' gap='40px '>
                <Link to='/' style={{textDecoration: 'none'}}>Home</Link>
                <Link to='/'>About</Link>
            </Stack>
        </Stack>
    )
}

export default Navbar
