import { useEffect, useState } from "react";
import { getAllPasswords } from '../api/password.api'
import { PasswordCard } from "./PasswordCard";

export function PasswordList() {
    const [passwords, setPasswords] = useState([]);    


    useEffect(() => {
        async function loadPasswords() {
            const res = await getAllPasswords();
            setPasswords(res.data);

        }
        loadPasswords();
    }, []);


    return (
        <div className="grid grid-cols-2 gap-3">
            {passwords.map(password => (
            <PasswordCard key={password.id} password={password}/>
        ))}
        </div>
    );
}
