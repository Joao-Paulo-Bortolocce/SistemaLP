import { useState } from "react";
import Pagina from "../layouts/Pagina";
import { Alert, Container } from "react-bootstrap";
import CadastroProduto from "./formularios/CadastrosProduto";
import TabelaProdutos from "./Tabelas/TabelaProdutos";
import {produtos} from "../../dados/mockProdutos";

export default function TelaCadastroProdutos(){
    const[exibirTabela, setExibirTabela] = useState(true);
    const[listaDeProdutos,setListaDeProdutos] = useState(produtos);
    const[modoEdicao,setModoEdicao]= useState(false);
    const[produto,setProduto]=useState({
        codigo:0,
        descricao:"",
        precoCusto:0,
        precoVenda:0,   
        qtdEstoque:0,
        urlImagem:"",
        dtValidade:""
      });

    return(
        <Container>
            <Pagina>
                <Alert className="mt-02 mb-02 success text-center">
                    <h2>Produtos</h2>
                </Alert>
                    {exibirTabela ? <TabelaProdutos setExibirTabela={setExibirTabela} listaDeProdutos={listaDeProdutos} setListaDeProdutos={setListaDeProdutos} setModoEdicao={setModoEdicao}  setProduto={setProduto}/> 
                    : <CadastroProduto listaDeProdutos={listaDeProdutos} setExibirTabela={setExibirTabela} setListaDeProdutos={setListaDeProdutos} modoEdicao={modoEdicao} setModoEdicao={setModoEdicao} produto={produto} setProduto={setProduto}/>}
            </Pagina>
        </Container>
    );
}