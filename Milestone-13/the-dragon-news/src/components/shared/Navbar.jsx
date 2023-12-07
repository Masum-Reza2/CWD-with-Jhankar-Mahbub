"use client"  // the most important keyword

import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Image from 'next/image';
import logo from '../../assets/Group.png'

// icons
import FacebookIcon from '@mui/icons-material/Facebook';
import { IconButton, Stack } from '@mui/material';
import Link from 'next/link';

const navItems = [
    {
        route: 'Home',
        pathName: '/'
    },
    {
        route: 'Pages',
        pathName: '/pages'
    },
    {
        route: 'Category',
        pathName: '/categories/news?category=all-news'
    },
    {
        route: 'News',
        pathName: '/news'
    },
    {
        route: 'About',
        pathName: '/about'
    },
    {
        route: 'Contact',
        pathName: '/contact'
    }
];

function Navbar() {

    return (
        <AppBar position="static" className='bg-black'>
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <Image src={logo} alt='logo' width={100} height={100} />
                    <Box className="w-full text-center">
                        {navItems.map((item) => (
                            <Link href={item?.pathName} key={item?.pathName}>
                                <Button className='text-white'>{item.route}</Button>
                            </Link>
                        ))}
                    </Box>
                    <Box>
                        <Stack sx={{
                            "& svg": {
                                color: "white"
                            }
                        }} direction="row">
                            <IconButton>
                                <FacebookIcon />
                            </IconButton>
                            <IconButton>
                                <FacebookIcon />
                            </IconButton>
                            <IconButton>
                                <FacebookIcon />
                            </IconButton>
                        </Stack>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
}
export default Navbar;