// src/api/citasService.js

// 1. Importamos lo que necesitamos
import axios from 'axios';
import { API_ENDPOINTS } from './config';

// 2. Función para OBTENER todas las citas (GET)
export const obtenerCitas = async () => {
  try {
    console.log('🔄 Haciendo petición GET a:', API_ENDPOINTS.citas);
    
    // Tu PHP responde con JOIN entre citas y pacientes
    const response = await axios.get(API_ENDPOINTS.citas);
    
    console.log('✅ Citas recibidas:', response.data);
    return response.data; // Array con citas + nombre del paciente
    
  } catch (error) {
    console.error('❌ Error al obtener citas:', error);
    throw error;
  }
};

// 3. Función para CREAR una cita (POST)
export const crearCita = async (datosCita) => {
  try {
    console.log('🔄 Enviando cita:', datosCita);
    
    // datosCita debe tener: paciente_id, fecha, hora, odontologo, estado
    const response = await axios.post(
      API_ENDPOINTS.citas,
      datosCita,
      {
        headers: {
          'Content-Type': 'application/json',
        }
      }
    );
    
    console.log('✅ Respuesta del servidor:', response.data);
    return response.data; // {success: true, message: "Cita creada exitosamente", cita_id: 123}
    
  } catch (error) {
    console.error('❌ Error al crear cita:', error);
    throw error;
  }
};

// 4. Función para ACTUALIZAR una cita (PUT)
export const actualizarCita = async (id, datosCita) => {
  try {
    console.log('🔄 Actualizando cita ID:', id, 'con datos:', datosCita);
    
    // Tu PHP espera: id, fecha, hora, odontologo, estado
    const datosCompletos = {
      id: id,
      ...datosCita // fecha, hora, odontologo, estado
    };
    
    const response = await axios.put(
      API_ENDPOINTS.citas,
      datosCompletos,
      {
        headers: {
          'Content-Type': 'application/json',
        }
      }
    );
    
    console.log('✅ Cita actualizada:', response.data);
    return response.data; // {success: true, message: "Cita actualizada correctamente"}
    
  } catch (error) {
    console.error('❌ Error al actualizar cita:', error);
    throw error;
  }
};

// 5. Función para ELIMINAR una cita (DELETE)
export const eliminarCita = async (id) => {
  try {
    console.log('🔄 Eliminando cita ID:', id);
    
    const response = await axios.delete(API_ENDPOINTS.citas, {
      data: { id }, // Tu PHP espera: {"id": 123}
      headers: {
        'Content-Type': 'application/json',
      }
    });
    
    console.log('✅ Cita eliminada:', response.data);
    return response.data; // {success: true, message: "Cita eliminada correctamente"}
    
  } catch (error) {
    console.error('❌ Error al eliminar cita:', error);
    throw error;
  }
};

// 6. FUNCIÓN EXTRA: Filtrar citas por estado
export const obtenerCitasPorEstado = async (estado) => {
  try {
    console.log('🔄 Obteniendo citas con estado:', estado);
    
    // Primero obtenemos todas las citas
    const todasLasCitas = await obtenerCitas();
    
    // Filtramos en el cliente (también podrías hacerlo en PHP)
    const citasFiltradas = todasLasCitas.filter(cita => 
      cita.estado.toLowerCase() === estado.toLowerCase()
    );
    
    console.log(`✅ Encontradas ${citasFiltradas.length} citas con estado "${estado}"`);
    return citasFiltradas;
    
  } catch (error) {
    console.error('❌ Error al filtrar citas por estado:', error);
    throw error;
  }
};