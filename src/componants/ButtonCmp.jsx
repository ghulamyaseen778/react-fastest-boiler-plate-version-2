import React from 'react'
import Button from '@mui/material/Button';

const ButtonCmp = ({text,onclick,type,style}) => {
  return (
    <>
    <Button variant="contained" fullWidth type={type} sx={style} onClick={onclick}>{text}</Button>
    </>
    )
}

export default ButtonCmp