import Background from "./components/Background";
import Todos from "./components/Todos";
import {Box} from "@mui/material";
import {DeleteModal} from "./components/Moduls/DeleteModal";
import ProgressBar from "./components/progress-bar";
import {ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

export const App = () => {
  return (
      <Box  sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          minHeight: '100vh',
      }}>
          <ToastContainer
              position="top-right"
              autoClose={1000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
              theme="light"
          />
          <DeleteModal/>
              <ProgressBar/>
              <Background/>
              <Todos/>
      </Box>
  );
};
