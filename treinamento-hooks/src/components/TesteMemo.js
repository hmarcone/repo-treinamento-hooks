import React, { useState, memo, useMemo } from 'react';

const Child = memo(() => {
    console.log('Child foi carregado!');
    return (
        <h3>Sou um componente filho</h3>
    )
});

const TesteMemo = () => {
    const [value, setValue] = useState(0);

    const array = useMemo(() => {
        return [1, 2, 3, 4, 5];
    }, []);

    return (
        <>
            Count: {value}
            <br />
            <button onClick={() => setValue(value + 1)}>Incrementar</button>
            <br />
            <Child array={array} />
        </>
    )
}

export default TesteMemo;