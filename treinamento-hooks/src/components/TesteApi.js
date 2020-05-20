import React, { useState, useEffect } from 'react';
import axios from 'axios';

const url = 'https://jsonplaceholder.typicode.com/todos';

const TesteApi = () => {
    const [lista, setLista] = useState([]);

    useEffect(() => {
        axios.get(url)
            .then((response) => {
                setLista(response.data);
            });
    }, []);

    return (
        <>
            <ul>
                {
                    lista.map((item) =>
                        <li key={item.id}>
                            {item.id} - {item.title}
                        </li>
                    )
                }
            </ul>
        </>
    );
}

export default TesteApi;