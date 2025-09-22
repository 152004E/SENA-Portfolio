import axios from "axios";
import Constants from "expo-constants";

let API_URL = "http://192.168.1.18/SENA-Portfolio/proyecto_tareas_2/backend-php";



try {
    //para expo sdk
    const debuggerhost =
        Constants.manifest2?.extra?.espogo?.debuggerhost ||
        Constants.expoConfig?.hostUri ||
        Constants.manifest?.debuggerhost;

    if (debuggerhost) {
        const ip = debuggerhost.split(":").shift();
        API_URL = `http://${ip}/SENA-Portfolio/proyecto_tareas_2/backend-php`;
    }
} catch (error) {
    console.warn("No se puede cargar la de Expo, usando el valor pro defecto")
}
const api = axios.create({
  baseURL: API_URL,
});

export const obtenerTareas = async () => {
    try {
        const { data } = await api.get("/listar_tareas.php");
        return Array.isArray(data) ? data : [];

    } catch (error) {
        console.error("error al obtener las tareas : ", error.message);
        return [];
    }
}

export const agregarTareas = async (titulo) => {
    try {
        const { data } = await api.post("/crear_tareas.php",{titulo});
        return data;

    } catch (error) {
        console.error("error al agragar las tareas : ", error.message);
        return {succes: false, massage : error.massage};
    }
}
export const eliminarTareas = async (id) => {
    try {
        const { data } = await api.post("/eliminar_tareas.php",{id});
        return data;

    } catch (error) {
        console.error("error al eliminar las tareas : ", error.message);
        return {succes: false, massage : error.massage};
    }
}

export const cambiarEstadoTareas = async (id,estado) => {
    try {
        const { data } = await api.post("/cambiar_estado.php",{id,estado});
        return data;

    } catch (error) {
        console.error("error al actualizar las tareas : ", error.message);
        return {succes: false, massage : error.massage};
    }
}

export default{
    obtenerTareas,
    agregarTareas,
    eliminarTareas,
    cambiarEstadoTareas 
}