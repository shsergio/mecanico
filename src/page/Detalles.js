import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../components/Header';

const jobs = [
  {
    id: 0,
    description: '',
    hours: 0,
    status: '',
    type: '',
    price: 0,
    details: '',
  },
  // ... más trabajos
];

const Detalles = () => {
  const { id } = useParams();
  const [job, setJob] = useState({
    id: 0,
    description: '',
    hours: 0,
    status: '',
    type: '',
    price: 0,
    details: '',
  });

  useEffect(() => {
    const jobDetails = jobs.find((job) => job.id === parseInt(id));
    if (jobDetails) {
      setJob(jobDetails);
    }
  }, [id]);

  return (
    
    <div>
      <Header />
      <h1>Detalles del trabajo</h1>
      <table>
        <tbody>
          <tr>
            <th>ID:</th>
            <td>{job.id}</td>
          </tr>
          <tr>
            <th>Descripción:</th>
            <td>{job.description}</td>
          </tr>
          <tr>
            <th>Horas trabajadas:</th>
            <td>{job.hours} hrs</td>
          </tr>
          <tr>
            <th>Precio fijo (350 pesos/hora):</th>
            <td>$ {job.price * job.hours}.00</td>
          </tr>
          <tr>
            <th>Costo del material:</th>
            <td>$ 0.00</td>
          </tr>
          <tr>
            <th>Precio total:</th>
            <td>$ {job.price * job.hours}.00</td>
          </tr>
        </tbody>
      </table>
    </div>
    
  );
};

export default Detalles;