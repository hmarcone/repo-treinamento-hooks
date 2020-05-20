import React from 'react';

const DetalheRedux = ({ match }) => {
    const { id } = match.params;

    return (
        <div>O parâmetro da rota é o número: <h2>{id}</h2></div>
    )
}

export default DetalheRedux;