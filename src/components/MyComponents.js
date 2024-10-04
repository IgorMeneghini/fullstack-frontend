import React, { useEffect, useState } from 'react';
import { getData } from '../services/apiService';

const MyComponent = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const result = await getData();
            setData(result);
        };

        fetchData();
    }, []);

    return (
        <div>
            {data.map(item => (
                <div key={item.id}>{item.name}</div>
            ))}
        </div>
    );
};

export default MyComponent;
