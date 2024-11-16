import { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import { Spinner } from 'react-bootstrap';
import { consultarCategoria } from '../../../servicos/servicoCategoria.js';
import toast,{Toaster} from 'react-hot-toast';
import { gravarProduto } from '../../../servicos/servicoProduto.js';
import { alterarProduto } from '../../../servicos/servicoProduto.js';


export default function CadastroProduto(props) {
  //const [validated, setValidated] = useState(false);
  const [formValidado, setFormValidado] = useState(false);
  const [categorias, setCategorias] = useState([]);
  const [temCategorias,setTemCategorias]= useState(false)


  useEffect(() => {
    consultarCategoria()
      .then((resultado) => {
        if (Array.isArray(resultado)) {
          setCategorias(resultado);
          setTemCategorias(true);
        } else {
          toast.error("Não foi possível carregar as categorias");
        }
      })
      .catch((erro) => {
        toast.error("Não foi possível carregar as categorias");
      });
  }, []);
  
  function selecionarCategoria(event){
    props.setProduto({...props.produto, categoria:{
      codigo:event.currentTarget.value
    }})
  }

  function manipularSubmissao(evento) {
    const form = evento.currentTarget;
    if (form.checkValidity()) {
      //Cadastrar o produto
      if (props.modoEdicao) {
        // const prods = props.listaDeProdutos.map((item) => {
        //   if (item.codigo === props.produto.codigo) {
        //     // item.descricao=props.produto.descricao;
        //     // item.qtdEstoque=props.produto.qtdEstoque;
        //     // item.precoCusto= props.produto.precoCusto;
        //     // item.precoVenda=props.produto.precoVenda;
        //     // item.urlImagem=props.produto.urlImagem;
        //     // item.dtValidade= props.produto.dtValidade;
        //     return props.produto;
        //   }
        //   else {

        //     console.log("Diferentes")
        //     return item;
        //   }
        // });
        alterarProduto(props.produto).then((resultado)=>{
            if(resultado.status){
              props.setExibirTabela(true);
              props.setModoEdicao(false);
              props.setProduto({
                codigo: 0,
                descricao: "",
                precoCusto: 0,
                precoVenda: 0,
                qtdEstoque: 0,
                urlImagem: "",
                dtValidade: "3000-12-30"
              })
            }
            else{
              toast.error(resultado.mensagem)
          }
        })
      }
      //Exibir a tabela com o produto incluido
      else {

        gravarProduto(props.produto).then((resultado)=>{
          if(resultado.status){
            props.setExibirTabela(true);
            props.setProduto({
              codigo: 0,
              descricao: "",
              precoCusto: 0,
              precoVenda: 0,
              qtdEstoque: 0,
              urlImagem: "",
              dtValidade: "3000-12-30"
            })
          }
          else{
              toast.error(resultado.mensagem)
          }
        })
      }


    }
    else {
      setFormValidado(true);
    }
    evento.stopPropagation();
    evento.preventDefault();
  }

  function manipularMudanca(evento) {
    const elemento = evento.target.id;
    const valor = evento.target.value;
    props.setProduto({ ...props.produto, [elemento]: valor }); //... Faz o espalhamento do objeto
    console.log(`Componente : ${elemento} : ${valor}`)
  }



  // const handleSubmit = (event) => {  //METODO QUE JA VEIO COM O FORMULARIO PARA PODER VERIFICAR
  //   const form = event.currentTarget;
  //   if (form.checkValidity() === false) {
  //     event.preventDefault();
  //     event.stopPropagation();
  //   }

  //   setValidated(true);
  // };


  return (
    <Form noValidate validated={formValidado} onSubmit={manipularSubmissao} className='container'>
      <Row className="mb-4">
        <Form.Group as={Col} md="4" >
          <Form.Label>Código</Form.Label>
          <Form.Control type="number" required id="codigo"
            disabled={props.modoEdicao}
            value={props.produto.codigo}
            onChange={manipularMudanca}
          />
          <Form.Control.Feedback type="invalid">
            Por-Favor informe o código do produto
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="4" >
          <Form.Label>Descrição</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Descrição"
            id="descricao"
            value={props.produto.descricao}
            onChange={manipularMudanca}
          />
          <Form.Control.Feedback type='invalid'>Informe a Descrição do produto</Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="3" >
          <Form.Label>Estoque</Form.Label>
          <InputGroup hasValidation>
            <Form.Control
              type="number"
              placeholder="estoque"
              aria-describedby="inputGroupPrepend"
              min="0"
              required
              id="qtdEstoque"
              value={props.produto.qtdEstoque}
              onChange={manipularMudanca}
            />
            <Form.Control.Feedback type="invalid">
              Por-favor informe um valor para o estoque
            </Form.Control.Feedback>
          </InputGroup>
        </Form.Group>
      </Row>
      <Row className="mb-3">
        <Form.Group as={Col} md="3" >
          <Form.Label>Preço de custo</Form.Label>
          <InputGroup hasValidation>
            <InputGroup.Text id="inputGroupPrepend">R$</InputGroup.Text>
            <Form.Control min="0" type='number' placeholder="Preço de custo" required
              id="precoCusto"
              value={props.produto.precoCusto}
              onChange={manipularMudanca}
            />
            <Form.Control.Feedback type="invalid">
              Por-favor informe o Preço de custo
            </Form.Control.Feedback>
          </InputGroup>
        </Form.Group>
        <Form.Group as={Col} md="3" >
          <Form.Label>Preço de Venda</Form.Label>
          <InputGroup hasValidation>
            <InputGroup.Text id="inputGroupPrepend">R$</InputGroup.Text>
            <Form.Control min="0" type="number" placeholder="Preço de venda" required
              id="precoVenda"
              value={props.produto.precoVenda}
              onChange={manipularMudanca}
            />
            <Form.Control.Feedback type="invalid">
              Por-favor informe o Preço de venda
            </Form.Control.Feedback>
          </InputGroup>
        </Form.Group>
      </Row>
      <Row className="mb-3">
        <Form.Group as={Col} md="3" >
          <Form.Label>Data de validade</Form.Label>
          <Form.Control type="date" required
            id="dtValidade"
            value={props.produto.dtValidade}
            onChange={manipularMudanca}
          />
          <Form.Control.Feedback type="invalid">
            Por-favor informe a data de validade
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="4" >
          <Form.Label>Url da imagem</Form.Label>
          <Form.Control type="text" required
            id="urlImagem"
            value={props.produto.urlImagem}
            onChange={manipularMudanca}
          />
          <Form.Control.Feedback type="invalid">
            Por-favor informe a url da imagem
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md={3}>
          <Form.Label>Categoria:</Form.Label>
          <Form.Select aria-label="Default select example" id="categoria" name="categoria" onChange={selecionarCategoria}>
            <option>Selecione uma categoria</option>
            {// Criar em tempo de execução as categorias existentes no banco de dados
              categorias.map((categoria) => {
                return (
                  <option value={categoria.codigo}>{categoria.descricao}</option>
                )
              })
            }
          </Form.Select>
        </Form.Group>
        <Form.Group as={Col} md={1}>
         { !temCategorias? <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
          </Spinner>: ""}
        </Form.Group>
      </Row>
      <Form.Group className="mb-3">
        <Form.Check
          required
          label="Concordo com os termos de uso"
          feedback="Você tem que concordar antes de finalizar o cadastro"
          feedbackType="invalid"
        />
      </Form.Group>
      <Row className='mt-2 mb-2'>
        <Col md={1}>
          <Button id="botao" disabled={!temCategorias} type="submit">{props.modoEdicao ? "Alterar" : "Cadastrar"}</Button>

        </Col>
        <Col md={{ offset: 1 }} >
          <Button onClick={() => {
            props.setExibirTabela(true);
            props.setModoEdicao(false);
          }}>Voltar</Button>

        </Col>
      </Row>
      <Toaster position='top-right'/>
    </Form>
    
  );
}
