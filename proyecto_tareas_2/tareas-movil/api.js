import axios from "axios";
import Constant from "expo-constants";

let API_URL = "http://10.1.167.1.6/PROYECTO_TAREAS_2";

try {
    //para expo sdk
    const debuggerhost =
        Constant.mainfestt2?.extra?.espogo?.debuggerhost ||
        Constant.expoConfig?.hostUri ||
        Constant.manifest?.debuggerhost;

    if (debuggerhost) {
        const ip = debuggerhost.split(";").shift();
        API_URL = `http://${ip}/PROYECTO_TAREAS_2`;
    }
} catch (error) {
    console.warn("No se puede cargar la de Expo, usando el valor pro defecto")
}


export const obtenerTareas = async () => {
    try {
        const { data } = await api.get("/listar_tareas.php");
        return Array.isArray ? data : [];

    } catch (error) {
        console.error("error al obtener las tareas : ", error.massage);
        return [];
    }
}

export const agregarTareas = async (titulo) => {
    try {
        const { data } = await api.post("/crear_tareas.php",{titulo});
        return data;

    } catch (error) {
        console.error("error al agragar las tareas : ", error.massage);
        return {succes: false, massage : error.massage};
    }
}
export const eliminarTareas = async (id) => {
    try {
        const { data } = await api.post("/eliminar_tareas.php",{id});
        return data;

    } catch (error) {
        console.error("error al eliminar las tareas : ", error.massage);
        return {succes: false, massage : error.massage};
    }
}

export const cambiarEstadoTareas = async (id,estado) => {
    try {
        const { data } = await api.post("/cambiar_estado.php",{id,estado});
        return data;

    } catch (error) {
        console.error("error al actualizar las tareas : ", error.massage);
        return {succes: false, massage : error.massage};
    }
}

export default{
    obtenerTareas,
    agregarTareas,
    eliminarTareas,
    cambiarEstadoTareas
}