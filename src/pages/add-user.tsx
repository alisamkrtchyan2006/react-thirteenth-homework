import { useForm } from "react-hook-form"
import { useNavigate } from "react-router-dom"

interface IFormInput {
    name: string
    surname: string
    age: number
    salary: number 
}



export const AddUser = () => {

    const {register, handleSubmit, formState: {errors}} = useForm<IFormInput>()
    const navigate = useNavigate();

    const onSubmit = (data: IFormInput) => {
        fetch('http://localhost:3014/users', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
        }).then(() => navigate('/'));
    };

    return <>
        <h3>AddUser</h3>
        <form onSubmit={handleSubmit(onSubmit)}>
            <div>
                <label>Name</label>
                <input {...register("name", {required: "Name is required"})}/>
                {errors.name && <p>{errors.name.message}</p>}
            </div>
            <div>
                <label>Surname</label>
                <input {...register("surname", {required: "Surname is required"})}/>
                {errors.surname && <p>{errors.surname.message}</p>}
            </div>
            <div>
                <label>Age</label>
                <input {...register("age", {required: "Age is required"})}/>
                {errors.age && <p>{errors.age.message}</p>}
            </div>
            <div>
                <label>Salary</label>
                <input {...register("salary", {required: "Salary is required"})}/>
                {errors.salary && <p>{errors.salary.message}</p>}
            </div>

            <button type="submit">Add User</button>
        </form>
    </>
}