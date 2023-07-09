import { useState, useEffect } from "react";

import {Box, Button, TextField} from "@mui/material";
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import {useAppDispatch, useAppSelector} from "../../hooks/redux";
import {allTasks, completeTasks, searchFilter} from "../../store/reducers/todoSlice";
import {useBoolean} from "../../hooks/use-boolean";
import useDebounce from "../../hooks/use-debounce";
import { CustomButton } from "../CustomButton";

export const SearchFilter = () => {
  const dispatch = useAppDispatch();
  const isAll = useBoolean(true);
    const {task} = useAppSelector((state) => state.todoReducer);
    const [searchText, setSearchText] = useState("");
    const debouncedSearchTerm = useDebounce(searchText, 500) as any;

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
        <CustomButton
            text="All"
            showStartIcon={false}
            mr={'10px'}
            isActive={isAll.value}
            onClick={isAll.onTrue}
        />

        <CustomButton
            text="Done"
            showStartIcon={true}
            isActive={!isAll.value}
            onClick={isAll.onFalse}
        />
    </Box>
  );
};
