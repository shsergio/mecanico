import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import '../css/consultartrabajos.css'

const ConsultarTrabajos = () => {
  const [jobs, setJobs] = useState([
    {
      id: 0,
      description: '',
      hours: 0,
      status: '',
      type: '',
      price: 0,
      details: '',
    },
  ]);
  const navigate = useNavigate();

  const displayJobs = () => {
    return jobs.map((job) => (
      <tr key={job.id}>
        <td>{job.id}</td>
        <td>{job.description}</td>
        <td>{job.hours}</td>
        <td>{job.status}</td>
        <td>{job.type}</td>
        <td>{`$ ${job.price * job.hours}`}</td>
        <td>
          <button onClick={() => navigate(`/detalles/${job.id}`)}>Ver detalles</button>
        </td>
      </tr>
    ));
  };

  return (
    <div className="container">
      <Header />
      <h1>Consultar y actualizar trabajos</h1>
      <h2>Consultar y actualizar trabajos</h2>
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