import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import EditIcon from '@mui/icons-material/Edit';
import { Box } from '@mui/system';

import { useRef } from 'react';

import UpdateTodo from '../TodoForm/UpdateTodo';


export default ({todoId}) => {
  const ref = useRef();
  const closeTooltip = () => ref.current.close();
    return (
        <Popup trigger={<EditIcon/>} ref={ref} modal>
          <Box sx={{display: 'flex', justifyContent:'center'}}>
              <UpdateTodo todoId={todoId} closeTooltip={closeTooltip}/>
          </Box>
        </Popup>
      )
};