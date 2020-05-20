import React from 'react';
import { useSelector } from 'react-redux';

const TesteStore = () => {
    const usuarios = useSelector(state => state.users);

    return (
        <>
            <div>Teste Store</div>
            <ul>
                {
                    usuarios.data.map((usuario) =>
                        <li key={usuario.id}>
                            {usuario.name}
                        </li>)
                }
            </ul>
        </>
    )
}

export default TesteStore