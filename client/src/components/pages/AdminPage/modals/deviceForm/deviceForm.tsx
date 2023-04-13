/* eslint-disable @typescript-eslint/no-explicit-any */
import { FieldValues, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Typography } from '@mui/material';
import { toJS } from 'mobx';
import { useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import { deviceSchema } from '@constants/validation';
import { ModalWindowButton } from '@components/UI/modalWindowButton';
import { InputText } from '@components/UI/inputText';
import { createDevice } from '@src/http/deviceAPI';
import itemStore from '@src/store/ItemsStore';
import { InputSelect } from '@components/UI/inputSelect';
import * as Styled from './deviceForm.styles';

export const DeviceForm = observer(() => {
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    reset,
    formState,
    formState: { errors, isValid },
  } = useForm<FieldValues>({
    defaultValues: { name: '', price: '', type: '', brand: '', picture: '' },
    mode: 'onChange',
    resolver: yupResolver(deviceSchema),
  });

  const typesList = toJS(
    itemStore.types.map((type: any) => ({
      id: type.id,
      name: type.name,
    }))
  );
  const brandsList = toJS(
    itemStore.brands.map((brand: any) => ({
      id: brand.id,
      name: brand.name,
    }))
  );

  const onSubmit = (input: FieldValues) => {
    const formData = new FormData();
    formData.append('name', input.name);
    formData.append('price', input.price);
    formData.append('brandId', input.brand);
    formData.append('typeId', input.type);
    formData.append('img', input.picture[0]);
    createDevice(formData);
  };

  useEffect(() => {
    if (formState.isSubmitSuccessful) {
      reset({ name: '', price: '', type: '', brand: '', picture: '' });
    }
  }, [formState, reset]);

  const file = watch('picture');
  const handlerDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };

  const handlerOnDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setValue('picture', e.dataTransfer.files, { shouldValidate: true });
  };

  return (
    <Styled.FormBox>
      <Typography>Add device</Typography>
      <form onSubmit={handleSubmit(onSubmit)} autoComplete="off">
        <InputText
          name="Name of device"
          registerName="name"
          register={register}
          error={!!errors.name}
          helperText={errors.name?.message as string}
        />
        <InputText
          name="Price of device"
          registerName="price"
          register={register}
          error={!!errors.price}
          helperText={errors.price?.message as string}
        />

        <InputSelect label="Brand" registerName="brand" register={register} data={brandsList} />

        <InputSelect label="Type" registerName="type" register={register} data={typesList} />

        <Styled.WrapperDropArea onDragOver={handlerDragOver} onDrop={handlerOnDrop}>
          <Styled.FakeLabel component="label">
            <input
              type="file"
              hidden
              accept="image/png, image/jpeg, image/jpg, image/gif"
              {...register('picture')}
            />
            Upload device photo
          </Styled.FakeLabel>

          <Styled.Paragraph>Drag and drop the file here</Styled.Paragraph>
          <Styled.Paragraph>JPG, JPEG, PNG no more than 500 Kb</Styled.Paragraph>
        </Styled.WrapperDropArea>

        <ModalWindowButton isValid={isValid} />
      </form>
    </Styled.FormBox>
  );
});
