import { createSlice } from "@reduxjs/toolkit";
import ESTADO from "./estados.js";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { consultarProduto,excluirProduto } from "../servicos/servicoProduto";


export const buscarProdutos = createAsyncThunk('buscarProdutos', async () => {
    const resultado = await consultarProduto();
    try {

        if (Array.isArray(resultado)) {
            return {
                "status": true,
                "mensagem": "Produtos recuperados com sucesso",
                "listaDeProdutos":resultado
            }
        }
        else {
            return {
                "status": false,
                "mensagem": "Erro ao recuperar os produtos do backend",
                "listaDeProdutos": []
            }
        }
    } catch (erro) {
        return {
            "status": false,
            "mensagem": "Erro :" + erro.message,
            "listaDeProdutos": []
        }

    }
});

export const apagarProduto= createAsyncThunk('apagarProduto', async (produto)=>{
    //dar previsibilidade  ao conteudo do payload
    const resultado = await excluirProduto(produto);
    try {
        return {
            "status": resultado.status,
            "mensagem": resultado.mensagem
        }
    } catch (erro) {
        return {
            "status": false,
            "mensagem": "Erro :" + erro.message,
        }
    
    }

});
const produtoReducer = createSlice({
    name: "produto",
    initialState: {
        estado: ESTADO.OCIOSO,
        mensagem: "",
        listaDeProdutos: []
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(buscarProdutos.pending, (state, action) => {
            state.estado=ESTADO.PENDENTE
            state.mensagem= "Processando requisição (buscando produtos)"
        })
        .addCase(buscarProdutos.fulfilled, (state, action) => { 
                if(action.payload.status){
                    state.estado=ESTADO.OCIOSO
                    state.mensagem=action.payload.mensagem
                    state.listaDeProdutos=action.payload.listaDeProdutos
                }
                else{
                    state.estado=ESTADO.ERRO;
                    state.mensagem=action.payload.mensagem
                    state.listaDeProdutos=action.payload.listaDeProdutos
                }
            })
            .addCase(buscarProdutos.rejected, (state, action) => {
                state.estado=ESTADO.ERRO
                state.mensagem=action.payload.mensagem
                state.listaDeProdutos=action.payload.listaDeProdutos
            })
            .addCase(apagarProduto.pending, (state, action)=>{
                state.estado = ESTADO.PENDENTE
                state.mensagem = action.payload.mensagem
            })
            .addCase(apagarProduto.fulfilled, (state,action)=>{
                state.estado=ESTADO.OCIOSO
                state.mensagem= action.payload.mensagem
                //altera a lista de produto??
            })
            .addCase(apagarProduto.rejected, (state,action)=>{
                state.estado=ESTADO.ERRO
                //state.mensagem=action.payload.mensagem
            })
    }
})



export default produtoReducer.reducer;