import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { consultarCategoria, gravarCategoria, alterarCategoria, excluirCategoria } from "../servicos/servicoCategoria";
import ESTADO from "./estados";

export const buscarCategoria = createAsyncThunk('buscarCategoria', async(codigo)=>{
    const resultado = await consultarCategoria(codigo);
    try{
        if (Array.isArray(resultado)) {
            return {
                "status": true,
                "mensagem": "Categorias recuperados com sucesso",
                "listaDeCategorias":resultado
            }
        }
        else {
            return {
                "status": false,
                "mensagem": "Erro ao recuperar os categorias do backend",
                "listaDeCategorias": []
            }
        }
    }catch (erro) {
        return {
            "status": false,
            "mensagem": "Erro :" + erro.message,
            "listaDeCategorias": []
        }

    }
});

export const apagarCategoria = createAsyncThunk('apagarCategoria', async(categoria)=>{
    const resultado = await excluirCategoria(categoria);
    try{
        if (resultado.status) {
            return {
                "status": true,
                "mensagem": "Categoria excluida com sucesso",
                "codigo":categoria.codigo
            }
        }
        else {
            return {
                "status": false,
                "mensagem": "Erro ao excluir os categorias do backend"
            }
        }
    }catch (erro) {
        return {
            "status": false,
            "mensagem": "Erro :" + erro.message,
        }

    }
});

export const incluirCategoria = createAsyncThunk('incluirCategoria', async(categoria)=>{
        const resultado = await gravarCategoria(categoria);
        try{
            if(resultado.status){
                categoria.codigo = resultado.codigo;
                return {
                    "status": resultado.status,
                    "mensagem": resultado.mensagem,
                    "categoria":categoria
                }
            }
            else{
                 return {
                    "status": resultado.status,
                    "mensagem": resultado.mensagem,
                }
            }
        }
        catch(erro){
            return{
                "status": false,
               "mensagem": "Erro :" + erro.message,
            }
        }
})

export const atualizarCategoria = createAsyncThunk('atualizarCategoria', async(categoria)=>{
        const resultado = await alterarCategoria(categoria);
        try{
            if(resultado.status){
                categoria.codigo = resultado.codigo;
                return {
                    "status": resultado.status,
                    "mensagem": resultado.mensagem,
                    "categoria":categoria
                }
            }
            else{
                 return {
                    "status": resultado.status,
                    "mensagem": resultado.mensagem,
                }
            }
        }
        catch(erro){
            return{
                "status": false,
               "mensagem": "Erro :" + erro.message,
            }
        }
})

const categoriaReducer = createSlice({
    name:"categoria",
    initialState:{
        estado: ESTADO.OCIOSO,
        mensagem:"",
        listaDeCategorias:[]
    },
    reducers:{},
    extraReducers:(builder)=>{
        builder.addCase(buscarCategoria.pending,(state)=>{
             state.estado=ESTADO.PENDENTE
             state.mensagem= "Processando requisição (buscando categorias)"
        })
        .addCase(buscarCategoria.fulfilled,(state,action)=>{
            if(action.payload.status){
                state.estado=ESTADO.OCIOSO;
                state.mensagem=action.payload.mensagem;
                state.listaDeCategorias= action.payload.listaDeCategorias
            }
            else{
                state.estado=ESTADO.ERRO;
                state.mensagem=action.payload.mensagem;
                state.listaDeCategorias= action.payload.listaDeCategorias
            }
        })
        .addCase(buscarCategoria.rejected, (state,action)=>{
            state.estado=ESTADO.ERRO;
                state.mensagem=action.payload.mensagem;
                state.listaDeCategorias= action.payload.listaDeCategorias
        })
        .addCase(apagarCategoria.pending,(state)=>{
             state.estado=ESTADO.PENDENTE
             state.mensagem= "Processando requisição (excluindo categorias)"
        })
        .addCase(apagarCategoria.fulfilled,(state,action)=>{
            if(action.payload.status){
                state.estado=ESTADO.OCIOSO;
                state.mensagem=action.payload.mensagem;
                state.listaDeCategorias= state.listaDeCategorias.filter((item)=>item.codigo!==action.payload.codigo)
            }
            else{
                state.estado=ESTADO.ERRO;
                state.mensagem=action.payload.mensagem;
            }
        })
        .addCase(apagarCategoria.rejected, (state,action)=>{
            state.estado=ESTADO.ERRO;
            state.mensagem=action.payload.mensagem;
        })
        .addCase(incluirCategoria.pending,(state)=>{
             state.estado=ESTADO.PENDENTE
             state.mensagem= "Processando requisição (incluindo categorias)"
        })
        .addCase(incluirCategoria.fulfilled,(state,action)=>{
            if(action.payload.status){
                state.estado=ESTADO.OCIOSO;
                state.mensagem=action.payload.mensagem;
                state.listaDeCategorias.push(action.payload.categoria)
            }
            else{
                state.estado=ESTADO.ERRO;
                state.mensagem=action.payload.mensagem;
            }
        })
        .addCase(incluirCategoria.rejected, (state,action)=>{
            state.estado=ESTADO.ERRO;
            state.mensagem=action.payload.mensagem;
        })
        .addCase(atualizarCategoria.pending,(state)=>{
             state.estado=ESTADO.PENDENTE
             state.mensagem= "Processando requisição (atualizando categorias)"
        })
        .addCase(atualizarCategoria.fulfilled,(state,action)=>{
            if(action.payload.status){
                state.estado=ESTADO.OCIOSO;
                state.mensagem=action.payload.mensagem;
                state.listaDeCategorias= state.listaDeCategorias.map((item)=>item.codigo===action.payload.categoria.codigo ? action.payload.categoria : item)
            }
            else{
                state.estado=ESTADO.ERRO;
                state.mensagem=action.payload.mensagem;
            }
        })
        .addCase(atualizarCategoria.rejected, (state,action)=>{
            state.estado=ESTADO.ERRO;
            state.mensagem=action.payload.mensagem;
        })
    }
})

export default categoriaReducer.reducer;