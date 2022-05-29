import React, { useState } from 'react';

interface User {
    name: string;
    age: number;
}

const Count = () => {
    const [count, setCount] = useState<number>(0);
    // const [user, setUser] = useState<User | null>(null);
    const handleIncrease = () => {
        setCount(count + 1);
    }

    return (
        <div>
            <h1>Count: {count}</h1>
            <button onClick={handleIncrease}>Increase</button>
        </div>
    );
};

export default Count;