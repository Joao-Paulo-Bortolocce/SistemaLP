import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';

export default function CadastroProduto(props) {
  //const [validated, setValidated] = useState(false);
  const [formValidado,setFormValidado]= useState(false);
  const [produto,setProduto] = useState({
    codigo:0,
    descricao:"",
    precoCusto:0,
    precoVenda:0,
    qtdEstoque:0,
    urlImagem:"",
    dtValidade:"31/12/3000"
  })

  function manipularSubmissao(evento){
    const form=evento.currentTarget;
    if(form.checkValidity()){
      //Cadastrar o produto
      props.listaDeProdutos.push(produto);
      //Exibir a tabela com o produto incluido
      props.setExibirTabela(true);  
    }
    else{
      setFormValidado(true);
    }
    evento.stopPropagation();
    evento.preventDefault();
  }

  function manipularMudanca(evento){
    const elemento = evento.target.id;
    const valor = evento.target.value;
    setProduto({...produto, [elemento]:valor}); //... Faz o espalhamento do objeto
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
          value={produto.codigo}
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
            value={produto.descricao}
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
              value={produto.qtdEstoque}
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
          value={produto.precoCusto}
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
          value={produto.precoVenda}
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
          value={produto.dtValidade}
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
          value={produto.urlImagem}
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
          <Button type="submit">Cadastrar</Button>

        </Col>
        <Col md={{offset:1}} >
          <Button onClick={()=>{
            props.setExibirTabela(true);
          }}>Voltar</Button>

        </Col>
      </Row>
    </Form>
  );
}
