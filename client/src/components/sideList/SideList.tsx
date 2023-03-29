/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect } from 'react';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import { Chip } from '@mui/material';
import { observer } from 'mobx-react-lite';
import { toJS } from 'mobx';
import { fetchBrands, fetchTypes } from './../../http/deviceAPI';
import itemStore from './../../store/ItemsStore';

export const SideList = observer(() => {
  useEffect(() => {
    fetchTypes().then((data) => itemStore.setTypes(data));
    fetchBrands().then((data) => itemStore.setBrands(data));
  }, []);

  const typesList = toJS(itemStore.types);
  const brandsList = toJS(itemStore.brands);

  return (
    <>
      <List component="nav" aria-label="main mailbox folders">
        {typesList?.map((item: any) => (
          <ListItemButton key={item.id}>
            <ListItemText primary={item.name} />
          </ListItemButton>
        ))}
      </List>
      <Divider />
      <List component="nav" aria-label="secondary mailbox folder">
        {brandsList?.map((item: any) => (
          <ListItemButton key={item.id}>
            <Chip label={item.name} variant="filled" />
          </ListItemButton>
        ))}
      </List>
    </>
  );
});
