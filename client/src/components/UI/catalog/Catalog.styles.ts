import { Box, Button, Chip, Grid, styled } from '@mui/material';

export const Main = styled('main')({
  marginTop: '65px',
  overflowX: 'hidden',
  backgroundColor: '#f5f5f7',
  height: '100%',
});

export const GridContainer = styled(Grid)({
  justifyContent: 'center',
  alignItems: 'center',
  margin: '0',
  left: '0',
  right: '0',
});

export const ItemsListBox = styled(Grid)(() => ({
  display: 'flex',
  justifyContent: 'center',
  height: '100%',
  marginTop: '60px',
  flexWrap: 'wrap',
  columnGap: 20,
  rowGap: 20,
  padding: 10,
}));

export const ChipBox = styled(Box)(({ theme }) => ({
  margin: '20px',
  marginTop: '50px',
  display: 'flex',
  justifyContent: 'space-between',
  [theme.breakpoints.down('sm')]: {
    justifyContent: 'center',
    flexDirection: 'column',
  },
}));

export const SmallChip = styled(Chip)(() => ({
  width: '150px',
  backgroundColor: 'gray',
  color: 'white',
  '&:hover': {
    backgroundColor: '#595959',
  },
}));

export const ResetChip = styled(Chip)(() => ({
  width: '100px',
  backgroundColor: '#4d4d4d',
  color: 'white',
  '&:hover': {
    backgroundColor: '#595959',
  },
}));

export const SortButton = styled(Button)(({ theme }) => ({
  backgroundColor: 'gray',
  color: 'white',
  '&:hover': {
    backgroundColor: '#595959',
  },
  [theme.breakpoints.down('sm')]: {
    marginTop: '20px',
  },
}));
