import React, { useEffect } from 'react'
import { Grid } from '@material-ui/core';

import { useForm, Form } from './useForm';
import Controls from './Controls/Controls';
import * as studentService from './Service/studentService';

const genderItems = [
    {id:'male',title:'Male'},
    {id:'female',title:'Female'},
    {id:'other',title:'Other'}
]

const initialFValues = {
    id: 0,
    fullName: '',
    email: '',
    mobile: '',
    city: '',
    gender: '',
    departmentId: '',
    isGraduate: false
}

export default function RegisterForm(props) {

    const { addOrEdit, recordForEdit } = props 
    
    const validate = (fieldValues = values) => {
        let temp = {...errors}
        if('fullName' in fieldValues)
        temp.fullName = fieldValues.fullName ? "" : "This field is required."
        if('email' in fieldValues)
        temp.email = (/\S+@\S+\.\S+/).test(fieldValues.email) ? "" : "Email is not valid."
        if('mobile' in fieldValues)
        temp.mobile = fieldValues.mobile.length > 9 ? "" : "Minimum 10 numbers required."
        if('city' in fieldValues)
        temp.city = fieldValues.city ? "" : "This field is required."
        if('gender' in fieldValues)
        temp.gender = fieldValues.gender ? "" : "This field is required."
        if('departmentId' in fieldValues)
        temp.departmentId = fieldValues.departmentId.length != 0 ? "" : "This field is required."
        setErrors({
            ...temp
        })
    
        if(fieldValues == values)
        return Object.values(temp).every( x => x == "")
    }
    
    const { values,
        setValues,
        errors,
        setErrors,
        handleInputChange,
    } =  useForm(initialFValues, true, validate)
    
    const handleSubmit = e => {
        e.preventDefault()
        if(validate()){
            addOrEdit(values)
            window.alert('Succesfully...')
        }
    }
    
    useEffect(() => {
        if(recordForEdit != null)
        setValues({
            ...recordForEdit
        })
    }, [recordForEdit])
    
        return (
            <Form onSubmit={handleSubmit}>
            <Grid container>
            <Grid item xs={6}>
                <Controls.Input 
                    name="fullName"
                    lable="Full Name"
                    value={values.fullName}
                    onChange = {handleInputChange}
                    error={errors.fullName}
                />
                <Controls.Input 
                    name="email"
                    lable="Email"
                    value={values.email}
                    onChange = {handleInputChange}
                    error={errors.email}
                />
                <Controls.Input 
                    name="mobile"
                    lable="Mobile"
                    value={values.mobile}
                    onChange = {handleInputChange}
                    error={errors.mobile}
                />
                <Controls.Input 
                    name="city"
                    lable="City"
                    value={values.city}
                    onChange = {handleInputChange}
                    error={errors.city}
                />
            </Grid>
            <Grid item xs={6}>
                <Controls.RadioGroup 
                    value={values.gender}
                    name="gender"
                    lable="Gender"
                    onChange={handleInputChange}
                    items={genderItems}
                    error={errors.gender}
                />
                <Controls.Select
                    name="departmentId"
                    lable="Department"
                    value={values.departmentId}
                    onChange={handleInputChange}
                    options={studentService.getDepartmentCollection()}
                    error={errors.departmentId}
                />
                <Controls.CheckBox
                    name="isGraduate"
                    lable="Graduate"
                    value={values.isGraduate}
                    onChange={handleInputChange}
                />

                <div>
                    <Controls.Button 
                        text="submit" 
                        type="Submit"
                    />
                </div>

            </Grid>
        </Grid>
        </Form>
        )
    }
