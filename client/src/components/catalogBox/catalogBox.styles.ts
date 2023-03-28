import { Paper, styled } from '@mui/material';

export const SingleBox = styled(Paper)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  padding: '10px',
  height: '300px',
  width: '300px',
  rowGap: '10px',
  borderRadius: '10px',
  '&:hover': {
    backgroundColor: '#eeeeee',
    transition: '0.5s',
    cursor: 'pointer',
  },
}));
