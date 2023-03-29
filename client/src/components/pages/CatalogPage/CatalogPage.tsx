import * as React from 'react';
import Box from '@mui/material/Box';
import { Catalog } from './../../catalog';
import { SideList } from './../../sideList';

const CatalogPage = () => {
  return (
    <Box
      sx={{ display: 'flex', justifyContent: 'space-between', flexDirection: 'row', rowGap: '0px' }}
    >
      <Box sx={{ width: '100%', maxWidth: 300, bgcolor: 'background.paper', marginTop: '90px' }}>
        <SideList />
      </Box>
      <Box sx={{ width: '100%' }}>
        <Catalog />
      </Box>
    </Box>
  );
};

export default CatalogPage;
