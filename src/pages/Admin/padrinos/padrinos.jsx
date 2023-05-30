import React, { useState, useEffect } from 'react';
import { getToken } from '../../../api/token'
import * as BScons from 'react-icons/bs';
import * as Aicons from 'react-icons/ai'
import { AddPadrino } from '../../../components/Admin/padrinos'
import { DetailModal } from '../../../components/Admin/padrinos'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import { ModalEdit } from '../../../components/Admin/padrinos/popups/ModalEdit';


export const padrinos = () => {
  const actu = null
  const [data, setData] = useState([]);
  const [selectedPadrino, setSelectedPadrino] = useState(null);
  const TOKEN = getToken()
  const MySwal = withReactContent(Swal)

  const detallepadrino = (padrino) => {
    setSelectedPadrino(padrino)
  }


  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const response = await fetch('http://127.0.0.1:8000/api/padrino/', { method: 'GET', headers: { Authorization: `Bearer ${TOKEN}` } });
    const jsonData = await response.json();
    setData(jsonData);

    console.log(jsonData)

  };

  const actualizar = () => {
    window.location.reload(true);
  }

  const eliminarPadrino = async (id) => {
    const response = await fetch(`http://127.0.0.1:8000/api/padrino/${id}/`, { method: 'DELETE', headers: { Authorization: `Bearer ${TOKEN}` } });
    actualizar();
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


  console.log(data);



  return (
    <>
      <h1>Padrinos</h1>





      <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">Agregar padrino</h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <AddPadrino actualizar={actualizar} />


            </div>

          </div>
        </div>
      </div>

      <div className="modal fade" id="Detalle" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">Detalle</h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">

              <DetailModal padrino={selectedPadrino} />

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
              <ModalEdit selectedPadrino={selectedPadrino} actualizar={actualizar} />
            </div>

          </div>
        </div>
      </div>




      <button className='btn btn-success' data-bs-toggle="modal" data-bs-target="#exampleModal" > <BScons.BsPersonFillAdd /> Agregar</button>
      <table className="table  table-hover">
        <thead>
          <tr>
            <th scope="col">id</th>
            <th scope="col">Nombre</th>
            <th scope="col">Apellido</th>
            <th scope="col">Tipo de persona</th>
            <th scope='col' >Estrato</th>
            <th scope='col' >Telefono</th>
            <th scope='col' >Direccion</th>
            <th scope='col' >Correo</th>
            <th scope='col' >Tiempo apadrinando</th>
            <th scope='col' >Campo de desempeño</th>
            <th scope='col' >Acción</th>
          </tr>
        </thead>
        <tbody>
          {data.map(item => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.nombre}</td>
              <td>{item.apellido}</td>
              <td>{item.tipo_persona}</td>
              <td>{item.estrato}</td>
              <td>{item.telefono}</td>
              <td>{item.direccion}</td>
              <td>{item.correo}</td>
              <td>{item.tiempo_apadrinando}</td>
              <td>{item.campo}</td>
              <td><button className='btn btn-success' data-bs-toggle="modal" data-bs-target='#ModalEdit' onClick={detallepadrino.bind(null, item)} ><BScons.BsFillPencilFill /></button>
                <button className='btn btn-primary' data-bs-toggle="modal" data-bs-target="#Detalle" onClick={detallepadrino.bind(null, item)} ><Aicons.AiFillEye /></button>
                <button className='btn btn-danger' onClick={eliminarPadrino.bind(null, item.id)} ><BScons.BsFillTrashFill /></button>
              </td>
            </tr>
          ))}

        </tbody>
      </table>




    </>
  )
}


