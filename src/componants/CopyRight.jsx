import React from 'react'
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';

const CopyRightCmp = (props) => {
  return (
          <Typography variant="body2" color="text.secondary" align="center" {...props}>
            {'Copyright © '}
              Your Website{' '}
            {new Date().getFullYear()}
            {'.'}
          </Typography>
        );
}

export default CopyRightCmp

