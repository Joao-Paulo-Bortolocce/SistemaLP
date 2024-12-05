import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import { Spinner, Alert } from 'react-bootstrap';
import {atualizarFornecedor, incluirFornecedor} from "../../../redux/fornecedorReducer";
import { formatarCelular, formatarTelefone, formatarCNPJ, formatarCEP } from "../../../servicos/formatadores.js";
import ESTADO from '../../../redux/estados';
import { useSelector, useDispatch } from 'react-redux';

export default function CadastrosFornecedor(props) {
  const [validated, setValidated] = useState(false);
  const { estado, mensagem } = useSelector((state) => state.fornecedor);
  const dispachante = useDispatch();


  function limpaFornecedor(){
     props.setFornecedor({
        "cnpj": "",
        "nome": "",
        "email": "",
        "estado": "",
        "celular": "",
        "telefone": "",
        "cep": "",
        "numero": 0
      });
  }

  function handleSubmit(event) {
    const form = event.currentTarget;
    if (form.checkValidity()) {
      if (props.modoEdicao) {
        dispachante(atualizarFornecedor(props.fornecedor))
        props.setModoEdicao(false);
      }
      else {
        dispachante(incluirFornecedor(props.fornecedor))
      }
      props.setExibirTabela(true);
     limpaFornecedor();
    }
    else
      setValidated(true);
    event.preventDefault();
    event.stopPropagation();
  };

  function manipularMudanca(evento) {
    const id = evento.target.id;
    let valor = evento.target.value;
    if (id === "cnpj") {
      valor = formatarCNPJ(valor)
    }
    else {
      if (id === "cep") {
        valor = formatarCEP(valor)
      }
      else {
        if (id === "celular") {
          valor = formatarCelular(valor);
        }
        else {
          if (id === "telefone") {
            valor = formatarTelefone(valor);
          }
        }
      }
    }
    props.setFornecedor({ ...props.fornecedor, [id]: valor }); //... Faz o espalhamento do objeto
    console.log(`Componente : ${id} : ${valor}`)
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
          <Row className="mb-3">
            <Form.Group as={Col} md="4">
              <Form.Label>CNPJ</Form.Label>
              <Form.Control
                required
                id="cnpj"
                type="text"
                placeholder="CNPJ"
                value={props.fornecedor.cnpj}
                onChange={manipularMudanca} // Valor do CNPJ
                maxLength={18}
              />
              <Form.Control.Feedback type="invalid"></Form.Control.Feedback>
            </Form.Group>

            <Form.Group as={Col} md="4">
              <Form.Label>Nome</Form.Label>
              <Form.Control
                required
                id="nome"
                type="text"
                placeholder="Nome"
                value={props.fornecedor.nome}
                onChange={manipularMudanca}  // Valor do Nome
              />
              <Form.Control.Feedback>Belo Nome!</Form.Control.Feedback>
            </Form.Group>

            <Form.Group as={Col} md="4">
              <Form.Label>Email</Form.Label>
              <InputGroup hasValidation>
                <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
                <Form.Control
                  type="text"
                  id="email"
                  placeholder="E-mail"
                  aria-describedby="inputGroupPrepend"
                  required
                  value={props.fornecedor.email}
                  onChange={manipularMudanca} // Valor do Email
                />
                <Form.Control.Feedback type="invalid">
                  Por favor, informe seu e-mail
                </Form.Control.Feedback>
              </InputGroup>
            </Form.Group>
          </Row>

          <Row className="mb-3">
            <Form.Group as={Col} md="6">
              <Form.Label>Estado</Form.Label>
              <Form.Select aria-label="Default select example" id="estado" value={props.fornecedor.estado} onChange={manipularMudanca}>
                <option value="">Estado</option>
                <option value="ac">Acre</option>
                <option value="al">Alagoas</option>
                <option value="ap">Amapá</option>
                <option value="am">Amazonas</option>
                <option value="ba">Bahia</option>
                <option value="ce">Ceará</option>
                <option value="df">Distrito Federal</option>
                <option value="es">Espírito Santo</option>
                <option value="go">Goiás</option>
                <option value="ma">Maranhão</option>
                <option value="mt">Mato Grosso</option>
                <option value="ms">Mato Grosso do Sul</option>
                <option value="mg">Minas Gerais</option>
                <option value="pa">Pará</option>
                <option value="pb">Paraíba</option>
                <option value="pr">Paraná</option>
                <option value="pe">Pernambuco</option>
                <option value="pi">Piauí</option>
                <option value="rj">Rio de Janeiro</option>
                <option value="rn">Rio Grande do Norte</option>
                <option value="rs">Rio Grande do Sul</option>
                <option value="ro">Rondônia</option>
                <option value="rr">Roraima</option>
                <option value="sc">Santa Catarina</option>
                <option value="sp">São Paulo</option>
                <option value="se">Sergipe</option>
                <option value="to">Tocantins</option>
              </Form.Select>
              <Form.Control.Feedback type="invalid">
                Por favor, informe o estado
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group as={Col} md="3">
              <Form.Label>Celular</Form.Label>
              <Form.Control
                type="text"
                placeholder="(18) 98134-0947"
                maxLength={15}
                required
                id="celular"
                value={props.fornecedor.celular}
                onChange={manipularMudanca}  // Valor do Celular
              />
              <Form.Control.Feedback type="invalid">
                Por favor, informe o seu celular de contato
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group as={Col} md="3">
              <Form.Label>Telefone</Form.Label>
              <Form.Control
                type="text"
                placeholder="(18) 9813-0947"
                required
                id="telefone"
                value={props.fornecedor.telefone}
                onChange={manipularMudanca} // Valor do Telefone
                maxLength={14}
              />
              <Form.Control.Feedback type="invalid">
                Por favor, informe o seu telefone de contato
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group as={Col} md="3">
              <Form.Label>CEP</Form.Label>
              <Form.Control
                type="text"
                placeholder="11111-111"
                required
                id="cep"
                value={props.fornecedor.cep}
                onChange={manipularMudanca} // Valor do CEP
                maxLength={9}
              />
              <Form.Control.Feedback type="invalid">
                Por favor, informe seu CEP
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group as={Col} md="3">
              <Form.Label>Número</Form.Label>
              <Form.Control
                type="number"
                required
                id="numero"
                value={props.fornecedor.numero}
                onChange={manipularMudanca} // Valor do Número
              />
              <Form.Control.Feedback type="invalid">
                Por favor, informe o número
              </Form.Control.Feedback>
            </Form.Group>
          </Row>
          <Form.Group className="mb-3">
            <Form.Check
              required
              label="Concordo com os termos de uso"
              feedback="Você tem que concordar antes de finalizar o cadastro"
              feedbackType="invalid"
              onChange={manipularMudanca}
            />
          </Form.Group>
          <Row>
            <Col md={1}><Button type="submit" id="botao">{props.modoEdicao ? "Alterar" : "Cadastrar"}</Button></Col>
            <Col md={{ offset: 1 }}>
              <Button onClick={() => { props.setExibirTabela(true) 
                limpaFornecedor()
              }}>Voltar</Button>
            </Col>
          </Row>
        </Form>
      );
    }
}
