import React from 'react'
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import Avatar from '@mui/material/Avatar';
import {useDispatch,useSelector} from 'react-redux'
import { ModalOpen } from '../../features/registrationSlice';

const ModalCmp = ({func}) => {
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('md'));
    const {data} =useSelector((state)=>state.UserInfo)
    const {IfModal} =useSelector((state)=>state.Registration)
    const dispatch = useDispatch()
    const handleClose = () => {
        dispatch(ModalOpen(false))
      };
  return (
    <div>
    <Dialog
      fullScreen={fullScreen}
      open={IfModal}
      onClose={handleClose}
      aria-labelledby="responsive-dialog-title"
    >
      <DialogTitle id="responsive-dialog-title" sx={{display:'flex',justifyContent:'center'}}>
        <Avatar>N</Avatar>
      </DialogTitle>
      <DialogContent sx={{display:'flex',justifyContent:'center',"flex-direction":"column",alignItems:'center'}}>
        <DialogContentText>
          {data?.UserName}
        </DialogContentText>
        <DialogContentText>
          {data?.Email}
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button autoFocus onClick={handleClose}>
          Close
        </Button>
        <Button onClick={()=>{
            handleClose()
            func()
        }
            } 
            autoFocus variant="contained">
          Logout
        </Button>
      </DialogActions>
    </Dialog>
  </div>
  )
}

export default ModalCmp