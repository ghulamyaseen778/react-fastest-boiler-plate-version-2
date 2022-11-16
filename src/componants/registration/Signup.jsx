import React,{useEffect,useState} from 'react'
import { auth, db } from '../../config/firbase';
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { collection, doc, setDoc} from 'firebase/firestore'
import {useNavigate} from 'react-router-dom'
import InputCmp from '../InputCmp';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import ButtonCmp from '../ButtonCmp';
import CopyRightCmp from '../CopyRight';
import TopHeadCmp from '../TopHeadCmp';
import { useDispatch, useSelector } from 'react-redux';
import { LoginError } from '../../features/registrationSlice';
const SignUpCmp = () => {

  const Userdata = collection(db, "Users")
  const navigate = useNavigate()
  const [UserName, SetUserName] = useState("")
  const [Email, SetEmail] = useState("")
  const [Password, SetPassword] = useState("")
  const ActiveUser = localStorage.getItem('User-Info')
  const {statement} = useSelector(state=>state.Registration)
  const dispatch = useDispatch()
  
  const theme = createTheme();


  useEffect(
    () => {
      if (ActiveUser) {
        navigate('/home')
        }
    }, []
  )

  const UserSignUp = {
    UserName,
    Email,
    Password,
    Role:"User"
  }



  const UserPatchUpSignUp = () => {
    // console.log(UserSignUp)
    // dispatch(allAction.UserSignUp(UserSignUp))
    UserName.trim() != "" && Email.trim() != "" && Password.trim() != "" ?
 UserName.trim().length <= 13 && UserName.trim().length > 3 ?
        createUserWithEmailAndPassword(auth, Email, Password)
          .then((Response) => {
            const user = Response.user
            localStorage.setItem('User-Info', user.uid)
            async function SingUp() {
              const Ref = doc(db, 'Users', `${user.uid}`)
              await setDoc(Ref, UserSignUp)
              dispatch(LoginError({bool:false,statement:[""]}))
            }
            SingUp()
            navigate('/home')
          })
          .catch((erorr) => {
            console.log(console.log(erorr))
            dispatch(LoginError({bool:true,statement:["Please Enter Your correct "]}))
          })
        :
        dispatch(LoginError({bool:true,statement:["Please Enter Your correct ","Please enter Min 3 digits in username and max 13 digits"]})) :
        dispatch(LoginError({bool:true,statement:["Please Enter Your "]}))

    SetUserName("")
    SetEmail("")
    SetPassword("")
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
          <TopHeadCmp head="Sign Up"/>
          <Box noValidate sx={{ mt: 1 }}>
            <Grid container spacing={1}>
              <Grid item xs={12}>
                <InputCmp label="Full Name" id="lastName" autoComplete="given-name" placeholder="Enter your Full Name" onchange={(e) => SetUserName(e.target.value)} helper={statement[1]?statement[1]:`${statement[0]} UserName`} value={UserName} type='text' />
              </Grid>
              <Grid item xs={12}>
                <InputCmp label="Email Address" id="email" autoComplete="email" placeholder="Enter your Email" onchange={(e) => SetEmail(e.target.value)} helper={`${statement[0]} Email`} value={Email} type="email" />
              </Grid>
              <Grid item xs={12}>
                <InputCmp label="Password" id="password" autoComplete="new-password" placeholder="Enter your Password" onchange={(e) => SetPassword(e.target.value)} helper={`${statement[0]}  Password`} value={Password} type="password" />
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  control={<Checkbox value="allowExtraEmails" color="primary" />}
                  label="Remember Me."
                />
              </Grid>
            </Grid>
            <ButtonCmp text="Sign Up" type="submit" style={{ mt: 3, mb: 2 }} onclick={UserPatchUpSignUp} />
              <Link href='/' variant="body2" sx={{
                display:'flex',
                alignItems:'center',
                justifyContent:'center'
              }}>
                  
                  {"Already have an account? Sign in"}
                </Link>
          </Box>
        </Box>
        <CopyRightCmp sx={{ mt: 8, mb: 4 }} />
      </Container>
    </ThemeProvider>
    </>
  )
}

export default SignUpCmp