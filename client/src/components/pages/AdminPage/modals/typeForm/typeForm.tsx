import { useEffect } from 'react';
import { FieldValues, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Typography } from '@mui/material';
import { entitiesSchema } from '@constants/validation';
import { ModalWindowButton } from '@components/UI/modalWindowButton';
import { InputText } from '@components/UI/inputText';
import { createType } from '@src/http/deviceAPI';
import * as Styled from '../brandForm/brandForm.styles';

export const TypeForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState,
    formState: { errors, isValid },
  } = useForm<FieldValues>({
    defaultValues: { type: '' },
    mode: 'onChange',
    resolver: yupResolver(entitiesSchema),
  });

  const onSubmit = (input: FieldValues) => {
    createType({ name: input.type });
  };

  useEffect(() => {
    if (formState.isSubmitSuccessful) {
      reset({ type: '' });
    }
  }, [formState, reset]);

  return (
    <Styled.FormBox>
      <Typography>Add type</Typography>
      <form onSubmit={handleSubmit(onSubmit)} autoComplete="off">
        <InputText
          name="Type"
          registerName="type"
          register={register}
          error={!!errors.brand}
          helperText={errors.brand?.message as string}
        />

        <ModalWindowButton isValid={isValid} />
      </form>
    </Styled.FormBox>
  );
};
