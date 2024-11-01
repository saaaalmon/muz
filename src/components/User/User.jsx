import React, { useState, useEffect } from 'react';
import s from './User.module.css';

export function Users () {
    const [users, setUsers] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [newUser, setNewUser] = useState({ name: '', email: '' });
    const [message, setMessage] = useState('');

    useEffect(() => {
        const fetchUsers = async () => {
            const response = await fetch('https://jsonplaceholder.typicode.com/users');
            const data = await response.json();
            setUsers(data);
        };

        fetchUsers();
    }, []);


    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setNewUser({ ...newUser, [name]: value });
    };

    const handleAddUser = async (event) => {
        event.preventDefault();
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/users', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(newUser),
            });
            if (response.ok) {
                const addedUser = await response.json();
                setUsers([...users, addedUser]);
                setMessage('Пользователь успешно добавлен');
                setNewUser({ name: '', email: '' }); 
            } else {
                throw new Error('Ошибка при добавлении пользователя');
            }
        } catch (error) {
            setMessage('Произошла ошибка, попробуйте еще раз');
        }
    };

    const filteredUsers = users.filter(user =>
        user.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (

        <div className={s.userss}>
        <h2>Добавить нового пользователя</h2>
        <form onSubmit={handleAddUser}>
            <input
                type="text"
                name="name"
                placeholder="Имя"
                value={newUser.name}
                onChange={handleInputChange}
                required
            />
            <input
                type="email"
                name="email"
                placeholder="Email"
                value={newUser.email}
                onChange={handleInputChange}
                required
            />
            <button type="submit">Добавить пользователя</button>
        </form>
        {message && <p>{message}</p>}
        
            <h1>Список пользователей</h1>
            <input
                type="text"
                placeholder="Поиск по имени"
                value={searchTerm}
                onChange={handleSearchChange}
            />
       
            <ul>
                {filteredUsers.length > 0 ? (
                    filteredUsers.map(user => (
                        <p key={user.id}>
                            {user.name} - {user.email}
                        </p>
                    ))
                ) : (
                    <p>Пользователи не найдены.</p>
                )}
            </ul>
        </div>
    );
};

