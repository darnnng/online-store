import { useEffect } from 'react';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { Box, Chip, Divider, IconButton, Slider } from '@mui/material';
import { observer } from 'mobx-react-lite';
import { toJS } from 'mobx';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { fetchBrands, fetchTypes } from '@src/http/deviceAPI';
import itemStore from '@src/store/ItemsStore';
import { IType } from '@src/interfaces/IType';
import { IBrand } from '@src/interfaces/IBrand';
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
        disablePadding={true}
        sx={{ border: ' 1px solid lightgray', mt: '0px' }}
      >
        {typesList?.map((item: IType) => (
          <ListItemButton key={item.id} divider>
            <ListItemText primary={item.name} />
            <IconButton edge="end" aria-label="delete">
              <ChevronRightIcon />
            </IconButton>
          </ListItemButton>
        ))}
      </List>

      <Box sx={{ m: '30px 0px' }}>
        <Styled.FilterTitle>Manufacturer</Styled.FilterTitle>

        <Styled.ChipBox>
          {brandsList?.map((item: IBrand) => (
            <Chip key={item.id} label={item.name} variant="filled" sx={{ cursor: 'pointer' }} />
          ))}
        </Styled.ChipBox>
      </Box>
      <Divider />

      <Box sx={{ mt: '30px' }}>
        <Styled.FilterTitle>Price</Styled.FilterTitle>
        <Slider valueLabelDisplay="auto" />
      </Box>
    </>
  );
});
