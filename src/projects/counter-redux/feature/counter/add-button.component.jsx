import { useDispatch, useSelector } from 'react-redux';
import { Button } from '@mui/material';
import { counterIncrement } from '../../redux/counter/counter.actions';

const AddButton = () => {
  const dispatch = useDispatch();
  const margin = useSelector((state) => state.counter.margin);

  return (
    <Button
      variant="contained"
      onClick={() => dispatch(counterIncrement())}
      data-testid="add"
      fullWidth
      disabled={margin === 0}
    >
      Add
    </Button>
  );
};

export default AddButton;
