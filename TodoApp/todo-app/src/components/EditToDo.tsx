import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { useHistory , useParams} from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { addTodos, getTodoById } from '../store/actions/todo.action';
const useStyles = makeStyles((theme) => ({
    root: {
        marginTop: 50,
        '& > *': {
            margin: theme.spacing(1),
            width: '45ch',
        },
    },
}));

export const EditTodo = () => {
    const id = useParams();
    console.log(id, '...id')
    const classes = useStyles();
    const history = useHistory();
    const dispatch = useDispatch();
    const toDoData = useSelector((state: any) => state.toDo.toDo);

    const [state, setState] = useState({
        title: '',
        activeState: '',
        endDate: ''
    });
    const [error, setError] = useState("")

    const { title, activeState, endDate } = state;
    
    useEffect(() => {
        dispatch(getTodoById(id))
    }, [])

    useEffect(() => {
        if(toDoData) {
            setState({...toDoData}) 
        }
    }, [toDoData])

    const handleChanges = (event: any) => {
        let { name, value } = event.target;

        setState({ ...state, [name]: value });
    }
    const handleSubmit = (e: any) => {
        e.preventDefault();
        if (!title || !activeState || !endDate) {
            console.log(endDate, '...')
            setError("Please Fill data")
        }
        else {
            dispatch(addTodos(state));
            history.push('/');
            setError("")
        }
    }

    return (
        <div>
            <Button variant="contained" color="primary" onClick={() => history.push('/')}>Back </Button>
            <h1>Edit To Do</h1>
            {error && <h3 style={{ color: "red" }}>{error}</h3>}
            <form className={classes.root} noValidate autoComplete="off" onSubmit={handleSubmit}>
                <TextField id="title" name="title" label="Title" value={title || ""} type="text" onChange={handleChanges} />
                <br />
                <TextField id="activeState" name="activeState" label="Active State" value={activeState || ""} type="text" onChange={handleChanges} />
                <br />
                <TextField
                    id="date"
                    label="End Date"
                    type="date"
                    name="endDate"
                    defaultValue={endDate || ""}
                    InputLabelProps={{
                        shrink: true,
                    }}
                    onChange={handleChanges}
                />
                <br />
                <Button variant="contained" color="primary" type="submit" onChange={handleChanges}>
                    Update
                </Button>

            </form>
        </div>
    )
}

export default EditTodo;
