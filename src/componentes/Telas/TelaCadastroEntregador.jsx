import { Container, Alert } from "react-bootstrap";
import Pagina from "../layouts/Pagina"
import { useState } from "react";
import TabelaEntregador from "./Tabelas/TabelaEntregador";
import CadastroEntregador from "./formularios/CadastroEntregador";
import {entregadores} from "../../dados/mockEntregador.js"

export default function TelaCadastroEntregador(){
    const [exibirTabela,setExibirTabela]= useState(true);
    const [modoEdicao,setModoEdicao]=useState(false);
    const [listaEntregadores,setListaEntregadores] = useState(entregadores);
    const [entregador,setEntregador]= useState({
        "nome": "",
        "cnh": "",
        "veiculo": "",
        "placa": "",
        "capacidade": 0
    })

    return(
        <Container>
            <Pagina>
                <Alert className="mt-02 mb-02 success text-center">
                    <h1> Tela de Cadastro de Entregadores</h1>
                </Alert>
                {exibirTabela ? <TabelaEntregador setExibirTabela={setExibirTabela} listaEntregadores={listaEntregadores} setListaEntregadores={setListaEntregadores} setModoEdicao={setModoEdicao} setEntregador={setEntregador}/> : <CadastroEntregador setExibirTabela={setExibirTabela} listaEntregadores={listaEntregadores} setListaEntregadores={setListaEntregadores} setModoEdicao={setModoEdicao} setEntregador={setEntregador} modoEdicao={modoEdicao} entregador={entregador}/>}
            </Pagina>
        </Container>
    )
}