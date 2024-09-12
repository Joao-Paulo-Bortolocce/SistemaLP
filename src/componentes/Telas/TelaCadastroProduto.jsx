import { useState } from "react";
import Pagina from "../layouts/Pagina";
import { Alert, Container } from "react-bootstrap";
import CadastroProduto from "./formularios/CadastrosProduto";
import TabelaProdutos from "./Tabelas/TabelaProdutos";
import {produtos} from "../../dados/mockProdutos";

export default function TelaCadastroProdutos(){
    const[exibirTabela, setExibirTabela] = useState(true);

    return(
        <Container>
            <Pagina>
                <Alert className="mt-02 mb-02 success text-center">
                    <h2>Produtos</h2>
                </Alert>
                    {exibirTabela ? <TabelaProdutos setExibirTabela={setExibirTabela} listaDeProdutos={produtos}/> : <CadastroProduto setExibirTabela={setExibirTabela}/>}
            </Pagina>
        </Container>
    );
}