import React from 'react'
// import Box from '@mui/material/Box';
import { useSelector } from 'react-redux'
import TextField from '@mui/material/TextField';

const InputCmp = (props) => {
    // const [bool,setBool] = useState(true)
    const { Loginerror } = useSelector((state) => state.Registration)
    return (
       Loginerror? <TextField
       margin="normal"
            id={props.id}
            label={props.label}
            placeholder={props.placeholder}
            helperText={props.helper}
            required
            error
            onChange={props.onchange}
            autoFocus
            fullWidth
            autoComplete={props.autoComplete}
            value={props.value}
            type={props.type}
        />
       : <TextField
       margin="normal"
            id={props.id}
            label={props.label}
            placeholder={props.placeholder}
            required
            onChange={props.onchange}
            fullWidth
            autoComplete={props.autoComplete}
            value={props.value}
            type={props.type}
        />
    )
}

export default InputCmp