import { CitaPrevia } from "../components/CitaPrevia"

export const ListCitas = () => {
   return (
      <div className="list-Page">
         <div className="list-page-title">
            <h2>Tus Citas</h2>
         </div>
         <div className="contenedor-citas">
            <CitaPrevia/>
         </div>
      </div>
   )
}
