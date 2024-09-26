import CadastroCategoria from "./formularios/CadastrosCategoria";
import Pagina from "../layouts/Pagina";
import { Alert, Container } from "react-bootstrap";
import { useState } from "react";
import TabelaCategoria from "./Tabelas/TabelaCategorias";
import { categorias } from "../../dados/mockCategoria.js";

export default function TelaCadastroCategorias() {
    const [exibirTabela, setExibirTabela] = useState(true);
    const[modoEdicao,setModoEdicao]=useState(false);
    const[categoria,setCategoria]=useState({
        "codigo":0,
        "descricao": ""
    });
    const [listaDeCategorias,setListaDeCategorias]=useState(categorias);
    return (
        <Container>
            <Pagina>
                <Alert className="mt-02 mb-02 success text-center">
                    <h2>Categoria</h2>
                </Alert>
                {exibirTabela ? <TabelaCategoria setExibirTabela={setExibirTabela} setModoEdicao={setModoEdicao}
                setCategoria={setCategoria} listaDeCategorias={listaDeCategorias} setListaDeCategorias={setListaDeCategorias}/> : <CadastroCategoria setExibirTabela={setExibirTabela} setModoEdicao={setModoEdicao}
                setCategoria={setCategoria} listaDeCategorias={listaDeCategorias} setListaDeCategorias={setListaDeCategorias} modoEdicao={modoEdicao} categoria={categoria}/>}
            </Pagina>
        </Container>
    );
}