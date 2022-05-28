import React, { ChangeEvent, FormEvent, useState } from 'react';

interface User {
    name?: string,
    job?: string
}

const Counter = () => {
    const [counter, setCounter] = useState<number>(0);
    const [user, setUser] = useState<User | null>(null);
    const handleIncrease = (): void => {
        setCounter(counter + 1);
    }
    const handleDecrease = (): void => {
        if (counter > 0) {
            setCounter(counter - 1);
        }
    }

    const handleUserSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const userData: User = {
            name: 'Adam',
            job: 'Dev'
        }
        setUser(userData);
    }

    const handleNameChange = (e: ChangeEvent<HTMLInputElement>): void => {

    }
    return (
        <div>
            <h1>This is Counter</h1>
            <h2>Count:{counter}</h2>
            <button onClick={handleIncrease}>Increase</button>
            <br /><br />
            <button onClick={handleDecrease}>Decrease</button>
        </div>
    );
};

export default Counter;