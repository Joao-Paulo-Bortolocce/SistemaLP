import { Container, Table, Button } from "react-bootstrap";


export default function TabelaProdutos(props){
    return(
        <>
            <Container>
                <Button className="mb-3" variant="primary" onClick={()=>{
                    props.setExibirTabela(false);
                }}>Adicionar</Button>
                <Table striped bordered hover>
                    <thead>
                        <th>Código</th>
                        <th>Descrição</th>
                        <th>Preço de Custo</th>
                        <th>Preço de venda</th>
                        <th>Estoque</th>
                        <th>Imagem</th>
                        <th>Validade</th>
                    </thead>
                    <tbody>
                        {
                            props.listaDeProdutos?.map((produto)=>{
                                return (
                                    <tr>
                                        <td>{produto.Codigo}</td>
                                        <td>{produto.Descricao}</td>
                                        <td>{produto.PrecoCusto}</td>
                                        <td>{produto.PrecoVenda}</td>
                                        <td>{produto.Estoque}</td>
                                        <td><img src={produto.UrlImagem} alt="Foto do Produto"></img></td>
                                        <td>{produto.Validade}</td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </Table>
            </Container>
        </>
    );
}