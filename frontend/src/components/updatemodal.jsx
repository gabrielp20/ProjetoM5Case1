import { Modal, Button, Form } from 'react-bootstrap'
function UpdateContentModal(props) {
  return(
    <div
      className="modal show"
      style={{ display: 'block', position: 'initial' }}
    >
      <Modal show={props.isModalOpen}>
        <Form onSubmit={(event) => {
          props.updateContent(event)
        }}>
        <Modal.Header closeButton onClick={props.handleClose}>
          <Modal.Title>Atualizar Tarefa</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <Form.Group controlId="nome">
            <Form.Label>
              Nome
            </Form.Label>
            <Form.Control defaultValue={props.content.nome} type="text" />
          </Form.Group>

          <Form.Group controlId="categorias">
            <Form.Label>
              Categorias
            </Form.Label>
            <Form.Control defaultValue={props.content.categorias} type="text" />
          </Form.Group>

          <Form.Group controlId="vencimento">
            <Form.Label>
              Vencimento
            </Form.Label>
            <Form.Control defaultValue={props.content.vencimento} type="date" />
          </Form.Group>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={props.handleClose}>Fechar</Button>
          <Button variant="primary" type="submit">Salvar</Button>
        </Modal.Footer>
        </Form>
      </Modal >
    </div>
  )
}

export default UpdateContentModal
