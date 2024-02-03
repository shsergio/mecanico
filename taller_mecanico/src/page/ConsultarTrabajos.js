import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Modal from 'react-modal';
import Header from '../components/Header';
import '../css/consultartrabajos.css';

Modal.setAppElement('#root'); // Debes especificar dónde se renderiza tu aplicación (root, en este caso)

const ConsultarTrabajos = () => {
  const [jobs, setJobs] = useState([]);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [newJob, setNewJob] = useState({
    id_mecanico: 1,
    id_cliente: 1,
    fecha: '',
    descripcion: '',
  });

  const navigate = useNavigate();

  useEffect(() => {
    // Obtener la lista de trabajos al cargar el componente
    axios.get('http://localhost:4001/api/trabajos')
      .then(response => setJobs(response.data))
      .catch(error => console.error('Error fetching jobs:', error));
  }, []);

  const displayJobs = () => {
    return jobs.map((job) => (
      <tr key={job.id_trabajo}>
        <td>{job.id_trabajo}</td>
        <td>{job.descripcion}</td>
        <td>{job.horas}</td>
        <td>{job.estado}</td>
        <td>{job.tipo_de_trabajo}</td>
        <td>{`$ ${job.costo * job.horas}`}</td>
        <td>
          <button onClick={() => navigate(`/detalles/${job.id_trabajo}`)}>Ver detalles</button>
        </td>
      </tr>
    ));
  };

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewJob(prevState => ({ ...prevState, [name]: value }));
  };
  const agregarTrabajo = () => {
    axios.post('http://localhost:4001/api/trabajos', newJob)
      .then(response => {
        // Actualizar el estado con el nuevo trabajo
        setJobs([...jobs, response.data]);
        setModalIsOpen(false);
  
        // Reiniciar los campos del nuevo trabajo después de agregarlo
        setNewJob({
          id_mecanico: 1,
          id_cliente: 1,
          fecha: '', // Agrega el campo fecha y otros según tu modelo de datos
          descripcion: '',
          horas: '',
          tipo_de_trabajo: '', // Asegúrate de agregar todos los campos necesarios
          costo: 0, // O el valor predeterminado que desees
          estado: '',
          // Agrega otros campos según tu modelo de datos
        });
      })
      .catch(error => console.error('Error al agregar trabajo:', error));
  };
  

  return (
    <div className="container">
      <Header />
      <h1>Consultar y actualizar trabajos</h1>
      <h2>Consultar y actualizar trabajos</h2>
      <button onClick={openModal}>Agregar Trabajo</button>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Agregar Trabajo"
      >
        <h2>Agregar Trabajo</h2>
        <form>
          <label>
            Descripción:
            <input type="text" name="descripcion" onChange={handleInputChange} value={newJob.descripcion} />
          </label>
          <label>
            Horas:
            <input type="text" name="horas" onChange={handleInputChange} value={newJob.horas} />
          </label>
          {/* Otros campos según tu modelo de datos */}
          <button type="button" onClick={agregarTrabajo}>Guardar</button>
          <button type="button" onClick={closeModal}>Cancelar</button>
        </form>
      </Modal>

      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Descripción</th>
            <th>Horas</th>
            <th>Estado</th>
            <th>Tipo</th>
            <th>Precio</th>
            <th>Detalles</th>
          </tr>
        </thead>
        <tbody>{displayJobs()}</tbody>
      </table>
    </div>
  );
};

export default ConsultarTrabajos;
