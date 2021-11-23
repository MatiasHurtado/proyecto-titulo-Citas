import React from 'react'
import { Button, Col, Form, Row } from 'react-bootstrap'
import cita from '../data/cita'



export const VerCita = () => {

   const citaTest = cita[0];
   console.log(citaTest);
   
   return (
      <div className="container-form">
      <h5>Cita</h5>
      <Form className="container-form-citas">
      <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
            <Form.Label column sm="2">
               Nombre
            </Form.Label>
            <Col sm="10">
            <Form.Label column sm="2">
               {citaTest.nombreCita}
            </Form.Label>
            </Col>
         </Form.Group>

         <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
            <Form.Label column sm="2">
               Asistentes
            </Form.Label>
            <Col sm="10">
            <Form.Label column sm="2">
            {citaTest.asistentes}
            </Form.Label>            </Col>
         </Form.Group>

         <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
            <Form.Label column sm="2">
               Comuna
            </Form.Label>
            <Col sm="10">
            <Form.Label column sm="2">
            {citaTest.comuna}

            </Form.Label>            </Col>
         </Form.Group>
         <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
            <Form.Label column sm="2">
               Direccion
            </Form.Label>
            <Col sm="10">
            <Form.Label column sm="2">
            {citaTest.direccion}

            </Form.Label>
            </Col>
         </Form.Group>

         <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
            <Form.Label column sm="2">
               Numero
            </Form.Label>
            <Col sm="10">
            <Form.Label column sm="2">
            {citaTest.numero}

            </Form.Label>            </Col>
         </Form.Group>

         <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
            <Form.Label column sm="2">
               Fecha
            </Form.Label>
            <Col sm="10">
            <Form.Label column sm="2">
            {citaTest.fecha}

            </Form.Label>            </Col>
         </Form.Group>
         <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
            <Form.Label column sm="2">
               Hora
            </Form.Label>
            <Col sm="10">
            <Form.Label column sm="2">
            {citaTest.hora}

            </Form.Label>            </Col>
         </Form.Group>
         <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
            <Form.Label column sm="2">
               Categoria
            </Form.Label>
            <Col sm="10">
            <Form.Label column sm="2">
            Casa
            </Form.Label>     
            </Col>
         </Form.Group>
         <Button variant="warning" type="button">
            Editar
         </Button>
         <Button variant="danger" type="button">
            Eliminar
         </Button>
         </Form>
   </div>

   )
}
