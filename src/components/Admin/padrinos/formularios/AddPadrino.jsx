import { useFormik } from 'formik';
import * as Yup from 'yup';
import { getToken } from '../../../../api/token'
import { BASE_API } from '../../../../utils/constants'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

export const AddPadrino = ({ actualizar }) => {

  const TOKEN = getToken()
  const MySwal = withReactContent(Swal)


  const formik = useFormik({
    initialValues: initialValues(),
    // validationSchema: Yup.object(validationSchema()),
    onSubmit: (formValue) => {
      console.log("Datos enviados");



      const fetchData = async () => {
        const response = await fetch(`${BASE_API}/api/padrino/`, { method: 'POST', headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${TOKEN}` }, body: JSON.stringify(formValue) });
        const jsonData = await response.json();

        return response

      };
      fetchData();


      MySwal.fire({
        title: <p>Hello World</p>,
        didOpen: () => {
          // `MySwal` is a subclass of `Swal` with all the same instance & static methods
          Swal.fire(
            'Padrino agregado con éxito',
            '',
            'success'
          )
        },
      })




      actualizar()

    }

  });



  return (
    <>

      <form onSubmit={formik.handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Nombre</label>
          <input type="text" className="form-control" aria-describedby="emailHelp" value={formik.values.nombre}
            onChange={formik.handleChange} name='nombre' error={formik.errors.nombre} />

        </div>
        <div className="mb-3">
          <label className="form-label">Apellido</label>
          <input type="text" className="form-control" value={formik.values.apellido}
            onChange={formik.handleChange} name='apellido' error={formik.errors.apellido} />
        </div>

        <div className="mb-3">
          <label className="form-label">Tipo de persona</label>
          <input type="text" className="form-control" value={formik.values.tipo_persona}
            onChange={formik.handleChange} name='tipo_persona' error={formik.errors.tipo_persona} />
        </div>
        <div className="mb-3">
          <label className="form-label">Estrato</label>
          <input type="number" className="form-control" value={formik.values.estrato}
            onChange={formik.handleChange} name='estrato' error={formik.errors.estrato} />
        </div>
        <div className="mb-3">
          <label className="form-label">Fecha de nacimiento</label>
          <input type="date" className="form-control" value={formik.values.fecha_nacimiento}
            onChange={formik.handleChange} name='fecha_nacimiento' error={formik.errors.fecha_nacimiento} />
        </div>

        <div className="mb-3">
          <label className="form-label">Teléfono</label>
          <input type="number" className="form-control" value={formik.values.telefono}
            onChange={formik.handleChange} name='telefono' error={formik.errors.telefono} />
        </div>
        <div className="mb-3">
          <label className="form-label">Direccion</label>
          <input type="text" className="form-control" value={formik.values.direccion}
            onChange={formik.handleChange} name='direccion' error={formik.errors.direccion} />
        </div>
        <div className="mb-3">
          <label className="form-label">Correo</label>
          <input type="email" className="form-control" value={formik.values.correo}
            onChange={formik.handleChange} name='correo' error={formik.errors.correo} />
        </div>
        <div className="mb-3">
          <label className="form-label">Tiempo apadrinando(años)</label>
          <input type="number" className="form-control" value={formik.values.tiempo_apadrinando}
            onChange={formik.handleChange} name='tiempo_apadrinando' error={formik.errors.tiempo_apadrinando} />
        </div>
        <div className="mb-3">
          <label className="form-label">Campo (sector de labora)</label>
          <input type="text" className="form-control" value={formik.values.campo}
            onChange={formik.handleChange} name='campo' error={formik.errors.campo} />
        </div>


        <div className="modal-footer">
          <button type='submit' className="btn btn-primary">Agregar</button>
        </div>
      </form>
    </>
  )
}

const initialValues = () => {
  return {
    nombre: "",
    apellido: "",
    tipo_persona: "",
    estrato: "",
    fecha_nacimiento: "",
    telefono: "",
    direccion: "",
    correo: "",
    tiempo_apadrinando: "",
    campo: "",

  };
}

// const validationSchema = () => {
//   return {
//     nombre: Yup.string(),
//     apellido: Yup.string(),
//     tipo_persona: Yup.string(length = 255),
//     estrato: Yup.number(),
//     fecha_nacimiento: Yup.date(),
//     telefono: Yup.number(),
//     direccion: Yup.string(),
//     correo: Yup.string().email("error en dato"),
//     tiempo_apadrinando: Yup.number(),
//     campo: Yup.string().email("error en dato"),


//   }
// }