import { createSlice } from "@reduxjs/toolkit";
import ESTADO from "./estados.js";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { consultarUsuario,excluirUsuario, gravarUsuario, alterarUsuario } from "../servicos/servicoUsuario";

function adicionaID(linha,id){
    return({
        "id":id,
        "username": linha.username,
        "senha": linha.senha,
        "email": linha.email,
        "tipo": linha.tipo,
    })
}

export const buscarUsuarios = createAsyncThunk('buscarUsuarios', async (termo) => {
    const resultado = await consultarUsuario(termo);
    try {

        if (Array.isArray(resultado.listaDeUsuarios)) {
            let listaUsuarios=[];
            for(let i=0;i<resultado.listaDeUsuarios.length;i++){
                let linha= adicionaID(resultado.listaDeUsuarios[i],resultado.listaDeIds[i])
                listaUsuarios.push(linha)
            }
            return {
                "status": true,
                "mensagem": "Usuarios recuperados com sucesso",
                "listaDeUsuarios":listaUsuarios
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
    const resultado = await excluirUsuario(usuario);
    try {
        return {
            "status": resultado.status,
            "mensagem": resultado.mensagem,
            "id":usuario.id
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
        usuario.id=resultado.id
        if(resultado.status){
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
        listaDeUsuarios: [],
        inserido:false
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(buscarUsuarios.pending, (state) => {
            state.estado=ESTADO.PENDENTE
            state.mensagem= "Processando requisição (buscando usuarios)"
        })
        .addCase(buscarUsuarios.fulfilled, (state, action) => { 
                if(action.payload.status){
                    state.estado=ESTADO.OCIOSO
                }
                else{
                    state.estado=ESTADO.ERRO;
                }
                state.mensagem=action.payload.mensagem
                state.listaDeUsuarios=action.payload.listaDeUsuarios
            })
            .addCase(buscarUsuarios.rejected, (state, action) => {
                state.estado=ESTADO.ERRO
                state.mensagem=action.payload.mensagem
                state.listaDeUsuarios=action.payload.listaDeUsuarios
            })
            .addCase(apagarUsuario.pending, (state)=>{
                state.estado = ESTADO.PENDENTE
                state.mensagem = "Processando requisição (excluindo o usuario do backend)"
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
                state.mensagem=action.payload.mensagem
            })
            .addCase(incluirUsuario.pending,(state)=>{
                state.estado=ESTADO.PENDENTE;
                state.mensagem="Processando a requisição (inclusão do usuario no backend)"
            })
            .addCase(incluirUsuario.fulfilled,(state,action)=>{
                state.mensagem= action.payload.mensagem;
                if(action.payload.status){
                    state.estado= ESTADO.OCIOSO;
                    state.inserido=true;    
                    state.listaDeUsuarios.push(action.payload.usuario)
                }
                else{
                    state.estado= ESTADO.erro;
                    setTimeout(()=>{
                        state.estado= ESTADO.OCIOSO;
                    },3000)  
                }
            })
            .addCase(incluirUsuario.rejected,(state,action)=>{
                state.estado=ESTADO.ERRO;
                state.mensagem= action.payload.mensagem;

            })
            .addCase(atualizarUsuario.pending,(state)=>{
                state.estado=ESTADO.PENDENTE;
                state.mensagem="Processando a requisição (Atualização do usuario no backend)"
            })
            .addCase(atualizarUsuario.fulfilled,(state,action)=>{
                state.mensagem= action.payload.mensagem;
                if(action.payload.status){
                    state.estado= ESTADO.OCIOSO;
                    state.listaDeUsuarios = state.listaDeUsuarios.map((item)=> item.id === action.payload.usuario.id ? action.payload.usuario : item)
                }
                else{
                    state.estado = ESTADO.ERRO;
                }
            })
            .addCase(atualizarUsuario.rejected,(state,action)=>{
                state.estado=ESTADO.ERRO;
                state.mensagem= action.payload.mensagem;

            })
    }
})



export default usuarioReducer.reducer;