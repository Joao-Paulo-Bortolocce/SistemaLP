import { configureStore } from "@reduxjs/toolkit";
import produtoReducer from "./produtoReducer"
import categoriaReducer from "./categoriaReducer"
import clienteReducer from "./clienteReducer"
import usuarioReducer from './usuarioReducer'
import fornecedorReducer from "./fornecedorReducer"

const store= configureStore({
    reducer:{
        'produto': produtoReducer,
        'categoria': categoriaReducer,
        'cliente':clienteReducer,
        'usuario' : usuarioReducer,
        'fornecedor' : fornecedorReducer,
    }
})

export default store;