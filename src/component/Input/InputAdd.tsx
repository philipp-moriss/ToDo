import React from 'react';

import { useForm } from 'react-hook-form';

import style from './InputAdd.module.css';

type InputAddPropsType = {
  addTaskCallback: (value: string) => void;
};

export const InputAdd: React.FC<InputAddPropsType> = ({
  addTaskCallback,
}): React.ReactElement => {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();
  const onSubmitHandler = (data: { Title: string }): void => {
    addTaskCallback(data.Title.trim());
    setValue('Title', '');
  };
  return (
    <form className={style.inputContainer} onSubmit={handleSubmit(onSubmitHandler)}>
      <input
        placeholder="input Text"
        {...register('Title', { required: true, minLength: 1, maxLength: 10 })}
      />
      {errors?.Title?.type === 'required' && (
        <p className={style.ErrorColor}>This field is required</p>
      )}
      {errors?.Title?.type === 'maxLength' && (
        <p className={style.ErrorColor}>First name cannot exceed 10 characters</p>
      )}
      {errors?.Title?.type === 'minLength' && (
        <p className={style.ErrorColor}>First name cannot less than one character</p>
      )}
      <button type="submit">Add Task</button>
    </form>
  );
};
