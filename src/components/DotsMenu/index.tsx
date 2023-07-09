import {IconButton} from "@mui/material";
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import {useState} from "react";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import {ITask} from "../../interfaces/general";
import {useAppDispatch} from "../../hooks/redux";
import {setDeleteData, toggleDeleteModal} from "../../store/reducers/todoSlice";

interface IProps {
    todo: ITask;
}
export const DotsMenu =({todo}: IProps) => {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const dispatch = useAppDispatch();
    const handleDelete = (todo: ITask) => {
        dispatch(toggleDeleteModal())
        dispatch(setDeleteData(todo))
    };
    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div>
            <IconButton
                aria-label="more"
                id="long-button"
                aria-controls={open ? 'long-menu' : undefined}
                aria-expanded={open ? 'true' : undefined}
                aria-haspopup="true"
                onClick={handleClick}
            >
                <MoreVertIcon/>
            </IconButton>
            <Menu
                anchorEl={anchorEl}
                open={open}
                sx={{
                    '& .css-3dzjca-MuiPaper-root-MuiPopover-paper-MuiMenu-paper': {
                        boxShadow: 'none',
                    },
                }}
                onClose={handleClose}
                anchorOrigin={{ vertical: 'center', horizontal: 'center' }}
                transformOrigin={{ vertical: 'center', horizontal: 'center' }}

            >
            <MenuItem onClick={() => {
                    handleDelete(todo);
                    handleClose();
                }}>
                    <IconButton>
                        <DeleteForeverIcon sx={{ color: "#F33A3D", width: 16 }} />
                    </IconButton>
                </MenuItem>
            </Menu>
        </div>
    );
};
