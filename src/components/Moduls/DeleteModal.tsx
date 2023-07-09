import { Box, Modal, Button, Typography } from "@mui/material";
import {useAppDispatch, useAppSelector} from "../../hooks/redux";
import {setDeleteData, deleteTask, toggleDeleteModal} from "../../store/reducers/todoSlice";
import {toast} from "react-toastify";
export const DeleteModal = () => {
  const {showDeleteModal, deleteData} = useAppSelector((state) => state.todoReducer);
  const dispatch = useAppDispatch();
  const handleClose = () => {
    dispatch(toggleDeleteModal())
  };
  const handleDelete = () => {
      dispatch(deleteTask(deleteData?.id));
      dispatch(toggleDeleteModal())
      dispatch(setDeleteData(null))
      toast.error('you was delete task')
  }
  return (
    <>
      <Modal
        open={showDeleteModal}
        onClose={handleClose}
      >
        <Box
            sx={{
              position: "absolute" as "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: 400,
              bgcolor: "background.paper",
              boxShadow: 24,
              p: 4,
            }}
        >
          <Typography sx={{ mt: 2, mb: 2 }}>
            Are you sure you want to delete {deleteData?.title} Task?
          </Typography>

          <Button onClick={handleClose} color={'gringo'} variant="contained" fullWidth>
            Cancel
          </Button>
          <Button
              color="error"
              sx={{
                mt: 1,
              }}
              variant="contained"
              fullWidth
              onClick={handleDelete}
          >
            Delete
          </Button>
        </Box>
      </Modal>
    </>
  );
};
