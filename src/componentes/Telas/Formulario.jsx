import CadastroCliente from "./CadastrosCliente";
import CadastroFornecedor from "./CadastrosFornecedor";
import CadastroProduto from "./CadastrosProduto";
import CadastroCategoria from "./formularios/CadastrosCategoria";

export default function Formulario(props) {
    let flag = props.flag;

    if(flag==3){
        return (
            <div>
                <h1 className={"text-center"}>Cadastro de Categoria</h1>
                <CadastroCategoria/>
            </div>
        );
    }

    if(flag==2){
        return (
            <div>
                <h1 className={"text-center"}>Cadastro de Produto</h1>
                <CadastroProduto/>
            </div>
        );
    }
    
    if(flag==1){
        return (
            <div>
                <h1 className={"text-center"}>Cadastro de Fornecedor</h1>
                <CadastroFornecedor/>
            </div>
        );
    }


    return (
        <div>
            <h1 className={"text-center"}>Cadastro de Clientes</h1>
            <CadastroCliente />
        </div>
    );
}