import { Grid, styled } from '@mui/material';

export const Main = styled('main')({
  marginTop: '65px',
  overflowX: 'hidden',
  backgroundColor: '#f5f5f7',
});

export const GridContainer = styled(Grid)({
  display: 'flex',
  justifyContent: 'center',
  flexDirection: 'column',
  alignItems: 'center',
  margin: '0',
  left: '0',
  right: '0',
});

export const TitleTypography = styled(Grid)({
  fontSize: '28px',
  margin: '30px auto',
});

export const AdminButton = styled(Grid)(({ theme }) => ({
  backgroundColor: theme.palette.secondary.main,
  color: 'white',
  width: '250px',
  marginBottom: '30px',
  borderRadius: '10px',
  height: '50px',
  textAlign: 'center',
  alignItems: 'center',
  '&:hover': {
    backgroundColor: 'gray',
    cursor: 'pointer',
  },
}));
