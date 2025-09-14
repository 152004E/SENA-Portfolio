import { Assets } from "@react-navigation/elements";
import React, {
    useState, useEffect
} from "react";

import { StyleSheet, Text, View, TextInput, Button, FlatList } from "react-native";

export default function app() {
    const [tareas1, setTareas1] = useState([]);
    const [nuevaTarea, setNuevaTarea] = useState("");


    useEffect(() => {
        cargarTarea();
    }, []);


    const cargarTarea = async () => {
        try {
            const response = await fetch("http://10.194.133.148:8081/tareas1")
            const data = await response.json()
            setTareas1(data)
        } catch (error) {
            console.error("error", error)    
        }
    }

    const agregarTareas = async () => {
        if (!nuevaTarea.trim()) return;

        try {
            const response = await fetch("http://10.194.133.148:8081/tareas1", {
                method: "POST",
                headers: { "content-type": "application/json" },
                body: JSON.stringify({ titulo: nuevaTarea, estado: "pendiente" }),
            })
            const data = await response.json()
            setTareas1([...tareas1, data])
            setNuevaTarea("")

        } catch (error) {
            console.error("error", error)
        }
    }


    const eliminarTarea = async (id) => {
        try {
            await fetch(`http://192.168.1.7:3000/tareas1/${id}`, {
                method: "DELETE",

            })

            setTareas1(tareas1.filter((tarea) => tarea.id !== id))

        } catch (error) {
            console.error("error", error)
        }
    }

    const completarTarea = async (id, estado) => {
        try {

            const nuevoEstado = estado === "pendiente" ? "competada" : "pendiente";
            const response = await fetch(`http://10.1.172.248:8081/tareas1/${id}`, {
                method: "PUT",
                headers: { "content-type": "application/json" },
                body: JSON.stringify({ estado: nuevoEstado }),
            })
            const data = await response.json()
            setTareas1(tareas1.map((t) => (t.id === id ? data : t)))


        } catch (error) {
            console.error("error", error)
        }
    }


    return (
        <View style={Styles.container}>
            <text style={Styles.titulo}> Gestor de tareas</text>
            <TextInput style={Styles.titulo}
                placeholder="Escriba una nueva tarea "
                value={nuevaTarea}
                onChangeText={setNuevaTarea}
            />
            <button title="Agregar" onPrees={agregarTareas} />
            <FlatList
                data={tareas1}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                    <view>
                        <text style={item.estado === "completado" ? style.completada : style.pendiente}>
                            {item.estado}
                        </text>
                        <view style={style.botones}>
                            <button title={item.estado === "pendiente" ? "completar" : "revertir"}
                                onPrees={() => completarTarea(item.id, item.estado)}
                            />
                            <view>
                                <button title="Eliminar" color="red" onPrees={() => eliminarTarea(item.id)} />
                            </view>

                        </view>

                    </view>
                )}
            />
        </View>
    )
}


const Styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: "#fff",
    },
    titulo: {
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 20,
        textAlign: "center",
    },
    input: {
        borderWidth: 1,
        borderColor: "#ccc",
        padding: 10,
        marginBottom: 10,
        borderRadius: 5,
    },
    tareaContainer: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#f9f9f9",
        padding: 10,
        marginVertical: 5,
        borderRadius: 5,
    },
    Pendiente:{
        fontSize: 18,
        color: "black",
    },
    completada:{
        fontSize: 18,
        color: "green",
        textDecorationLine: "line-through",
    },
    botones:{
        flexDirection: "row",
        marginLeft: "auto",
    },
});



