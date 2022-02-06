import { TextField } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { counterUpdateMargin } from '../../redux/counter/counter.actions';

const MarginInput = () => {
  const dispatch = useDispatch();
  const margin = useSelector((state) => state.counter.margin);
  return (
    <div className="example-counter-margin">
      <TextField
        value={margin}
        variant="outlined"
        type="number"
        id="margin"
        onChange={(e) => dispatch(counterUpdateMargin(e.target.value * 1))}
        data-testid="margin"
      />
    </div>
  );
};

export default MarginInput;
