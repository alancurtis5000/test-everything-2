import { Typography, Container, Box, Alert } from '@mui/material';
import { useSelector } from 'react-redux';

const Content = () => {
  const { author, text } = useSelector((state) => state.apiCall.data);
  const isLoaded = useSelector((state) => state.apiCall.isLoaded);
  const error = useSelector((state) => state.apiCall.error);

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
