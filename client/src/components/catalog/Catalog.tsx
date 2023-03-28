import { Box, Container, IconButton } from '@mui/material';
import { observer } from 'mobx-react-lite';
import React from 'react';
import CloseIcon from '@mui/icons-material/Close';
import { CatalogBox } from './../catalogBox/CatalogBox';
import itemStore from './../../store/ItemsStore';
import * as Styled from './Catalog.styles';

export const Catalog = observer(() => {
  return (
    <Styled.Main>
      <Container maxWidth="xl" sx={{ height: '100%', pb: 2 }}>
        <Styled.GridContainer>
          <Styled.ChipBox>
            <Box sx={{ display: 'flex', columnGap: '15px' }}>
              <Styled.SmallChip label="Mobile phones" variant="filled" />
              <Styled.SmallChip label="Laptops" variant="filled" />
              <Styled.SmallChip label="Headphones" variant="filled" />
              <IconButton>
                <CloseIcon />
              </IconButton>
            </Box>
            <Box>
              <Styled.SortButton>Sort by price</Styled.SortButton>
            </Box>
          </Styled.ChipBox>

          <Styled.ItemsListBox container>
            {itemStore.devices.length
              ? itemStore.devices?.map((item) => <CatalogBox key={item.id} item={item} />)
              : 'No items were found'}
          </Styled.ItemsListBox>
        </Styled.GridContainer>
      </Container>
    </Styled.Main>
  );
});
