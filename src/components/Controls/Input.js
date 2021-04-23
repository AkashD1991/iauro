import React from 'react'

import { TextField } from '@material-ui/core';

export default function Input(props) {
    const { name, lable, value, error=null, onChange } = props;
    return (
        <TextField 
            value={value} 
            label={lable} 
            name={name}
            variant="outlined"
            onChange={onChange}
            {...(error && {error: true, helperText:error})}
        />
    )
}
