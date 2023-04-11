import React from 'react';
import { MenuItem, TextField } from '@mui/material';
import { observer } from 'mobx-react-lite';
import { IInputSelectProps } from './inputSelect.types';

export const InputSelect = observer(
  <T extends Record<string, unknown>>({
    label,
    defaultValue,
    register,
    registerName,
    data,
    size = 'small',
    ...props
  }: IInputSelectProps<T>) => {
    return (
      <TextField
        {...props}
        margin="normal"
        fullWidth
        select
        size={size}
        label={label}
        inputProps={register && registerName && register(registerName)}
        defaultValue={defaultValue}
      >
        {data.map(({ id, name }) => (
          <MenuItem key={id} value={id}>
            {name}
          </MenuItem>
        ))}
      </TextField>
    );
  }
);
