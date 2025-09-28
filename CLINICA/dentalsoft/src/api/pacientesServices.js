// src/api/pacientesService.js

// 1. Importamos lo que necesitamos
import axios from 'axios';
import { API_ENDPOINTS } from './config';

// 2. Función para OBTENER todos los pacientes (GET)
export const obtenerPacientes = async () => {
  try {
    console.log('🔄 Haciendo petición GET a:', API_ENDPOINTS.pacientes);
    
    // Esto es equivalente a tu: fetch("./clinicaPhp/pacientes.php")
    const response = await axios.get(API_ENDPOINTS.pacientes);
    
    console.log('✅ Pacientes recibidos:', response.data);
    return response.data; // Aquí están tus pacientes
    
  } catch (error) {
    console.error('❌ Error al obtener pacientes:', error);
    throw error; // Re-lanzamos el error para que la pantalla lo maneje
  }
};

// 3. Función para CREAR un paciente (POST)
export const crearPaciente = async (datosPaciente) => {
  try {
    console.log('🔄 Enviando paciente:', datosPaciente);
    
    // Esto es equivalente a tu fetch con method: "POST"
    const response = await axios.post(
      API_ENDPOINTS.pacientes, 
      datosPaciente, 
      {
        headers: {
          'Content-Type': 'application/json',
        }
      }
    );
    
    console.log('✅ Respuesta del servidor:', response.data);
    return response.data; // {success: true, message: "Paciente agregado"}
    
  } catch (error) {
    console.error('❌ Error al crear paciente:', error);
    throw error;
  }
};

// 4. Función para ACTUALIZAR un paciente (PUT) - ¡LA QUE FALTABA!
export const actualizarPaciente = async (id, datosPaciente) => {
  try {
    console.log('🔄 Actualizando paciente ID:', id, 'con datos:', datosPaciente);
    
    // PUT envía los datos directamente como POST, pero indica "actualizar"
    const datosCompletos = {
      id: id,
      ...datosPaciente // Spread operator: toma nombre, documento, telefono, correo
    };
    
    const response = await axios.put(
      API_ENDPOINTS.pacientes,
      datosCompletos,
      {
        headers: {
          'Content-Type': 'application/json',
        }
      }
    );
    
    console.log('✅ Paciente actualizado:', response.data);
    return response.data; // {success: true, message: "Paciente Actualizado"}
    
  } catch (error) {
    console.error('❌ Error al actualizar paciente:', error);
    throw error;
  }
};

// 5. Función para ELIMINAR un paciente (DELETE)
export const eliminarPaciente = async (id) => {
  try {
    console.log('🔄 Eliminando paciente ID:', id);
    
    // Axios DELETE envía datos en el body usando 'data'
    const response = await axios.delete(API_ENDPOINTS.pacientes, {
      data: { id }, // Tu PHP espera: {"id": 123}
      headers: {
        'Content-Type': 'application/json',
      }
    });
    
    console.log('✅ Paciente eliminado:', response.data);
    return response.data;
    
  } catch (error) {
    console.error('❌ Error al eliminar paciente:', error);
    throw error;
  }
};