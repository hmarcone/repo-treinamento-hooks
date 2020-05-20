import React, { useEffect, useRef, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Creators } from '../store/ducks/users';
import axios from 'axios';

const url = 'https://jsonplaceholder.typicode.com/users';

const TesteRedux = ({ history }) => {

    const usuarios = useSelector(state => state.users);
    const dispatch = useDispatch();
    const inputRef = useRef();

    const obterDados = useCallback(() => {
        Creators.setLoading(true);
        axios.get(url)
            .then((response) => {
                Creators.setLoading(false);
                dispatch(Creators.listaUsuario(response.data));
            })
    }, [dispatch]);

    useEffect(() => {
        obterDados()
    }, [obterDados]);

    const handleSubmit = (e) => {
        e.preventDefault();

        dispatch(Creators.addUsuario(inputRef.current.value));
    }

    const handleExcluir = (id) => {
        dispatch(Creators.delUsuario(id));
    }

    const handleCheck = (id) => {
        dispatch(Creators.checkUsuario(id));
    }

    const handleDetalhe = (id) => {
        history.push(`teste-redux/${id}`);
    }

    return (
        <>
            <h3>Lista de usuários</h3>
            <form onSubmit={handleSubmit}>
                <label>Nome: </label>
                <input type="input" ref={inputRef} />
                <button type="submit">Salvar</button>
            </form>
            {
                usuarios.loading ? <div>Carregando...</div> :
                    <ul>
                        {
                            usuarios.data.map((usuario) =>
                                <li key={usuario.id}>
                                    {usuario.check && '(CHECKED) '}{usuario.id} ==> {usuario.name}
                                    <button onClick={() => handleExcluir(usuario.id)}>Excluir</button>
                                    <button onClick={() => handleCheck(usuario.id)}>Check</button>
                                    <button onClick={() => handleDetalhe(usuario.id)}>Detalhes</button>
                                </li>
                            )
                        }
                    </ul>
            }
        </>
    )
}

export default TesteRedux;