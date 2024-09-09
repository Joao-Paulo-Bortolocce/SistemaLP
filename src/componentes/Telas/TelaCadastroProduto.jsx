import { useState } from "react";
import Pagina from "../layouts/Pagina";
import { Alert } from "react-bootstrap";
import CadastroProduto from "./formularios/CadastrosProduto";
import TabelaProdutos from "./Tabelas/TabelaProdutos";
import {produtos} from "../../dados/mockProdutos";

export default function TelaCadastroProdutos(){
    const[exibirTabela, setExibirTabela] = useState(true);

    return(
        <Pagina>
            <Alert className="mt-02 mb-02 success text-center">
                <h2>Cadastro de Produto</h2>
            </Alert>
                {exibirTabela ? <TabelaProdutos setExibirTabela={setExibirTabela} listaDeProdutos={produtos}/> : <CadastroProduto setExibirTabela={setExibirTabela}/>}
        </Pagina>
    );
}