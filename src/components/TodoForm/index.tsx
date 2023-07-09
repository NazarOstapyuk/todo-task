import { useCallback} from "react";
import { useForm } from "react-hook-form";

import {Box, Button, TextField} from "@mui/material";
import {useAppDispatch} from "../../hooks/redux";
import {TaskFormValues} from "./types";
import {addTask} from "../../store/reducers/todoSlice";
import {generateRandomId} from "../../helper/functions.helpers";


export const TodoForm = () => {
    const dispatch = useAppDispatch();
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<TaskFormValues>({
        defaultValues: {
            taskName: "",
        },
    });

    const onSubmit = useCallback(
        (data: TaskFormValues) => {
            const id = generateRandomId();
            dispatch(addTask({ ...data, id }));
            reset()
        },
        [dispatch, reset]
    );

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <Box mb={4} sx={{ display: "flex"}}>
                <TextField
                    sx={{ width: '100%', maxWidth: '355px', mr: '10px','& .MuiInputBase-root': {
                            height: '43px'
                        },
                        "& .MuiFormLabel-root": {
                            lineHeight: 'initial'
                        }
                    }}
                    label='Your task'
                    variant='outlined'
                    color={'gringo'}
                    {...register("taskName", {
                        required: "fill in the task",
                        minLength: {
                            value: 2,
                            message: "The task name should have at least 2 characters",
                        },
                    })}
                    error={Boolean(errors.taskName)}
                    helperText={errors.taskName?.message}
                />
                <Button sx={{width: '100%', maxWidth: '120px', height: '43px', '&:hover': {
                    backgroundColor: '#5dcb42', color: '#ffffff'}}}
                        color={'gringo'} type='submit' variant='outlined'>
                    Add
                </Button>
            </Box>
        </form>
    );
};
