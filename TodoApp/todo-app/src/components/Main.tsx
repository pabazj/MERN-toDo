import React, { useEffect } from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { useSelector, useDispatch } from 'react-redux';
import { deleteTodos, getTodos } from '../store/actions/todo.action';
import EditIcon from '@material-ui/icons/Edit';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import { useHistory } from 'react-router-dom';

const StyledTableCell = withStyles((theme) => ({
    head: {
        backgroundColor: theme.palette.secondary.light,
        color: theme.palette.common.white,
    },
    body: {
        fontSize: 14,
    },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
    root: {
        '&:nth-of-type(odd)': {
            backgroundColor: theme.palette.action.hover,
        },
    },
}))(TableRow);

const useStyles = makeStyles({
    table: {
        marginTop: 100,
        minWidth: 700,
    },
});

const Main = () => {

    const classes = useStyles();
    const dispatch = useDispatch();
    const history = useHistory();

    const toDoList = useSelector((state: any) => state.toDo.toDoList);

    useEffect(() => {
        dispatch(getTodos())
    }, []);

    const handleDelete = (id: string) => {
        if(window.confirm("Are you want to delete TODO?")) {
            dispatch(deleteTodos(id));
        }
    }

    return (
        <div>
            <div>
            <Button variant="contained" color="primary" onClick={() => history.push('/addTodo')}>
                Add
            </Button>
            </div>
            <TableContainer component={Paper}>
                <Table className={classes.table} aria-label="customized table">
                    <TableHead>
                        <TableRow>
                            <StyledTableCell>Title</StyledTableCell>
                            <StyledTableCell align="left">Acive State</StyledTableCell>
                            <StyledTableCell align="left">End Date</StyledTableCell>
                            <StyledTableCell align="left">Action</StyledTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {toDoList && toDoList.map((row: any) => (
                            <StyledTableRow key={row._id}>
                                <StyledTableCell component="th" scope="row">
                                    {row.title}
                                </StyledTableCell>
                                <StyledTableCell align="left">{row.activeState}</StyledTableCell>
                                <StyledTableCell align="left">{row.endDate}</StyledTableCell>
                                <StyledTableCell align="left">
                                    <div style={{
                                        position: 'relative',
                                        float: 'left',
                                        padding: '0 5px',
                                    }}><EditIcon  onClick={() => history.push(`/editTodo/${row._id}`)}/></div>
                                    <div style={{
                                        position: 'relative',
                                        float: 'left',
                                        padding: '0 5px',
                                    }}><DeleteForeverIcon onClick={() => handleDelete(row._id)}/></div>
                                </StyledTableCell>
                            </StyledTableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    )
}
export default Main;
