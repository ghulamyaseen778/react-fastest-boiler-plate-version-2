import React from 'react'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
const TopHeadCmp = ({head}) => {
  return (
    <>
    <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            {head}
          </Typography>
    </>
  )
}

export default TopHeadCmp