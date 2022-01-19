import * as React from 'react';
import { styled } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { Link } from 'react-router-dom';

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
    alignItems: 'flex-start',
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(2),
    // Override media queries injected by theme.mixins.toolbar
    '@media all': {
        minHeight: 60,
    },
}));





const options = [
    'Introduction',
    'Summary Of Qualification',
    'Work Experience',
    'Languages Known',
    'Skills',
    'Cerificates',
    'Seminars',
    'Refrences',
    'Contact Me',
];

// const ITEM_HEIGHT = 48;


export default function ProminentAppBar() {

    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar className="navbar-mui" position="static">
                <StyledToolbar>
                    <Typography
                        marginTop={1.5}
                        variant="h5"
                        noWrap
                        component="div"
                        sx={{ flexGrow: 1, alignSelf: 'flex-start' }}
                    >
                        Harsh Gohil
                    </Typography>

                    <IconButton
                        size="large"
                        aria-label="display more actions"
                        edge="end"
                        color="inherit"
                        id="long-button"
                        aria-controls={open ? 'long-menu' : undefined}
                        aria-expanded={open ? 'true' : undefined}
                        aria-haspopup="true"
                        onClick={handleClick}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Menu
                        id="long-menu"
                        MenuListProps={{
                            'aria-labelledby': 'long-button',
                        }}
                        anchorEl={anchorEl}
                        open={open}
                        onClose={handleClose}
                    >
                        {options.map((option) => (
                            <Link className='text-decoration-none text-dark' to={`/${option}`}>
                                <MenuItem key={option} selected={option === 'Pyxis'} onClick={handleClose}>
                                {option}
                            </MenuItem>
                            </Link>
                        )
                        )}
                    </Menu>
                </StyledToolbar>
            </AppBar>
        </Box>
    );
}




