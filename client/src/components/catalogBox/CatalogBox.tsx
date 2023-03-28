import { Box, Typography } from '@mui/material';
import { observer } from 'mobx-react-lite';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { RoutePath } from './../../constants/routeVariables';
import { IItemBoxProps } from './CatalogBox.interface';
import * as Styled from './catalogBox.styles';

export const CatalogBox = observer(({ item }: IItemBoxProps) => {
  const navigate = useNavigate();

  const handleMovieInfo = () => {
    navigate(`/${RoutePath.CATALOG}/${item.id}`);
  };
  return (
    <Styled.SingleBox onClick={handleMovieInfo}>
      <Box
        component="img"
        sx={{
          height: 200,
          width: 200,
          margin: 'auto',
        }}
        alt="Device poster"
        src={item.img}
      />
      <Typography sx={{ height: '38px' }}>{item.name}</Typography>
      <Typography>{item.price}$</Typography>
    </Styled.SingleBox>
  );
});
