import React from 'react'

import { Checkbox as MuiCheckBox, FormControl, FormControlLabel } from '@material-ui/core';

export default function CheckBox(props) {
    const { name, lable, value, onChange } = props;

    const convertToDefEventPara = (name, value) => ({
        target: {
            name, value
        }
    })

    return (
        <FormControl>
            <FormControlLabel
                control={
                <MuiCheckBox
                    checked={value}
                    onChange={ e => onChange(convertToDefEventPara(name, e.target.checked))}
                    name={name}
                    color="primary"
                />
                }
                    label={lable}
            />
      </FormControl>
    )
}
