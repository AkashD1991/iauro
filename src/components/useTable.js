import React from 'react'
import { Table, TableCell, TableHead, TableRow, makeStyles, Typography } from '@material-ui/core';

const useStyles = makeStyles(theme =>({
    root: {
        marginLeft: theme.spacing(1),
        marginBottom: theme.spacing(1)
    },
    table: {
        marginTop: theme.spacing(3),
        '& thead th' : {
            fontWeight: '600',
            color: theme.palette.primary.main,
            backgroundColor: theme.palette.primary.light,
        },
        '& tbody td': {
            fontWeight: '300'
        },
        '& tbody tr:hover': {
            backgroundColor: '#fffbf2',
            cursor: 'pointer',
        }
    }
}))

export default function useTable(records, headCells) {

    const classes = useStyles();
    const TblContainer = props => (
        <Table className={classes.table}>
            {props.children}
        </Table>
    )

    const TblHead = props => {
        return(<TableHead>
            <Typography className={classes.root} variant="h5" component="h5"> Student Details </Typography>
            <TableRow>
                {
                    headCells.map(headCell => (<TableCell key={headCell.id}>
                        {headCell.label}
                    </TableCell>))
                }
            </TableRow>
        </TableHead>)
    }

    return {
        TblContainer,
        TblHead
}
}
