import { TextField } from '@mui/material';
import { useContext } from 'react';
import { CounterContext } from '../../providers/counter.provider';

const MarginInput = () => {
  const { margin, updateMargin } = useContext(CounterContext);
  return (
    <TextField
      value={margin}
      variant="outlined"
      type="number"
      id="margin"
      onChange={(e) => updateMargin(e.target.value * 1)}
      // for testing testid gets passed as input props
      inputProps={{ 'data-testid': 'margin' }}
      error={margin === 0}
      helperText={margin === 0 ? 'Cannot have margin of 0' : null}
    />
  );
};

export default MarginInput;
