/* eslint-disable @typescript-eslint/no-explicit-any */
import { Box, Container } from '@mui/material';
import { observer } from 'mobx-react-lite';
import React, { useEffect } from 'react';
import { toJS } from 'mobx';
import { CatalogBox } from './../catalogBox/CatalogBox';
import itemStore from './../../store/ItemsStore';
import * as Styled from './Catalog.styles';
import { SearchBox } from './../searchBox';
import { fetchDevices } from './../../http/deviceAPI';
import { IDevice, IDeviceData } from './../../store/item.interface';

export const Catalog = observer(() => {
  useEffect(() => {
    fetchDevices().then((data) => itemStore.setDevices(data));
  }, []);

  const listOfDevices = toJS(itemStore.devices.rows);

  return (
    <Styled.Main>
      <Container maxWidth="xl" sx={{ height: '100%', pb: 2 }}>
        <Styled.GridContainer>
          <Styled.ChipBox>
            <Box>
              <SearchBox />
            </Box>
            <Box>
              <Styled.SortButton>Sort by price</Styled.SortButton>
            </Box>
          </Styled.ChipBox>

          <Styled.ItemsListBox container>
            {listOfDevices?.length
              ? listOfDevices?.map((item: IDevice) => <CatalogBox key={item.id} item={item} />)
              : 'No items were found'}
          </Styled.ItemsListBox>
        </Styled.GridContainer>
      </Container>
    </Styled.Main>
  );
});
