import { TextField } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { counterUpdateMargin } from '../../redux/counter/counter.actions';

const MarginInput = () => {
  const dispatch = useDispatch();
  const margin = useSelector((state) => state.counter.margin);
  return (
    <TextField
      value={margin}
      variant="outlined"
      type="number"
      id="margin"
      onChange={(e) => dispatch(counterUpdateMargin(e.target.value * 1))}
      // for testing testid gets passed as input props
      inputProps={{ 'data-testid': 'margin' }}
    />
  );
};

export default MarginInput;
