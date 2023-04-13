import * as React from 'react';
import Box from '@mui/material/Box';
import { Catalog } from '@components/UI/catalog';
import { SideList } from '@components/UI/sideList';
import * as Styled from './CatalogPage.styles';

const CatalogPage = () => {
  return (
    <>
      <Styled.CatalogPageContainer>
        <Styled.SideListContainer>
          <SideList />
        </Styled.SideListContainer>
        <Box sx={{ width: '100%' }}>
          <Catalog />
        </Box>
      </Styled.CatalogPageContainer>
    </>
  );
};

export default CatalogPage;
