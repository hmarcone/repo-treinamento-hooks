import React, { useState } from 'react';

const CadastroUsuario = () => {
    const [usuario, setUsuario] = useState({});

    const handleChange = (event) => {
        const { name, value } = event.target;

        setUsuario({
            ...usuario,
            [name]: value
        });
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        console.log(usuario);
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>Nome: </label>
            <input type="text" name="nome" onChange={handleChange} />
            <br />
            <label>Email: </label>
            <input type="text" name="email" onChange={handleChange} />
            <br />
            <label>Telefone: </label>
            <input type="text" name="telefone" onChange={handleChange} />
            <br />
            <button type="submit">Salvar</button>
        </form>
    )
}

export default CadastroUsuario