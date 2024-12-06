import { Container,Alert } from "react-bootstrap";
import { useState } from "react";
import Pagina from "../layouts/Pagina";
import TabelaUsuario from "./Tabelas/TabelaUsuario";
import CadastroUsuario from "./formularios/CadastroUsuario";

export default function TelaCadastroUsuario(){
    const[exibirTabela, setExibirTabela] = useState(true);
    const[modoEdicao,setModoEdicao]= useState(false);
    const[usuario,setUsuario]=useState({
        "id":0,
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
                 setModoEdicao={setModoEdicao}  
                 setUsuario={setUsuario}/> 
                : 
                <CadastroUsuario 
                setExibirTabela={setExibirTabela} 
                setModoEdicao={setModoEdicao}  
                setUsuario={setUsuario} 
                modoEdicao={modoEdicao} 
                usuario={usuario}/>}
            </Pagina>
        </Container>
      )
}