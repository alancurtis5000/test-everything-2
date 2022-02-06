import { useDispatch } from 'react-redux';
import { Button } from '@mui/material';
import { counterReset } from '../../redux/counter/counter.actions';

const ResetButton = () => {
  const dispatch = useDispatch();
  return (
    <Button
      variant="contained"
      color="secondary"
      onClick={() => dispatch(counterReset())}
      data-testid="reset"
    >
      Reset
    </Button>
  );
};

export default ResetButton;
