/* eslint-disable react/prop-types */
export function PasswordCard({password}) {
    return (
        <div>
            <h1>{password.name}</h1>
            <p>{password.username}</p>
            <p>{password.password}</p>
            <p>{password.url}</p>
            <p>{password.description}</p>
            <hr />
        </div>
    );
}
