import React from 'react';
import { useForm, type SubmitHandler } from 'react-hook-form';

type formData = {
    name: string,
    age: number,
    isStudent: string

}

export default function UserFrom() {



  const { register, handleSubmit } = useForm<formData>();

  const onSubmit: SubmitHandler<formData> = data=> console.log(data);
  
  
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input type="text" placeholder="name" {...register("name", {})} />
      <input type="number" placeholder="age" {...register("age", {})} />
      <input type="text" placeholder="isStudent" {...register("isStudent", {})} />

      <input type="submit" />
    </form>
  );
}