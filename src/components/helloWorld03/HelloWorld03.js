import React, { useState, useEffect } from 'react';

function HelloWorld() {
    const [currentTime, setCurrentTime] = useState(new Date());

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentTime(new Date());
        }, 1000);

        return () => clearInterval(intervalId);
    }, []);

    return (
        <div>
            <p>Hello, World! {currentTime.toLocaleString()}</p>
        </div>
    );
}

export default HelloWorld;
