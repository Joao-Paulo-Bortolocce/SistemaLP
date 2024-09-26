import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { InputGroup } from 'react-bootstrap';

export default function CadastroUsuario(props) {
  const [validated, setValidated] = useState(false);
  let visibilidade=props.usuario.tipo ==="adm" ? "visible" : "hidden";
  
  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity()) {
      if(props.modoEdicao){
        props.setListaDeUsuarios(props.listaDeUsuarios.map((item)=>{
          return item.username === props.usuario.username ? props.usuario : item;
        }));
      }
      else{
        props.setListaDeUsuarios([...props.listaDeUsuarios,props.usuario]);
      }
      props.setUsuario({
        "username":"",
        "senha":"",
        "email":"",   
        "tipo":0,
        "senhaAdmin":""
      });
      props.setExibirTabela(true);
      props.setModoEdicao(false);
    }
    else
      setValidated(true);
    event.preventDefault();
    event.stopPropagation();
  };

  function manipularMudanca(event){
    const id = event.currentTarget.id;
    const valor = event.currentTarget.value;
    props.setUsuario({...props.usuario, [id]:valor})
    if(id==="tipo"){
        valor ==="adm" ? visibilidade="visible" : visibilidade="hidden"
    }
  }

  return (
    <Form noValidate validated={validated} onSubmit={handleSubmit} className='container'>
      <Row className="mb-6">
        <Form.Group as={Col} md="3" controlId="validationCustom05">
          <Form.Label>username</Form.Label>
          <Form.Control type="text"  required   value={props.usuario.username} onChange={manipularMudanca} id="username"/>
          <Form.Control.Feedback type="invalid">
            Por-Favor informe o username da usuario
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="5">
          <Form.Label>Email</Form.Label>
          <InputGroup hasValidation>
            <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
            <Form.Control
              type="password"
              placeholder="E-mail"
              aria-describedby="inputGroupPrepend"
              required
              id="email"
              value={props.usuario.email}
              onChange={manipularMudanca}
            />
            <Form.Control.Feedback type="invalid">
              Por-favor informe seu e-mail
            </Form.Control.Feedback>
          </InputGroup>
        </Form.Group>
      </Row>
      <Row className="mb-6">
        <Form.Group as={Col} md="4" controlId="validationCustom05">
          <Form.Label>Senha</Form.Label>
          <Form.Control type="text"  required   value={props.usuario.senha} onChange={manipularMudanca} id="senha" placeholder='******'/>
          <Form.Control.Feedback type="invalid">
            Por-Favor informe a senha da usuario
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="4" controlId="validationCustom01">
          <Form.Label>Senha de Administrador</Form.Label>
          <Form.Control
            required
            type="password"
            value={ props.usuario.senhaAdmin}
            onChange={manipularMudanca}
            id="senhaAdmin"
            placeholder="*******"
            visibility={visibilidade}
          />
          <Form.Control.Feedback type='invalid'>Informe a senha correta</Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="3">
          <Form.Label>Tipo</Form.Label>
          <Form.Select
            aria-label="tipo"
            required
            id="tipo"
            value={props.usuario.tipo}
            onChange={manipularMudanca}
          >
            <option value="">Selecione um Tipo</option>
            <option value="adm">Administrador</option>
            <option value="nrm">Normal</option>
          </Form.Select>
          <Form.Control.Feedback type="invalid">
            Por-favor informe seu Tipo
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

        <Col md={1}><Button type="submit">{props.modoEdicao ? "Alterar": "Cadastrar"}</Button></Col>
        <Col md={{ offset: 1 }}>
          <Button onClick={() => { props.setExibirTabela(true) }}>Voltar</Button>
        </Col>
      </Row>
    </Form>
  );
}
