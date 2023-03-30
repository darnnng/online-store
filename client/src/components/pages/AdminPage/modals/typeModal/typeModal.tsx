import React from 'react';
import { FieldValues, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { entitiesSchema } from './../../../../../constants/validation';
import { ModalWindowButton } from './../../../../UI/modalWindowButton';
import { ModalWindow } from './../../../../UI/modalWindow';
import { IBrandFormInput, IBrandModalProps } from './brandModal.types';
import { InputText } from './../../../../UI/inputText';
import { createBrand } from './../../../../../http/deviceAPI';

export const TypeModal = ({ onClose, open }: IBrandModalProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<FieldValues>({
    defaultValues: { type: '' },
    mode: 'onChange',
    resolver: yupResolver(entitiesSchema),
  });

  const onSubmit = (input: FieldValues) => {
    createBrand({ name: input.value })
      .then(() => {
        console.log(input.value);
        onClose();
      })
      .catch(() => {
        console.log(input.value);
      });
  };

  return (
    <ModalWindow title={'Add type'} onClose={onClose} open={open}>
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
    </ModalWindow>
  );
};
