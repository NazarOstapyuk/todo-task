import {  useCallback } from "react";

import { Box, Checkbox, Typography } from "@mui/material";
import {useAppDispatch} from "../../hooks/redux";
import { actionTask} from "../../store/reducers/todoSlice";
import {ITask} from "../../interfaces/general";
import {DotsMenu} from "../DotsMenu";

interface IProps {
  todo: ITask;
}

export const TodoItem = ({ todo }: IProps) => {
  const { title, done, id } = todo;
  const dispatch = useAppDispatch();

  const toggleTodo = useCallback(() => {
    dispatch(actionTask(id));
  }, [id, dispatch]);


  return (
    <Box sx={{width: '100%',display: 'flex', alignItems: 'center', '&:hover': {background: '#F3F3F3'}}}>
      <Box>
        <Checkbox color={'gringo'} aria-label='done' checked={done} onChange={toggleTodo} />
      </Box>
      <Typography  sx={{width: '100%', fontSize: '14px', textDecoration: `${done ? 'line-through' : 'none'}`}}>{title}</Typography>
        <DotsMenu todo={todo}/>
    </Box>
  );
};
