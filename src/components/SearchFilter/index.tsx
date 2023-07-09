import React, { useState, useEffect } from "react";

import {Box, Button, TextField} from "@mui/material";
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import {useAppDispatch, useAppSelector} from "../../hooks/redux";
import {allTasks, completeTasks, searchFilter} from "../../store/reducers/todoSlice";
import {useBoolean} from "../../hooks/use-boolean";
import useDebounce from "../../hooks/use-debounce";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    button: {
        width: '100%',
        maxWidth: '87px',
        height: '43px',
        fontSize: '14px',
        color: '#5dcb42',
        backgroundColor: '',
        '&:hover': {
            backgroundColor: '',
            color: '#5dcb42',
        },
    },
    activeButton: {
        backgroundColor: '#5dcb42',
        color: '#ffffff',
        '&:hover': {
            backgroundColor: '#5dcb42',
            color: '#ffffff',
        },
    },
});
export const SearchFilter = () => {
  const dispatch = useAppDispatch();
  const isAll = useBoolean(true);
    const {task} = useAppSelector((state) => state.todoReducer);
    const [searchText, setSearchText] = useState("");
    const debouncedSearchTerm = useDebounce(searchText, 500) as any;
    const classes = useStyles();

    useEffect(() => {
    if (isAll.value){
        dispatch(allTasks());
    } else {
        dispatch(completeTasks());
    }
  }, [isAll.value, task])
    useEffect(() => {
        if (debouncedSearchTerm) {
            dispatch(searchFilter(searchText))
        }else {
            if (isAll.value){
                dispatch(allTasks());
            } else {
                dispatch(completeTasks());
            }
        }
    }, [debouncedSearchTerm, task, isAll.value])

    const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchText(e.target.value);
    };
  return (
    <Box mt={3} sx={{ display: "flex" }}>
        <TextField
            sx={{ width: '100%', maxWidth: '300px', mr: '10px','& .MuiInputBase-root': {
                    height: '43px'
                },
                "& .MuiFormLabel-root": {
                    lineHeight: 'initial'
                }
            }}
            label='Search by text'
            variant='outlined'
            color={'gringo'}
            value={searchText}
            onChange={handleSearchChange}
        />
        <Button
            onClick={isAll.onTrue}
            className={`${classes.button} ${isAll.value ? classes.activeButton : ''}`}
            color="gringo"
            variant="outlined"
            style={{
                backgroundColor: isAll.value ? '#5dcb42' : '',
                color: isAll.value ? '#ffffff' : '#5dcb42',
                marginRight: '10px'
            }}
        >
            All
        </Button>
        <Button
            onClick={isAll.onFalse}
            className={`${classes.button} ${!isAll.value ? classes.activeButton : ''}`}
            color="gringo"
            variant="outlined"
            startIcon={<CheckCircleOutlineIcon style={{ fontSize: '16px' }} />}
            style={{
                backgroundColor: !isAll.value ? '#5dcb42' : '',
                color: !isAll.value ? '#ffffff' : '#5dcb42',
            }}
        >
            Done
        </Button>
    </Box>
  );
};
