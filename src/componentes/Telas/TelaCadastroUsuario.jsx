import { Container,Alert } from "react-bootstrap";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Pagina from "../layouts/Pagina";
import TabelaUsuario from "./Tabelas/TabelaUsuario";
import CadastroUsuario from "./formularios/CadastroUsuario";

export default function TelaCadastroUsuario(){
    const[exibirTabela, setExibirTabela] = useState(true);
    const[listaDeUsuarios,setListaDeUsuarios] = useState([]);
    const[modoEdicao,setModoEdicao]= useState(false);
    const[usuario,setUsuario]=useState({
        "username":"",
        "senha":"",
        "email":"",   
        "tipo":0,
        "senhaAdmin":""
      });

      
      return(
        <Container>
            <Pagina>
                <Alert className="mt-02 mb-02 success text-center">
                    <h2>Usuário</h2>
                </Alert>
                {exibirTabela ? 
                <TabelaUsuario 
                setExibirTabela={setExibirTabela} 
                listaDeUsuarios={listaDeUsuarios} 
                setListaDeUsuarios={setListaDeUsuarios}
                 setModoEdicao={setModoEdicao}  
                 setUsuario={setUsuario}/> 
                : 
                <CadastroUsuario 
                setExibirTabela={setExibirTabela} 
                listaDeUsuarios={listaDeUsuarios} 
                setListaDeUsuarios={setListaDeUsuarios} 
                setModoEdicao={setModoEdicao}  
                setUsuario={setUsuario} 
                modoEdicao={modoEdicao} 
                usuario={usuario}/>}
            </Pagina>
        </Container>
      )
}