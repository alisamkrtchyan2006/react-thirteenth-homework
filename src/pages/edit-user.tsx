import { useForm } from 'react-hook-form';
import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

interface IFormInput {
  name: string;
  surname: string;
  age: number;
  salary: number;
}

export const EditUser = () => {
  const { id } = useParams<{ id: string }>();
  const { register, handleSubmit, reset, formState: { errors } } = useForm<IFormInput>();
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`http://localhost:3014/users/${id}`)
      .then((res) => res.json())
      .then((data) => reset(data));
  }, [id, reset]);

  const onSubmit = (data: IFormInput) => {
    fetch(`http://localhost:3014/users/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    }).then(() => navigate('/'));
  };

  return <>
  <h3>edit user</h3>
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label>Name</label>
        <input {...register('name', { required: 'Name is required' })} />
        {errors.name && <p>{errors.name.message}</p>}
      </div>

      <div>
        <label>Surname</label>
        <input {...register('surname', { required: 'Surname is required' })} />
        {errors.surname && <p>{errors.surname.message}</p>}
      </div>

      <div>
        <label>Age</label>
        <input type="number" {...register('age', { required: 'Age is required', min: 18 })} />
        {errors.age && <p>{errors.age.message}</p>}
      </div>

      <div>
        <label>Salary</label>
        <input type="number" {...register('salary', { required: 'Salary is required' })} />
        {errors.salary && <p>{errors.salary.message}</p>}
      </div>

      <button type="submit">Save Changes</button>
    </form>
  </>
};
