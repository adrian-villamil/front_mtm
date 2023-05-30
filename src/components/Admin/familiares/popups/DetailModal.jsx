import * as Facons from 'react-icons/fa';
import * as Aicons from 'react-icons/ai'


export const DetailModal = ({ familiar }) => {
  let data = {}

  if (familiar != null) {
    // console.log(paciente)
    data = familiar
    console.log(data)
  }

  return (
    <>
      <h1><Facons.FaUserAlt /> {data.nombre} </h1>

      <div className='alert alert-secondary' > <h2><b>Código:</b> {data.id}</h2>  </div>
      <div className='alert alert-secondary' > <h2><b>Nui:</b> {data.nui}</h2>  </div>
      <div className='alert alert-secondary' > <h2><b>Antecedentes oncologicos:</b> {data.antecedentes_oncologicos}</h2>  </div>
      <div className='alert alert-secondary' > <h2><b>Ocupación:</b> {data.ocupacion}</h2>  </div>
      <div className='alert alert-secondary' > <h2><b>Nombre:</b> {data.nombre}</h2>  </div>
      <div className='alert alert-secondary' > <h2><b>Apellido:</b> {data.apellido}</h2>  </div>
      <div className='alert alert-secondary' > <h2><b>Teléfono:</b> {data.telefono}</h2>  </div>
    </>
  )
}