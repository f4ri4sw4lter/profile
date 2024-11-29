import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';

const pages = [
    {
        title: 'Sobre mi',
        href: '#about'
    },
    {
        title: 'Experiencia',
        href: '#experience'
    },
    {
        title: 'Proyectos',
        href: '#Projects'
    },
    {
        title: 'Educacion',
        href: '#education'
    }
];

function Nav() {

    return (
        <AppBar position="fixed" className="navbar" sx={{
            width: '10%',
            height: '100vh',
            top: 0,
            left: 0,
        }}>
            <Container maxWidth="xl">
                <Toolbar disableGutters position="fixed">
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: 'center' }}>
                        <ul className="list-content">
                            {pages.map((page) => (
                                <li className="list-item">
                                <Button
                                    key={page.title}
                                    href={page.href}
                                    sx={{ my: 2, color: 'white', display: 'block' }}
                                >
                                    {page.title}
                                </Button>
                                </li>
                            ))}
                        </ul>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    )
}

export default Nav;