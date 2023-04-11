/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect } from 'react';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { Box, Chip, IconButton, Slider } from '@mui/material';
import { observer } from 'mobx-react-lite';
import { toJS } from 'mobx';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { fetchBrands, fetchTypes } from '../../../http/deviceAPI';
import itemStore from '../../../store/ItemsStore';
import * as Styled from './sideList.styles';

export const SideList = observer(() => {
  useEffect(() => {
    fetchTypes().then((data) => itemStore.setTypes(data));
    fetchBrands().then((data) => itemStore.setBrands(data));
  }, []);

  const typesList = toJS(itemStore.types);
  const brandsList = toJS(itemStore.brands);

  return (
    <>
      <List
        component="nav"
        aria-label="main mailbox folders"
        disablePadding={false}
        sx={{ border: ' 1px solid lightgray', mt: '0px' }}
      >
        {typesList?.map((item: any) => (
          <ListItemButton key={item.id} divider>
            <ListItemText primary={item.name} />
            <IconButton edge="end" aria-label="delete">
              <ChevronRightIcon />
            </IconButton>
          </ListItemButton>
        ))}
      </List>

      <Box sx={{ mt: '30px' }}>
        <Styled.FilterTitle>Manufacturer</Styled.FilterTitle>
        <Styled.ChipBox>
          {brandsList?.map((item: any) => (
            <Chip key={item.id} label={item.name} variant="filled" sx={{ cursor: 'pointer' }} />
          ))}
        </Styled.ChipBox>
      </Box>

      <Box sx={{ mt: '30px' }}>
        <Styled.FilterTitle>Price</Styled.FilterTitle>
        <Slider valueLabelDisplay="auto" />
      </Box>
    </>
  );
});
