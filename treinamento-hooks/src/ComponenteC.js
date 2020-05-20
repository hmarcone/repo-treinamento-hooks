import React, { useContext } from 'react';
import TesteContext from './provider/TesteContext';

const ComponenteC = ({ children }) => {

    const context = useContext(TesteContext);

    return (
        <>
            <h1>Componente C</h1>
            <span>O valor da variável que veio do context é: <h1>{context.idade}</h1></span>
            {children}
        </>
    )
}

export default ComponenteC;