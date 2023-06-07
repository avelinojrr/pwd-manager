import {useNavigate} from 'react-router-dom';

/* eslint-disable react/prop-types */
export function PasswordCard({password}) {

    const navigate = useNavigate();


    return (
        <div style={{background: "black"}}

            onClick={() => {
                navigate('/password/' + password.id, {state: {password}});
            }}

        
        >
            <h1>{password.name}</h1>
            <p>{password.username}</p>
            <p>{password.password}</p>
            <p>{password.url}</p>
            <p>{password.description}</p>
            <hr />
        </div>
    );
}
