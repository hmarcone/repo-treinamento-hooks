import { createActions, createReducer } from 'reduxsauce';

export const { Types, Creators } = createActions({
    listaUsuario: ['lista'],
    setLoading: ['flag'],
    addUsuario: ['nome'],
    delUsuario: ['id'],
    checkUsuario: ['id'],
});

const INITIAL_STATE = {
    loading: false,
    data: []
}

const listaUsuario = (state = INITIAL_STATE, action) => {
    return {
        ...state,
        data: action.lista
    }
}

const setLoading = (state = INITIAL_STATE, action) => {
    return {
        ...state,
        loading: action.flag
    }
}

const addUsuario = (state = INITIAL_STATE, action) => {
    console.log(action.name);
    return {
        ...state,
        data: [
            ...state.data,
            { id: Math.random(), name: action.nome }
        ]
    }
}

const delUsuario = (state = INITIAL_STATE, action) => {
    return {
        ...state,
        data: state.data.filter(usuario => usuario.id !== action.id)
    }
}

const checkUsuario = (state = INITIAL_STATE, action) => {
    return {
        ...state,
        data: state.data.map((usuario) => usuario.id === action.id ? {
            ...usuario,
            check: !usuario.check
        } : usuario)
    }
}

export default createReducer(INITIAL_STATE, {
    [Types.LISTA_USUARIO]: listaUsuario,
    [Types.SET_LOADING]: setLoading,
    [Types.ADD_USUARIO]: addUsuario,
    [Types.DEL_USUARIO]: delUsuario,
    [Types.CHECK_USUARIO]: checkUsuario
});