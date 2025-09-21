import { useState, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  FlatList,
  Alert,
  Platform,
} from "react-native"; // ➡ agrega Platform

import {
  obtenerTareas,
  agregarTareas as apiAgregarTarea,
  eliminarTareas as apiEliminarTarea,
  cambiarEstadoTareas as apiCambiarEstado,
} from "../../api";
import { red } from "react-native-reanimated/lib/typescript/Colors";

export default function HomeScreen() {
  const [tareas1, setTareas] = useState<
    { id: number; titulo: string; estado: string }[]
  >([]);
  const [nuevaTarea, setNuevaTarea] = useState("");

  // 🛠 Cargar tareas al iniciar
  useEffect(() => {
    cargarTareas();
  }, []);

  const cargarTareas = async () => {
    try {
      const data = await obtenerTareas();
      setTareas(data);
    } catch (error) {
      console.error("Error al cargar tareas:", error);
      Alert.alert("Error", "No se pudieron cargar las tareas");
    }
  };

  const agregarTarea = async () => {
    if (!nuevaTarea.trim()) {
      Alert.alert("Aviso", "La tarea no puede estar vacia.");
      return;
    }

    try {
      await apiAgregarTarea(nuevaTarea);
      setNuevaTarea("");
      cargarTareas();
    } catch (error) {
      console.error("Error al agregar tarea: ", error);
      Alert.alert("Error", "No se pudo agregar la tarea.");
    }
  };

  const cambiarEstado = async (id: number, estadoActual: string) => {
    try {
      await apiCambiarEstado(id, estadoActual);
      cargarTareas();
    } catch (error) {
      console.error("Error al cambiar estado: ", error);
      Alert.alert("Error", "No se pudo cambiar el estado de la tarea.");
    }
  };

  const eliminarTarea = async (id: number) => {
    const ejecutar = async () => {
      try {
        await apiEliminarTarea(id);
        cargarTareas();
      } catch (error) {
        console.error("Error al eliminar tarea: ", error);
        Alert.alert("Error", "No se pudo eliminar la tarea.");
      }
    };
    if (Platform.OS === "web") {
      if (confirm("¿Seguro que desea eliminar la tarea?")) {
        ejecutar();
      }
    } else {
      Alert.alert("Confirmación", "¿Seguro que desea eliminar la tarea?", [
        { text: "Cancelar", style: "cancel" },
        { text: "Eliminar", style: "destructive", onPress: ejecutar },
      ]);
    }
  };

  return (
    <View style={{ flex: 1, padding: 20 ,backgroundColor : "white"}}>
      <Text style={{ fontSize: 20, marginBottom: 10 }}>
        📋 Mi Gestor de Tareas
      </Text>

      <TextInput
        placeholder="Escribe una tarea..."
        value={nuevaTarea}
        onChangeText={setNuevaTarea}
        style={{
          borderWidth: 1,
          borderColor: "#ccc",
          padding: 10,
          marginBottom: 10,
          borderRadius: 5,
        }}
      />

      <Button title="Agregar Tarea" onPress={agregarTarea} />

      {tareas1.length === 0 ? (
        <Text
          style={{
            marginTop: 20,
            fontSize: 16,
            textAlign: "center",
            color: "gray",
          }}
        >
          No tienes tareas aún. ¡Agrega una nueva! ✍️
        </Text>
      ) : (
        <FlatList
          data={tareas1}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginTop: 10,
              }}
            >
              <Text style={{ fontSize: 16, flex: 1 }}>
                {item.titulo} ({item.estado})
              </Text>

              <Button
                title={item.estado === "pendiente" ? "Completar" : "Reabrir"}
                onPress={() => cambiarEstado(item.id, item.estado)}
              />

              <View style={{ marginLeft: 10 }}>
                <Button
                  title="Eliminar"
                  color="red"
                  onPress={() => eliminarTarea(item.id)}
                />
              </View>
            </View>
          )}
        />
      )}
    </View>
  );
}
