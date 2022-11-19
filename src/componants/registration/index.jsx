import React, { useEffect, useState } from 'react'
//firebase
import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../../config/firbase'
//react-router-dom
import { useNavigate } from 'react-router-dom'
//compontes
import InputCmp from '../InputCmp'
import CopyRightCmp from '../CopyRight'
import TopHeadCmp from '../TopHeadCmp'
import ButtonCmp from '../ButtonCmp'
//redux
import { useDispatch,useSelector } from 'react-redux'
import { LoginError } from '../../features/registrationSlice'
//mateiral-ui
import CssBaseline from '@mui/material/CssBaseline';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { createTheme, Link, ThemeProvider } from '@mui/material'
import { FetchUser } from '../../features/UsersSlice'



const LoginCmp = () => {
  const [Email, SetEmail] = useState("")
  const navigate = useNavigate()
  const [Password, SetPassword] = useState("")
  const ActiveUser = localStorage.getItem('User-Info')
  const dispatch = useDispatch()
  const {statement} = useSelector(state=>state.Registration)
  const {bool,status} = useSelector(state=>state.UserInfo)
  const theme = createTheme();


  useEffect(() => {
    if (ActiveUser) {
      navigate('/home')
    }
  }, [])

  const UserPatchUpLogin = () => {
    Email != "" && Password != "" ?
      signInWithEmailAndPassword(auth, Email, Password)
        .then((Response) => {
          const user = Response.user;
          localStorage.setItem('User-Info', user.uid)
          navigate('/home')
          SetEmail('')
          SetPassword('')
          // console.log('hello')
          dispatch(LoginError({bool:false,statement:[""]}))
          dispatch(FetchUser())
        })
        .catch((error) => {
          // console.log(error)
          dispatch(LoginError({bool:true,statement:["Please Enter Your correct "]}))
          SetEmail('')
          SetPassword('')
        })
      :
      dispatch(LoginError({bool:true,statement:["Please Enter Your "]}))
    SetEmail('')
    SetPassword('')
    // console.log(registration)
    // console.log(Loginerror)
  }
  return (
    <>
      <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <TopHeadCmp head="Sign In"/>
          <Box noValidate sx={{ mt: 1 }}>
        <InputCmp label="Email Address" id="email" autoComplete="email" placeholder="Enter your Email" onchange={(e) => SetEmail(e.target.value)} helper={`${statement[0]} Email Address`} value={Email} type='email'/>
        <InputCmp label="Password" id="password" autoComplete="current-password" placeholder="Enter your Password" onchange={(e) => SetPassword(e.target.value)} helper={`${statement[0]} Password`} value={Password} type="password"/>
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <ButtonCmp text="Sign In" type="submit" style={{ mt: 3, mb: 2 }} onclick={UserPatchUpLogin} />
              <Link href='/signup' variant="body2" sx={{
                display:'flex',
                alignItems:'center',
                justifyContent:'center'
              }}>
                  
                  {"Don't have an account? Sign Up"}
                </Link>
                
          </Box>
        </Box>
        <CopyRightCmp sx={{ mt: 8, mb: 4 }} />
      </Container>
    </ThemeProvider>
    </>
  )
}

export default LoginCmp