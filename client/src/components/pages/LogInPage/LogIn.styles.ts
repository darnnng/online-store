import { Button, Grid, Paper, styled } from '@mui/material';

export const Main = styled('main')({
  marginTop: '65px',
  overflowX: 'hidden',
});

export const GridContainer = styled(Grid)({
  justifyContent: 'center',
  alignItems: 'center',
  margin: '0',
  left: '0',
  right: '0',
});

export const PaperContainer = styled(Paper)({
  padding: '10px',
  height: 450,
  width: 550,
  margin: '80px auto',
});

export const ButtonSubmitForm = styled(Button)(({ theme }) => ({
  height: 50,
  marginTop: '16px',
  color: 'white',
  textDecoration: 'none',
  backgroundColor: theme.palette.secondary.main,
}));

export const ButtonLink = styled(Button)(({ theme }) => ({
  height: '50px',
  marginTop: '16px',
  color: theme.palette.secondary.main,
})) as typeof Button;

export const FormSign = styled('form')({
  width: '100%',
});
