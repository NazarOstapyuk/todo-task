import {Box, Typography} from "@mui/material";
import {useAppSelector} from "../../hooks/redux";
import {ITask} from "../../interfaces/general";
import { TodoForm } from "../TodoForm";
import {SearchFilter} from "../SearchFilter";
import {TodoItem} from "../TodoItem";

const Todos = () => {
    const {filterTasks, task} = useAppSelector((state) => state.todoReducer);
    return(
      <Box sx={{ display: "flex",flexDirection: 'column', justifyContent: "center", width: '100%', maxWidth: '485px' }}>
              <SearchFilter />
              <Box sx={{flexDirection: 'column', justifyContent: 'center',minHeight: '56px', margin: '16px 0', display: 'flex', alignItems: 'center'}}>
                  {filterTasks?.map((item: ITask) => <TodoItem todo={item} key={item.id} />)}
                  {!filterTasks.length && !task.length && <Typography color={'#5dcb42'}>You have not created any tasks yet</Typography>}
                  {!filterTasks.length && task.length ? <Typography color={'error'}>Tasks not found</Typography> : ''}
              </Box>
              <TodoForm />
      </Box>
  )
}
export default Todos;

