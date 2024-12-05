import { createSlice } from "@reduxjs/toolkit";
import ESTADO from "./estados.js";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { consultarUsuario,excluirUsuario, gravarUsuario, alterarUsuario } from "../servicos/servicoUsuario.js";



export const buscarUsuarios = createAsyncThunk('buscarUsuarios', async () => {
    const resultado = await consultarUsuario();
    try {

        if (Array.isArray(resultado)) {
            return {
                "status": true,
                "mensagem": "Usuarios recuperados com sucesso",
                "listaDeUsuarios":resultado
            }
        }
        else {
            return {
                "status": false,
                "mensagem": "Erro ao recuperar os usuarios do backend",
                "listaDeUsuarios": []
            }
        }
    } catch (erro) {
        return {
            "status": false,
            "mensagem": "Erro :" + erro.message,
            "listaDeUsuarios": []
        }

    }
});

export const apagarUsuario= createAsyncThunk('apagarUsuario', async (usuario)=>{
    //dar previsibilidade  ao conteudo do payload
    const resultado = await excluirProduto(usuario);
    try {
        return {
            "status": resultado.status,
            "mensagem": resultado.mensagem,
            "codigo":usuarios.id
        }
    } catch (erro) {
        return {
            "status": false,
            "mensagem": "Erro :" + erro.message,
        }
    
    }

});

export const incluirUsuario = createAsyncThunk('incluirUsuario', async (usuario) =>{
    try{

        const resultado = await gravarUsuario(usuario);
        if(resultado.status){
            usuario.id = resultado.id;
            return {
                "status": resultado.status,
                "mensagem": resultado.mensagem,
                "usuario":usuario
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
export const atualizarUsuario = createAsyncThunk('atualizarUsuario', async (usuario) =>{
    try{

        const resultado = await alterarUsuario(usuario);
        if(resultado.status){
            usuario.id = resultado.id;
            return {
                "status": resultado.status,
                "mensagem": resultado.mensagem,
                "usuario":usuario
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

const usuarioReducer = createSlice({
    name: "usuario",
    initialState: {
        estado: ESTADO.OCIOSO,
        mensagem: "",
        listaDeUsuarios: []
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(buscarUsuarios.pending, (state, action) => {
            state.estado=ESTADO.PENDENTE
            state.mensagem= "Processando requisição (buscando usuarios)"
        })
        .addCase(buscarUsuarios.fulfilled, (state, action) => { 
                if(action.payload.status){
                    state.estado=ESTADO.OCIOSO
                    state.mensagem=action.payload.mensagem
                    state.listaDeUsuarios=action.payload.listaDeUsuarios
                }
                else{
                    state.estado=ESTADO.ERRO;
                    state.mensagem=action.payload.mensagem
                    state.listaDeUsuarios=action.payload.listaDeUsuarios
                }
            })
            .addCase(buscarUsuarios.rejected, (state, action) => {
                state.estado=ESTADO.ERRO
                state.mensagem=action.payload.mensagem
                state.listaDeUsuarios=action.payload.listaDeUsuarios
            })
            .addCase(apagarUsuario.pending, (state, action)=>{
                state.estado = ESTADO.PENDENTE
                state.mensagem = "Processando requisição (excluiindo o produto do backend)"
            })
            .addCase(apagarUsuario.fulfilled, (state,action)=>{
                state.mensagem= action.payload.mensagem
                if(action.payload.status){
                    state.estado=ESTADO.OCIOSO
                    state.listaDeUsuarios = state.listaDeUsuarios.filter((item)=> item.id !== action.payload.id)
                }else{
                    state.estado=ESTADO.ERRO
                }
            })
            .addCase(apagarUsuario.rejected, (state,action)=>{
                state.estado=ESTADO.ERRO
            })
            .addCase(incluirUsuario.pending,(state,action)=>{
                state.estado=ESTADO.PENDENTE;
                state.mensagem="Processando a requisição (inclusão do usuario no backend)"
            })
            .addCase(incluirUsuario.fulfilled,(state,action)=>{
                if(action.payload.status){
                    state.estado= ESTADO.OCIOSO;
                    state.mensagem= action.payload.mensagem;
                    state.listaDeUsuarios.push(action.payload.usuario)
                }
                else{
                    state.estado = ESTADO.ERRO;
                    state.mensagem= action.payload.mensagem;
                }
            })
            .addCase(incluirUsuario.rejected,(state,action)=>{
                state.estado=ESTADO.ERRO;
                state.mensagem= action.payload.mensagem;

            })
            .addCase(atualizarUsuario.pending,(state,action)=>{
                state.estado=ESTADO.PENDENTE;
                state.mensagem="Processando a requisição (Atualização do usuario no backend)"
            })
            .addCase(atualizarUsuario.fulfilled,(state,action)=>{
                if(action.payload.status){
                    state.estado= ESTADO.OCIOSO;
                    state.mensagem= action.payload.mensagem;
                    state.listaDeUsuarios = state.listaDeUsuarios.map((item)=> item.id === action.payload.usuario.id ? action.payload.usuario : item)
                }
                else{
                    state.estado = ESTADO.ERRO;
                    state.mensagem= action.payload.mensagem;
                }
            })
            .addCase(atualizarUsuario.rejected,(state,action)=>{
                state.estado=ESTADO.ERRO;
                state.mensagem= action.payload.mensagem;

            })
    }
})



export default usuarioReducer.reducer;