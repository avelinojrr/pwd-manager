import {useForm} from 'react-hook-form';
import {createPassword} from '../api/password.api'
import {useNavigate} from 'react-router-dom'

export function PasswordFormPage() {
    const { 
        register, 
        handleSubmit, 
        formState: {errors}
    } = useForm();
    const navigate = useNavigate();

    const onSubmit = handleSubmit(async data => {
        await createPassword(data);
        navigate('/passwords');
    });

    return (
        <div>
            <form onSubmit={onSubmit}>
                <input type="text" placeholder="name" {...register("name", {required: true})}/> 
                {errors.name && <span>This field is required</span>}
                <input type="text" placeholder="username" {...register("username", {required: true})}/>
                {errors.username && <span>This field is required</span>} 
                <input type="text" placeholder="password" {...register("password", {required: true})}/>
                {errors.password && <span>This field is required</span>}
                <input type="text" placeholder="url" {...register("url", {required: false})}/>
                <textarea rows="3" placeholder="Description" {...register("Description", {required: false})}></textarea>
                <button>Save</button>
            </form>
        </div>
    )












    

}