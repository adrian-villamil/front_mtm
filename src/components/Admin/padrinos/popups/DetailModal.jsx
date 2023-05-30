import * as Facons from 'react-icons/fa';
import * as Aicons from 'react-icons/ai'


export const DetailModal = ({ padrino }) => {
  let data = {}

  if (padrino != null) {
    // console.log(paciente)
    data = padrino
    console.log(data)
  }

  return (
    <>
      <h1><Facons.FaUserAlt /> {data.nombre} </h1>

      <div className='alert alert-secondary' > <h2><b>Código:</b> {data.id}</h2>  </div>
      <div className='alert alert-secondary' > <h2><b>Nombre:</b> {data.nombre}</h2>  </div>
      <div className='alert alert-secondary' > <h2><b>Apellido:</b> {data.apellido}</h2>  </div>
      <div className='alert alert-secondary' > <h2><b>Tipo de persona:</b> {data.tipo_persona}</h2>  </div>
      <div className='alert alert-secondary' > <h2><b>Estrato:</b> {data.estrato}</h2>  </div>
      <div className='alert alert-secondary' > <h2><b>Fecha de nacimiento:</b> {data.fecha_nacimiento}</h2>  </div>
      <div className='alert alert-secondary' > <h2><b>Teléfono:</b> {data.telefono}</h2>  </div>
      <div className='alert alert-secondary' > <h2><b>Dirección:</b> {data.direccion}</h2>  </div>
      <div className='alert alert-secondary' > <h2><b>Correo:</b> {data.correo}</h2>  </div>
      <div className='alert alert-secondary' > <h2><b>Tiempo apadrinado:</b> {data.tiempo_apadrinando}</h2>  </div>
      <div className='alert alert-secondary' > <h2><b>Campo:</b> {data.campo}</h2>  </div>
    </>
  )
}