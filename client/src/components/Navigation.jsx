import { Link } from "react-router-dom";

export function Navigation() {
    return (
        <div className="flex justify-between p-3">
            <Link to="/password">
                <h1 className="font-bold text-3xl mb-4">Password Manager App</h1>
            </Link>
            <button className="bg-[#ecb52b] px-3 py-2 rounded-lg font-bold">
                <Link to="/password-create">Create Password</Link>
            </button>
        </div>
    );
}
