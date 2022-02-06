import { useDispatch, useSelector } from 'react-redux';
import { Button } from '@mui/material';
import { counterDecrement } from '../../redux/counter/counter.actions';

const MinusButton = () => {
  const dispatch = useDispatch();
  const margin = useSelector((state) => state.counter.margin);

  return (
    <Button
      variant="contained"
      onClick={() => dispatch(counterDecrement())}
      data-testid="minus"
      disabled={margin === 0}
      color="warning"
    >
      Minus
    </Button>
  );
};

export default MinusButton;
