import React, { useState } from 'react'
import { Paper, makeStyles, TableBody, TableRow, TableCell, Typography} from '@material-ui/core';

import Controls from './Controls/Controls';
import * as studentService from './Service/studentService';
import EditOutlinedIcon from '@material-ui/icons/EditOutlined';
import DeleteOutlinedIcon from '@material-ui/icons/DeleteOutlined';
import useTable from './useTable';
import RegisterForm from './RegisterForm';

const useStyles = makeStyles(theme => ({
    root: {
        marginLeft: theme.spacing(1)
    },
    pageContent: {
        margin: theme.spacing(5),
        padding: theme.spacing(3),
        backgroundImage: `url(${"iauro/src/components/Image/backgroundImage.png"})`
    }
}))

const headCells = [
    { id: 'fullName', label: 'Employee Name'},
    { id: 'email', label: 'Email'},
    { id: 'mobile', label: 'Mobile Number'},
    { id: 'department', label: 'Department'},
    { id: 'actions', label:'Actions'}
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

export default function Register() {
    const classes = useStyles();
    const [recordForEdit, setRecordForEdit] = useState(null)
    const [records, setRecords] = useState(studentService.getAllStudents())
    const {
        TblContainer,
        TblHead
    } = useTable(records, headCells);

const addOrEdit = (student) =>{
    if (student.id == 0)
        studentService.insertStudent(student)
    else
        studentService.updateStudent(student)
    setRecordForEdit(null)
    setRecords(studentService.getAllStudents())
}

const deleteStud = (id) => {
    studentService.deleteStudent(id)
    setRecordForEdit(null)
    setRecords(studentService.getAllStudents())
}

const openForEdit = item => {
    setRecordForEdit(item)
}

    return (
        <>
       <Paper className={classes.pageContent}>
       <Typography className={classes.root} variant="h5" component="h5"> Student Register </Typography>
       <RegisterForm
            recordForEdit={recordForEdit}
            addOrEdit={addOrEdit}
        />
            <TblContainer>
            <TblHead />
            <TableBody>
                {
                    records.map((item, index) =>
                        (<TableRow key={item.id}>
                            <TableCell>{item.fullName}</TableCell>
                            <TableCell>{item.email}</TableCell>
                            <TableCell>{item.mobile}</TableCell>
                            <TableCell>{item.department}</TableCell>
                            <TableCell>
                                <Controls.ActionButton
                                    color="primary"
                                    onClick={() => { openForEdit(item) }}
                                >
                                        <EditOutlinedIcon fontSize="small"/>
                                </Controls.ActionButton>
                                <Controls.ActionButton
                                    color="secondary"
                                    onClick={() => { deleteStud(index) }}
                                    >
                                        <DeleteOutlinedIcon fontSize="small"/>
                                </Controls.ActionButton>
                            </TableCell>
                        </TableRow>
                    ))
                }
            </TableBody>
        </TblContainer>
       </Paper>
        </>
    )
}
