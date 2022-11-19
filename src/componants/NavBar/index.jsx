import React, { useEffect, useState } from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import { useNavigate } from 'react-router-dom';
import {useSelector,useDispatch} from 'react-redux'
import { ModalOpen } from '../../features/registrationSlice'; 
// import {ModalCmp} from './ModalCmp'
import ModalCmp from './ModalCmp';
import { FetchUser } from '../../features/UsersSlice';



const NavBarCmp = () => {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);
  const navigate = useNavigate()
  const {bool,data} = useSelector(state=>state.UserInfo)
  const dispatch = useDispatch()

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  const handleClickOpen = ()=>{
    dispatch(ModalOpen(true))
  }
  const UserLogOut = () =>{
    localStorage.removeItem('User-Info')
    navigate('/')
    dispatch(FetchUser())
  }

const pages = [{text:'Products', Path:"/product"}, {text:'Pricing', Path:"/pricing"}, {text:'Blog', Path:"/blog"}];
const ActionButtons = [{text:"Sign In", func:()=>navigate('/')}, {text:"Sign Up", func:()=>navigate('/signup')}];
const settings = [{text:'Profile', func:()=>handleClickOpen()}, {text:'Logout', func:()=>UserLogOut()} ];
  return (
    <>
      <AppBar position="static">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
            <Typography
              variant="h6"
              noWrap
              component="a"
              // href="/"
              onClick={()=>navigate('/home')}
              sx={{
                mr: 2,
                display: { xs: 'none', md: 'flex' },
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: 'inherit',
                textDecoration: 'none',
                cursor:"pointer"
              }}
            >
              LOGO
            </Typography>

            <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'left',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'left',
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: 'block', md: 'none' },
                }}
              >
                {pages.map((page) => (
                  <MenuItem key={page.text} onClick={handleCloseNavMenu}>
                    <Typography textAlign="center">{page.text}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
            <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
            <Typography
              variant="h5"
              noWrap
              component="a"
              href=""
              sx={{
                mr: 2,
                display: { xs: 'flex', md: 'none' },
                flexGrow: 1,
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: 'inherit',
                textDecoration: 'none',
              }}
            >
              LOGO
            </Typography>
            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
              {pages.map((page) => (
                <Button
                  key={page.text}
                  onClick={()=>{
                    handleCloseNavMenu()
                    navigate(page.Path)
                  }}
                  sx={{ my: 2, color: 'white', display: 'block' }}
                >
                  {page.text}
                </Button>
              ))}
            </Box>

            <Box sx={{ flexGrow: 0 ,display: { xs: 'none', md: 'flex' }}}>
              {!bool?
                ActionButtons.map((ActionButtons) => (
                <Button
                  key={ActionButtons.text}
                  onClick={()=>{
                    handleCloseNavMenu()
                    ActionButtons.func()
                  }}
                  sx={{ mx: 1, color: 'white', display: 'block' }}
                  color="secondary"
                  variant="contained"
                >
                  {ActionButtons.text}
                </Button>
              ))
            :<><Tooltip title="Open settings">
            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
              <Avatar>{data.UserName[0]}</Avatar>
            </IconButton>
          </Tooltip>
          <Menu
            sx={{ mt: '45px' }}
            id="menu-appbar"
            anchorEl={anchorElUser}
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            keepMounted
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            open={Boolean(anchorElUser)}
            onClose={handleCloseUserMenu}
          >
            {settings.map((setting) => (
              <MenuItem key={setting.text} onClick={()=>{
                handleCloseUserMenu()
                setting.func()
                }}>
                <Typography textAlign="center">{setting.text}</Typography>
              </MenuItem>
            ))}
            <MenuItem onClick={()=>navigate('/admin/admin')}>
            {data?.Role=="admin"?
                <Typography textAlign="center">DashBoard</Typography>:<></>}
            </MenuItem>
          </Menu></>
            }
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      <ModalCmp func={UserLogOut}/>
    </>
  )
}

export default NavBarCmp