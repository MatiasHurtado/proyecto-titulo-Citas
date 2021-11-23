import React from 'react'
import cita from '../data/cita'

export const CitaPrevia = () => {


   console.log(cita)

   return (
      <>
         {
            cita.map(cit =>
            (
               <div className="cita-card " key={cit.id}>
                  <div className="cita-card-head">
                     <h5>{cit.nombreCita}</h5>
                  </div>
                  <div className="cita-card-body">
                     <p>Asistentes: {cit.asistentes}</p>
                     <p> {cit.comuna}</p>
                  </div>
                  <div className="cita-card-fechas">
                     <p>Fecha: {cit.fecha} - {cit.hora} </p>
                     
                  </div>
               </div>
            )

            )
         }


      </>


   )
}
