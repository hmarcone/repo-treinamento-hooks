import React from 'react';

import TesteContext from './TesteContext';

const TesteProvider = ({ children }) => {
    const idade = 25;

    return (
        <TesteContext.Provider value={{ idade }}>
            {children}
        </TesteContext.Provider>
    )
}

export default TesteProvider;