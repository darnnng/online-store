import { Box, styled } from '@mui/material';

export const FormBox = styled(Box)(({ theme }) => ({
  border: `${theme.palette.secondary.main} 2px solid`,
  borderRadius: '5px',
  padding: '25px',
  marginBottom: '50px',
}));
