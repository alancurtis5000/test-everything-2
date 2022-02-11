import { useContext } from 'react';
import { Typography, Container, Box, Alert } from '@mui/material';
import { APICallContext } from '../../providers/api-call.provider';

const Content = () => {
  const { isLoaded, data, error } = useContext(APICallContext);
  const { author, text } = data;

  const whatToRender = () => {
    switch (true) {
      case !isLoaded:
        return (
          <Typography variant="h6" component="div" data-testid="loading">
            ...Loading...
          </Typography>
        );
      case !!error:
        return (
          <Alert data-testid="alert" severity="error">
            {error}
          </Alert>
        );
      default:
        return (
          <Typography variant="subtitle1" component="div" data-testid="quote">
            {text}
          </Typography>
        );
    }
  };

  return (
    <Container>
      <Typography variant="h6" component="div">
        Quote:
      </Typography>
      {whatToRender()}
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'flex-end',
        }}
      >
        <Typography variant="h6" component="div">
          Author:
        </Typography>
        {author && (
          <Typography
            data-testid="author"
            variant="h6"
            component="div"
            sx={{ marginLeft: '6px' }}
          >
            {author}
          </Typography>
        )}
      </Box>
    </Container>
  );
};

export default Content;
