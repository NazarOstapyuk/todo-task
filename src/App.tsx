import Background from "./components/Background";
import Todos from "./components/Todos";
import {Box} from "@mui/material";
import {DeleteModal} from "./components/Moduls/DeleteModal";
import ProgressBar from "./components/progress-bar";

export const App = () => {
  return (
      <Box  sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          minHeight: '100vh',
      }}>
          <DeleteModal/>
          <ProgressBar/>
          <Background/>
          <Todos/>
      </Box>
  );
};
