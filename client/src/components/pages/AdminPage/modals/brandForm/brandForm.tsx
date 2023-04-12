import React, { useEffect } from 'react';
import { FieldValues, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Typography } from '@mui/material';
import { entitiesSchema } from '@constants/validation';
import { ModalWindowButton } from '../../../../UI/modalWindowButton';
import { InputText } from '../../../../UI/inputText';
import { createBrand } from '../../../../../http/deviceAPI';
import * as Styled from './brandForm.styles';

export const BrandForm = () => {
  const {
    register,
    reset,
    handleSubmit,
    formState,
    formState: { errors, isValid },
  } = useForm<FieldValues>({
    defaultValues: { brand: '' },
    mode: 'onChange',
    resolver: yupResolver(entitiesSchema),
  });

  const onSubmit = (input: FieldValues) => {
    createBrand({ name: input.brand });
  };

  useEffect(() => {
    if (formState.isSubmitSuccessful) {
      reset({ brand: '' });
    }
  }, [formState, reset]);

  return (
    <Styled.FormBox>
      <Typography>Add brand</Typography>
      <form onSubmit={handleSubmit(onSubmit)} autoComplete="off">
        <InputText
          name="Brand"
          registerName="brand"
          register={register}
          error={!!errors.brand}
          helperText={errors.brand?.message as string}
        />

        <ModalWindowButton isValid={isValid} />
      </form>
    </Styled.FormBox>
  );
};
