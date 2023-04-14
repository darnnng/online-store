import { Box, styled } from '@mui/material';

export const CatalogPageContainer = styled(Box)(() => ({
  display: 'flex',
  justifyContent: 'space-between',
  flexDirection: 'row',
  rowGap: '0px',
}));

export const SideListContainer = styled(Box)(() => ({
  width: '100%',
  maxWidth: '250px',
  backgroundColor: 'background.paper',
  margin: '145px 40px 0px',
}));
