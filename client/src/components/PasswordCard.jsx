import {useNavigate} from 'react-router-dom';

/* eslint-disable react/prop-types */
export function PasswordCard({password}) {

    const navigate = useNavigate();


    return (
        <div
            className="bg-zinc-800 p-3 hover:bg-zinc-700 hover:cursor-pointer"

            onClick={() => {
                navigate('/password/' + password.id, {state: {password}});
            }} 
        >
            <h1 className="font-bold no-underline">{password.name}</h1>
            <p className="text-slate-300">{password.username}</p>
            <p className="text-slate-300">{password.password}</p>
            <p className="text-slate-300">{password.url}</p>
            <p className="text-slate-300">{password.description}</p>
        </div>
    );
}
