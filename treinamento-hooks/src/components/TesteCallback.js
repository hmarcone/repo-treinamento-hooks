import React, { useEffect, useState, memo, useCallback } from 'react';
import axios from 'axios';

const url = 'https://jsonplaceholder.typicode.com';

const Child = memo(({ fechData }) => {

    useEffect(() => {
        fechData('users');
    }, [fechData]);

    console.log('Child foi carregado!');
    return (
        <h3>Sou um componente filho</h3>
    )
});

const TesteCallback = () => {
    const [value, setValue] = useState(0);

    const fechData = useCallback((type) => {
        axios.get(`${url}/${type}`)
            .then((response) => {
                console.log(response.data);
            });
    },[]);

    useEffect(() => {
        fechData('todos');
    }, [fechData]);

    return (
        <>
            Count: {value}
            <br />
            <button onClick={() => setValue(value + 1)}>Incrementar</button>
            <br />
            <Child fechData={fechData} />
        </>
    )
}

export default TesteCallback;