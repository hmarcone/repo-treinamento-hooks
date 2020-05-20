import React, { useState, useEffect } from 'react';

const TesteState = () => {
    const [value, setValue] = useState(0);

    useEffect(() => {
        console.log('Bem vindo ao componente!');

        return () => {
            console.log('Limpar algo');
        }
    }, []);

    useEffect(() => {
        console.log('setou o value');
    }, [value]);

    const handleIncrementar = () => {
        setValue(value + 1);
    }

    return (
        <>
            Count: {value}
            <br />
            <button onClick={handleIncrementar}>Incrementar</button>
        </>
    );
}

export default TesteState;