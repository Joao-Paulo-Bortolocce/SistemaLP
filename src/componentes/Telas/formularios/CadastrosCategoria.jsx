import { useState } from 'react';
import { Button,Form, Row, Col, Alert, Spinner } from "react-bootstrap";
import  { Toaster } from 'react-hot-toast';
import { useSelector, useDispatch } from 'react-redux';
import { atualizarCategoria, incluirCategoria } from '../../../redux/categoriaReducer';
import ESTADO from '../../../redux/estados';


export default function CadastroCategoria(props) {
  const [validated, setValidated] = useState(false);
  const { estado, mensagem } = useSelector((state) => state.categoria)
  const dispachante = useDispatch();

  function zeraCategoria() {
    props.setCategoria({
      "codigo": 0,
      "descricao": ""
    });
  }

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity()) {
      if (props.modoEdicao) {
        dispachante(atualizarCategoria(props.categoria));
        setTimeout(() => {
          props.setExibirTabela(true);
          props.setModoEdicao(false);
          zeraCategoria();
        }, 2000)
      }
      else {
        dispachante(incluirCategoria(props.categoria));
        setTimeout(() => {
          props.setExibirTabela(true);
          props.setModoEdicao(false);
          zeraCategoria();
        }, 2000)
      }
    }
    else
      setValidated(true);
    event.preventDefault();
    event.stopPropagation();
  };

  function manipularMudanca(event) {
    const id = event.currentTarget.id;
    const valor = event.currentTarget.value;
    props.setCategoria({ ...props.categoria, [id]: valor })
  }

  if (estado === ESTADO.PENDENTE) {
    return (
      <div>

        <Spinner animation="border" role="status"></Spinner>
        <Alert variant="primary">{mensagem}</Alert>
      </div>
    )
  }
  else
    if (estado === ESTADO.ERRO) {
      return (
        <div>
          <Alert variant="danger">{mensagem}</Alert>
          <Button onClick={() => {
            props.setExibirTabela(true);
            props.setModoEdicao(false);
          }}>Voltar</Button>
        </div>
      )
    }
    else {
      return (
        <Form noValidate validated={validated} onSubmit={handleSubmit} className='container'>
          <Row className="mb-6">
            <Form.Group as={Col} md="3" controlId="validationCustom05">
              <Form.Label>Código</Form.Label>
              <Form.Control type="number" required value={props.categoria.codigo} onChange={manipularMudanca} id="codigo" />
              <Form.Control.Feedback type="invalid">
                Por-Favor informe o código da categoria
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustom01">
              <Form.Label>Descrição</Form.Label>
              <Form.Control
                required
                type="text"
                value={props.categoria.descricao}
                onChange={manipularMudanca}
                id="descricao"
                placeholder="Descrição"
              />
              <Form.Control.Feedback type='invalid'>Informe a Descrição da categoria</Form.Control.Feedback>
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
          <Row>

            <Col md={1}><Button type="submit">{props.modoEdicao ? "Alterar" : "Cadastrar"}</Button></Col>
            <Col md={{ offset: 1 }}>
              <Button onClick={() => {
                props.setExibirTabela(true);
                props.setModoEdicao(false)
                zeraCategoria();
              }}>Voltar</Button>
            </Col>
          </Row>
          <Toaster position='top-right' />
        </Form>
      );
    }
}
