/* eslint-disable @typescript-eslint/no-explicit-any */
import * as React from 'react';
import Box from '@mui/material/Box';
import { Catalog } from '../../UI/catalog';
import { SideList } from '../../UI/sideList';

const CatalogPage = () => {
  return (
    <>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          flexDirection: 'row',
          rowGap: '0px',
        }}
      >
        <Box
          sx={{
            width: '100%',
            maxWidth: '250px',
            bgcolor: 'background.paper',
            marginTop: '90px',
            mr: '40px',
            ml: '40px',
          }}
        >
          <SideList />
        </Box>
        <Box sx={{ width: '100%' }}>
          <Catalog />
        </Box>
      </Box>
    </>
  );
};

export default CatalogPage;
