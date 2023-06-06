import {Link} from 'react-router-dom'


export function Navigation() {
    return (
    <div>
        <Link to="/password">
            <h1>Password Manager App</h1>
        </Link>
        <Link to="/password-create">Create Password</Link>
    </div>
    )
}
