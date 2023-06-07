import {useEffect} from 'react';
import {useForm} from 'react-hook-form';
import {createPassword, deletePassword, updatePassword, getPassword} from '../api/password.api'
import {useNavigate, useParams} from 'react-router-dom'
import {toast} from 'react-hot-toast'

export function PasswordFormPage() {
    const { 
        register, 
        handleSubmit, 
        formState: {errors},
        setValue
    } = useForm();
    const navigate = useNavigate();
    const params = useParams();

    const onSubmit = handleSubmit(async data => {
        if (params.id) {
            await updatePassword(params.id, data);
            toast.success("Password Update!", {
                position: "bottom-right",
                icon: "🔑",
                style: {
                    background: "#111723",
                    color: "#ffff",
                },
            });
        }else{
            await createPassword(data);
            toast.success("New Password Added!", {
                position: "bottom-right",
                icon: "🔑",
                style: {
                    background: "#111723",
                    color: "#ffff",
                },
            });
        }
        navigate('/password');
    });    

    useEffect(() => {
    async function loadPassword() {
        if (params.id) {
        const {data} = await getPassword(params.id);
        setValue('name', data.name);
        setValue('username', data.username);
        setValue('password', data.password);
        setValue('url', data.url);
        setValue('description', data.description);
        }
    }
    loadPassword();
    }, [params.id, setValue]);

    return (
        <div className="max-w-xl mx-auto">
            <form onSubmit={onSubmit}>
                <input type="text" placeholder="Name" {...register("name", {required: true})}
                className="bg-zinc-900 p-3 rounded-lg block w-full mb-3"
                />
                {errors.name && <span>This field is required</span>}
                <input type="text" placeholder="Username" {...register("username", {required: true})}
                className="bg-zinc-900 p-3 rounded-lg block w-full mb-3"
                />
                {errors.username && <span>This field is required</span>} 
                <input type="text" placeholder="Password" {...register("password", {required: true})}
                className="bg-zinc-900 p-3 rounded-lg block w-full mb-3"
                />
                {errors.password && <span>This field is required</span>}
                <input type="text" placeholder="Url" {...register("url", {required: true})}
                className="bg-zinc-900 p-3 rounded-lg block w-full mb-3"
                />
                <textarea rows="3" placeholder="Description" {...register("description", {required: true})}
                className="bg-zinc-900 p-3 rounded-lg block w-full mb-3"
                ></textarea>
                <button className="bg-[#569724] p-3 rounded-lg block w-full mt-3 font-medium">
                    Save
                </button>
            </form>            

            {params.id && (

                <div className="flex justify-between">

                    <div>
                        <button className="bg-zinc-900 p-3 rounded-lg block w-48 mt-5 hover:bg-zinc-800 font-medium"
                            onClick={() => navigate('/password')}
                        >
                            Back
                        </button>
                    </div>

                    <button
                        className="bg-red-600 p-3 rounded-lg block w-48 mt-5 font-medium"
                        onClick={async () => {
                            const accepted = window.confirm('Are you sure?')
                            if (accepted) {
                                await deletePassword(params.id);
                                toast.success("Password deleted!", {
                                    position: "bottom-right",
                                    icon: "🗑️",
                                    style: {
                                        background: "#111723",
                                        color: "#ffff",
                                    },
                                });
                                navigate('/password');
                            }
                        }}
                    >
                        Delete
                    </button>
                </div>
            )}
        </div>
        
    );
}
