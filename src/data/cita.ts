
interface Cita{
   id: number;
   idTrabador: number;
   nombreCita: string;
   asistentes: number;
   comuna: string;
   direccion: string;
   numero: number;
   fecha: string;
   hora: string;
   idCategoria: number;
}


const cita:Cita[] = 
[
   {id:1,idTrabador:2,nombreCita:'Luisa San Bernardo',asistentes:5,comuna:"Maipu",direccion:"Combate angamos",numero:4212,fecha:"10/20/20",hora:"02:12:20",idCategoria:5},
   {id:2,idTrabador:2,nombreCita:'Luisa San Bernardo',asistentes:5,comuna:"San Bernardo",direccion:"Combate angamos",numero:4212,fecha:"10/20/20",hora:"02:12:20",idCategoria:5},
   {id:3,idTrabador:2,nombreCita:'Luisa San Bernardo',asistentes:5,comuna:"Buin",direccion:"Combate angamos",numero:4212,fecha:"10/20/20",hora:"02:12:20",idCategoria:5}
]


export default cita;



