import React from 'react'

import { FormControl, FormControlLabel, FormHelperText, FormLabel, Radio, RadioGroup as MuiRadioGroup } from '@material-ui/core';


export default function RadioGroup(props) {

    const { name, lable, value, error=null, onChange, items} = props;

    return (
        <FormControl {...(error && {error: true, helperText:error})}>
            <FormLabel>{lable}</FormLabel>
                <MuiRadioGroup row
                    value={value}
                    name={name}
                    onChange={onChange}    
                >
                    {
                        items.map(
                            (item) => {
                                return <FormControlLabel key={item.id} value={item.id} control={<Radio color="primary" />} label={item.title} />
                            }
                        )
                    }
                </MuiRadioGroup>
                {error && <FormHelperText>{error}</FormHelperText>} 
        </FormControl>
    )
}
