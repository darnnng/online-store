import { Box, IconButton } from '@mui/material';
import { observer } from 'mobx-react-lite';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { RoutePath } from '@constants/routeVariables';
import { IItemBoxProps } from './CatalogBox.interface';
import * as Styled from './catalogBox.styles';

export const CatalogBox = observer(({ item }: IItemBoxProps) => {
  const [like, setLike] = useState(false);
  const navigate = useNavigate();
  const handlePutLike = () => {
    setLike((like: boolean) => !like);
  };
  const handleDeviceInfo = () => {
    navigate(`/${RoutePath.CATALOG}/${item.id}`);
  };

  return (
    <Styled.SingleBox>
      <Box
        component="img"
        sx={{
          height: 200,
          width: 200,
          margin: 'auto',
        }}
        alt="Device"
        src={'http://localhost:5000/' + item.img}
        onClick={handleDeviceInfo}
      />
      <Styled.NameTypography>{item.name}</Styled.NameTypography>
      <Styled.PriceTypography>{item.price}.00$</Styled.PriceTypography>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '5px',
        }}
      >
        <Styled.CartButton>Add to cart</Styled.CartButton>
        <IconButton onClick={handlePutLike}>
          {like ? <FavoriteIcon /> : <FavoriteBorderIcon />}
        </IconButton>
      </Box>
    </Styled.SingleBox>
  );
});
