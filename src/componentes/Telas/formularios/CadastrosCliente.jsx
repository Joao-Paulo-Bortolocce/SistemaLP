import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';

export default function CadastroCliente(props) {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity()) {
      if (props.modoEdicao) {
        props.setListaDeClientes(props.listaDeClientes.map((item) => {
          return item.cpf === props.cliente.cpf ? props.cliente : item;
        }));
        props.setModoEdicao(false);
      }
      else {
        props.setListaDeClientes([...props.listaDeClientes, props.cliente]);
      }
      props.setExibirTabela(true);
      props.setCliente({
        "nome": "",
        "cpf": "",
        "email": "",
        "cep": "",
        "estado": "",
        "celular": "",
        "dataNascimento": "",
      });
    }
    else
      setValidated(true);

    event.preventDefault();
    event.stopPropagation();

  };

  function manipularMudanca(event) {
    const id = event.currentTarget.id;
    const valor = event.currentTarget.value;
    props.setCliente({ ...props.cliente, [id]: valor });
  }

  useEffect(()=>{
    if (props.modoEdicao) {
      document.getElementById('botao').innerText = "Editar";
    }
    else {
      document.getElementById('botao').innerText = "Cadastrar";
    }
  })

  return (
    <Form noValidate validated={validated} onSubmit={handleSubmit} className='container'>
      <Row className="mb-3">
        <Form.Group as={Col} md="4">
          <Form.Label>Nome</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Nome"
            id="nome"
            value={props.cliente.nome}
            onChange={manipularMudanca}
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>

        <Form.Group as={Col} md="3">
          <Form.Label>CPF</Form.Label>
          <Form.Control
            type="text"
            placeholder="123.456.789-01"
            required
            id="cpf"
            value={props.cliente.cpf}
            onChange={manipularMudanca}
          />
          <Form.Control.Feedback type="invalid">
            Por Favor informe seu CPF
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group as={Col} md="5">
          <Form.Label>Email</Form.Label>
          <InputGroup hasValidation>
            <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
            <Form.Control
              type="text"
              placeholder="E-mail"
              aria-describedby="inputGroupPrepend"
              required
              id="email"
              value={props.cliente.email}
              onChange={manipularMudanca}
            />
            <Form.Control.Feedback type="invalid">
              Por-favor informe seu e-mail
            </Form.Control.Feedback>
          </InputGroup>
        </Form.Group>
      </Row>

      <Row className="mb-3">
        <Form.Group as={Col} md="3">
          <Form.Label>CEP</Form.Label>
          <Form.Control
            type="text"
            placeholder="CEP"
            required
            id="cep"
            value={props.cliente.cep}
            onChange={manipularMudanca}
          />
          <Form.Control.Feedback type="invalid">
            Por-favor informe seu CEP
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group as={Col} md="3">
          <Form.Label>Estado</Form.Label>
          <Form.Select
            aria-label="Estado"
            required
            id="estado"
            value={props.cliente.estado}
            onChange={manipularMudanca}
          >
            <option value="">Selecione um estado</option>
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
            Por-favor informe seu estado
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group as={Col} md="3">
          <Form.Label>Celular</Form.Label>
          <Form.Control
            type="text"
            placeholder="(18) 98134-0947"
            required
            id="celular"
            value={props.cliente.celular}
            onChange={manipularMudanca}
          />
          <Form.Control.Feedback type="invalid">
            Por-favor informe o seu celular de contato
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group as={Col} md="3">
          <Form.Label>Data de Nascimento</Form.Label>
          <Form.Control
            type="date"
            required
            id="dataNascimento"
            value={props.cliente.dataNascimento}
            onChange={manipularMudanca}
          />
          <Form.Control.Feedback type="invalid">
            Por-favor informe a data de nascimento
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

      <Row>
        <Col md={1}><Button type="submit" id="botao"></Button></Col>
        <Col md={{ offset: 1 }}>
          <Button onClick={() => { props.setExibirTabela(true) }}>Voltar</Button>
        </Col>
      </Row>
    </Form>
  );
}
