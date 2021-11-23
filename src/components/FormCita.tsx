import React from 'react'
import { Button, Col, Form ,Row} from 'react-bootstrap'

export const FormCita = () => {
   return (
      <div className="container-form">
         <h5>Crear Cita</h5>
         <Form className="container-form-citas">
         <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
               <Form.Label column sm="2">
                  Nombre
               </Form.Label>
               <Col sm="10">
                  <Form.Control type="text" placeholder="Nombre" />
               </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
               <Form.Label column sm="2">
                  Asistentes
               </Form.Label>
               <Col sm="10">
                  <Form.Control type="number" placeholder="Ingrese Cantidad De Asitentes" />
               </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
               <Form.Label column sm="2">
                  Comuna
               </Form.Label>
               <Col sm="10">
                  <Form.Select>
                     <option>Default select</option>
                     <option>Default select</option>
                     <option>Default select</option>
                     <option>Default select</option>
                     <option>Default select</option>

                  </Form.Select>
               </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
               <Form.Label column sm="2">
                  Direccion
               </Form.Label>
               <Col sm="10">
                  <Form.Control type="text" placeholder="Ingrese Tu Direccion" />
               </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
               <Form.Label column sm="2">
                  Numero
               </Form.Label>
               <Col sm="10">
                  <Form.Control type="number" placeholder="Ingrese El Numero De casa" />
               </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
               <Form.Label column sm="2">
                  Fecha
               </Form.Label>
               <Col sm="10">
                  <Form.Control type="date" placeholder="Password" />
               </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
               <Form.Label column sm="2">
                  Hora
               </Form.Label>
               <Col sm="10">
                  <Form.Control type="time" placeholder="Ingrese La Hora" />
               </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
               <Form.Label column sm="2">
                  Categoria
               </Form.Label>
               <Col sm="10">
               <Form.Select>
                  <option>Default select</option>
                  <option>Default select</option>
                  <option>Default select</option>
                  <option>Default select</option>
                  <option>Default select</option>
                  <option>Default select</option>

               </Form.Select>               </Col>
            </Form.Group>
            <Button variant="primary" type="button">
               Crear Cita
            </Button>
            <Button variant="warning" type="button">
               Reiniciar
            </Button>

            </Form>
      </div>

   )
}
