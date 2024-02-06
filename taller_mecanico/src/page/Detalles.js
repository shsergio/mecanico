import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Header from '../components/Header';

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
    const fetchJobDetails = async () => {
      try {
        const response = await axios.get(`http://localhost:4001/api/trabajos/${id}`);
        setJob(response.data);
      } catch (error) {
        console.error('Error fetching job details:', error);
      }
    };

    fetchJobDetails();
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
            <td>{job.descripcion}</td>
          </tr>
          <tr>
            <th>Horas trabajadas:</th>
            <td>{job.horas} hrs</td>
          </tr>
          <tr>
            <th>Precio fijo (350 pesos/hora):</th>
            <td>$ {job.costo * job.horas}.00</td>
          </tr>
          <tr>
            <th>Costo del material:</th>
            <td>$ 0.00</td>
          </tr>
          <tr>
            <th>Precio total:</th>
            <td>$ {job.costo * job.horas}.00</td>
          </tr>
        </tbody>
      </table>
      <button onClick={() => window.history.back()}>Regresar</button>
    </div>
  );
};

export default Detalles;
