import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';

export default function CadastroProduto(props) {
  //const [validated, setValidated] = useState(false);
  const [formValidado, setFormValidado] = useState(false);


  function manipularSubmissao(evento) {
    const form = evento.currentTarget;
    if (form.checkValidity()) {
      //Cadastrar o produto
      if (props.modoEdicao) {
        const prods = props.listaDeProdutos.map((item) => {
          if (item.codigo === props.produto.codigo) {
            // item.descricao=props.produto.descricao;
            // item.qtdEstoque=props.produto.qtdEstoque;
            // item.precoCusto= props.produto.precoCusto;
            // item.precoVenda=props.produto.precoVenda;
            // item.urlImagem=props.produto.urlImagem;
            // item.dtValidade= props.produto.dtValidade;
            return props.produto;
          }
          else {
            
            console.log("Diferentes")
            return item;
          }
        });
        props.setListaDeProdutos(prods)
        props.setModoEdicao(false);
      }
      //Exibir a tabela com o produto incluido
      else {

        props.setListaDeProdutos([...props.listaDeProdutos, props.produto]);
      }
      props.setProduto({
        codigo: 0,
        descricao: "",
        precoCusto: 0,
        precoVenda: 0,
        qtdEstoque: 0,
        urlImagem: "",
        dtValidade: "31/12/3000"
      })
      props.setExibirTabela(true);

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
          <Form.Control min="0" type="number" placeholder="Preço de custo" required
            id="precoCusto"
            value={props.produto.precoCusto}
            onChange={manipularMudanca}
          />
          <Form.Control.Feedback type="invalid">
            Por-favor informe o Preço de custo
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="3" >
          <Form.Label>Preço de Venda</Form.Label>
          <Form.Control min="0" type="number" placeholder="Preço de venda" required
            id="precoVenda"
            value={props.produto.precoVenda}
            onChange={manipularMudanca}
          />
          <Form.Control.Feedback type="invalid">
            Por-favor informe o Preço de venda
          </Form.Control.Feedback>
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
        <Form.Group as={Col} md="6" >
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
          <Button id="botao" type="submit">{props.modoEdicao ? "Alterar":"Cadastrar"}</Button>

        </Col>
        <Col md={{ offset: 1 }} >
          <Button onClick={() => {
            props.setExibirTabela(true);
          }}>Voltar</Button>

        </Col>
      </Row>
    </Form>
  );
}
