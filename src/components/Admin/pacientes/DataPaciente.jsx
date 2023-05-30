import React, { useState, useEffect } from 'react';
import { getToken } from '../../../api/token'
import * as BScons from 'react-icons/bs';
import * as Aicons from 'react-icons/ai';
import { AddPaciente } from '../../../components/Admin/pacientes'
import { DetailModal, ModalEdit } from '../pacientes/popups'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import * as MDcons from 'react-icons/md';


export const DataPaciente = ({ props }) => {
  const [data, setData] = useState([]);
  const [selectedPaciente, setSelectedPaciente] = useState(null);
  const TOKEN = getToken()
  const MySwal = withReactContent(Swal)

  const DetallePaciente = (paciente) => {

    setSelectedPaciente(paciente);

  }

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const response = await fetch('http://127.0.0.1:8000/api/paciente/', { method: 'GET', headers: { Authorization: `Bearer ${TOKEN}` } });
    const jsonData = await response.json();
    setData(jsonData);

  };

  const eliminarPaciente = async (id) => {
    const TOKEN = getToken()

    const response = await fetch(`http://127.0.0.1:8000/api/paciente/${id}/`, { method: 'DELETE', headers: { Authorization: `Bearer ${TOKEN}` } });
    const response2 = await fetch('http://127.0.0.1:8000/api/paciente/', { method: 'GET', headers: { Authorization: `Bearer ${TOKEN}` } });
    const jsonData = await response2.json();
    setData(jsonData);

    MySwal.fire({
      title: <p>Hello World</p>,
      didOpen: () => {
        // `MySwal` is a subclass of `Swal` with all the same instance & static methods
        Swal.fire(
          'Tarea realizada con éxito',
          '',
          'success'
        )
      },
    })

  }

  const actualizar = async () => {
    window.location.reload(true);
  }

  return (
    <>


      <div className="modal fade" id="DetalleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">

            <div className="modal-header">

              <h1 className="modal-title fs-5" id="exampleModalLabel">Detalle</h1>

              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">


              <DetailModal paciente={selectedPaciente} />


            </div>

          </div>
        </div>
      </div>

      <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">Agregar paciente</h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <AddPaciente actualizar={actualizar} />
            </div>

          </div>
        </div>
      </div>


      <div className="modal fade" id="ModalEdit" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">Editar</h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <ModalEdit selectedPaciente={selectedPaciente} actualizar={actualizar} />
            </div>

          </div>
        </div>
      </div>
      <table className="table  table-hover">
        <thead>
          <tr>

            <th scope="col">Nombre</th>
            <th scope="col">Apellido</th>


            <th scope='col' >Seguro funebre</th>
            <th scope='col' >Correo</th>
            <th scope='col' >Direccion</th>
            <th scope='col' >Telefono</th>
            <th scope='col' >Acción</th>
            <th scope='col' >Familiar </th>

          </tr>
        </thead>
        <tbody>
          {data.map(item => (
            <tr key={item.id}>

              <td>{item.nombre}</td>
              <td>{item.apellido}</td>


              <td>{item.seguro_funebre}</td>
              <td>{item.correo}</td>
              <td>{item.direccion_residencia}</td>
              <td>{item.telefono}</td>
              <td><button className='btn btn-success' data-bs-toggle="modal" data-bs-target="#ModalEdit" onClick={DetallePaciente.bind(null, item)} ><BScons.BsFillPencilFill /></button>
                <button className='btn btn-primary' data-bs-toggle="modal" data-bs-target="#DetalleModal" onClick={DetallePaciente.bind(null, item)} ><Aicons.AiFillEye /></button>
                <button className='btn btn-danger' onClick={eliminarPaciente.bind(null, item.id)} ><BScons.BsFillTrashFill /></button>
              </td>
              <td> <button className='btn btn-info' altt="comunidad" ><MDcons.MdOutlineFamilyRestroom /></button>
                <button className='btn btn-warning' alt="comunidad" ><MDcons.MdPersonAddAlt1 /></button>
              </td>
            </tr>
          ))}

        </tbody>
      </table>


    </>
  )
}



