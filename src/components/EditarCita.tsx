import React from 'react'
import { Button, Col, Form, Row } from 'react-bootstrap'
import cita from '../data/cita'
export const EditarCita = () => {

   const citaTest = cita[0];
   console.log(citaTest);
   return (
      <div className="container-form">
         <h5>Editar Cita</h5>
         <Form className="container-form-citas">
            <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
               <Form.Label column sm="2">
                  Nombre
               </Form.Label>
               <Col sm="10">
                  <Form.Control type="text" placeholder="Nombre" value={citaTest.nombreCita} />
               </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
               <Form.Label column sm="2">
                  Asistentes
               </Form.Label>
               <Col sm="10">
                  <Form.Control type="number" placeholder="Ingrese Cantidad De Asitentes" value={citaTest.asistentes} />
               </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
               <Form.Label column sm="2">
                  Comuna
               </Form.Label>
               <Col sm="10">
                  <Form.Select>
                     <option>{citaTest.comuna}</option>
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
                  <Form.Control type="text" placeholder="Ingrese Tu Direccion" value={citaTest.direccion}/>
               </Col>
            </Form.Group>
     

            <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
               <Form.Label column sm="2">
                  Numero
               </Form.Label>
               <Col sm="10">
                  <Form.Control type="number" placeholder="Ingrese El Numero De casa" value={citaTest.numero}/>
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
                     <option>Casa</option>
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
