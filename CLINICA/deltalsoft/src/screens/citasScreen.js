// src/screens/CitasScreen.js

import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Alert,
  ActivityIndicator,
  RefreshControl,
  Modal,
  TextInput,
  ScrollView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Picker } from "@react-native-picker/picker";

// Importamos servicios
import {
  obtenerCitas,
  eliminarCita,
  crearCita as crearCitaService,
  actualizarCita as actualizarCitaService,
} from "../api/citasServices";
import { obtenerPacientes } from "../api/pacientesServices";

export default function CitasScreen() {
  // Estados principales
  const [citas, setCitas] = useState([]);
  const [pacientes, setPacientes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);

  // Estados para filtros
  const [filtroEstado, setFiltroEstado] = useState("todos");
  const [citasFiltradas, setCitasFiltradas] = useState([]);

  // Estados para formulario
  const [modalVisible, setModalVisible] = useState(false);
  const [citaEditando, setCitaEditando] = useState(null);
  const [formData, setFormData] = useState({
    paciente_id: "",
    fecha: "",
    hora: "",
    odontologo: "",
    estado: "pendiente",
  });

  // Cargar datos iniciales
  const cargarDatos = async () => {
    try {
      console.log("🔄 Cargando citas y pacientes...");

      const [citasData, pacientesData] = await Promise.all([
        obtenerCitas(),
        obtenerPacientes(),
      ]);

      console.log("✅ Citas cargadas:", citasData.length);
      console.log("✅ Pacientes cargados:", pacientesData.length);

      setCitas(citasData);
      setPacientes(pacientesData);
      setCitasFiltradas(citasData);
    } catch (error) {
      console.error("❌ Error cargando datos:", error);
      Alert.alert("Error", "No se pudieron cargar los datos");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    cargarDatos();
  }, []);

  // Aplicar filtros
  useEffect(() => {
    if (filtroEstado === "todos") {
      setCitasFiltradas(citas);
    } else {
      const filtradas = citas.filter(
        (cita) => cita.estado.toLowerCase() === filtroEstado.toLowerCase()
      );
      setCitasFiltradas(filtradas);
    }
  }, [citas, filtroEstado]);

  // Funciones CRUD
  const confirmarEliminar = (id, paciente) => {
    console.log("🔵 Confirmar eliminar cita ID:", id);

    const confirmado = confirm(`¿Eliminar la cita de ${paciente}?`);
    if (confirmado) {
      eliminar(id);
    }
  };

  const eliminar = async (id) => {
    try {
      console.log("🔄 Eliminando cita ID:", id);
      const response = await eliminarCita(id);

      if (response.success) {
        Alert.alert("Éxito", response.message);
        cargarDatos();
      } else {
        Alert.alert("Error", response.error);
      }
    } catch (error) {
      console.error("❌ Error eliminando cita:", error);
      Alert.alert("Error", "No se pudo eliminar la cita");
    }
  };

  // Funciones del modal
  const abrirModalCrear = () => {
    console.log("🟦 Crear nueva cita");
    setCitaEditando(null);
    setFormData({
      paciente_id: "",
      fecha: "",
      hora: "",
      odontologo: "",
      estado: "pendiente",
    });
    setModalVisible(true);
  };

  const abrirModalEditar = (cita) => {
    console.log("🟨 Editar cita:", cita.id);
    setCitaEditando(cita);
    setFormData({
      paciente_id: cita.paciente_id || "",
      fecha: cita.fecha,
      hora: cita.hora,
      odontologo: cita.odontologo,
      estado: cita.estado,
    });
    setModalVisible(true);
  };

  const cerrarModal = () => {
    setModalVisible(false);
    setCitaEditando(null);
    setFormData({
      paciente_id: "",
      fecha: "",
      hora: "",
      odontologo: "",
      estado: "pendiente",
    });
  };

  const crearCita = async () => {
    try {
      console.log("🔄 Creando cita:", formData);
      const response = await crearCitaService(formData);

      if (response.success) {
        Alert.alert("Éxito", response.message);
        cerrarModal();
        cargarDatos();
      } else {
        Alert.alert("Error", response.error);
      }
    } catch (error) {
      console.error("❌ Error creando cita:", error);
      Alert.alert("Error", "No se pudo crear la cita");
    }
  };

  const actualizarCita = async () => {
    try {
      console.log("🔄 Actualizando cita ID:", citaEditando.id);
      const response = await actualizarCitaService(citaEditando.id, formData);

      if (response.success) {
        Alert.alert("Éxito", response.message);
        cerrarModal();
        cargarDatos();
      } else {
        Alert.alert("Error", response.error);
      }
    } catch (error) {
      console.error("❌ Error actualizando cita:", error);
      Alert.alert("Error", "No se pudo actualizar la cita");
    }
  };

  const guardarCita = () => {
    // Validación
    if (
      !formData.paciente_id ||
      !formData.fecha ||
      !formData.hora ||
      !formData.odontologo
    ) {
      Alert.alert("Error", "Todos los campos son obligatorios");
      return;
    }

    if (citaEditando) {
      actualizarCita();
    } else {
      crearCita();
    }
  };

  // Función para obtener color según estado
  const getColorEstado = (estado) => {
    switch (estado.toLowerCase()) {
      case "pendiente":
        return "#ffc107";
      case "confirmada":
        return "#28a745";
      case "completada":
        return "#007bff";
      case "cancelada":
        return "#dc3545";
      default:
        return "#6c757d";
    }
  };

  // Pull to refresh
  const onRefresh = async () => {
    setRefreshing(true);
    await cargarDatos();
    setRefreshing(false);
  };

  // Renderizar cada cita
  const renderCita = ({ item }) => (
    <View style={styles.citaCard}>
      <View style={styles.citaHeader}>
        <View>
          <Text style={styles.paciente}>{item.paciente}</Text>
          <Text style={styles.odontologo}>Dr. {item.odontologo}</Text>
        </View>
        <View
          style={[
            styles.estadoBadge,
            { backgroundColor: getColorEstado(item.estado) },
          ]}
        >
          <Text style={styles.estadoText}>{item.estado}</Text>
        </View>
      </View>

      <View style={styles.citaInfo}>
        <View style={styles.infoItem}>
          <Ionicons name="calendar-outline" size={16} color="#666" />
          <Text style={styles.infoText}>{item.fecha}</Text>
        </View>
        <View style={styles.infoItem}>
          <Ionicons name="time-outline" size={16} color="#666" />
          <Text style={styles.infoText}>{item.hora}</Text>
        </View>
      </View>

      <View style={styles.citaAcciones}>
        <TouchableOpacity
          style={styles.btnEditar}
          onPress={() => abrirModalEditar(item)}
        >
          <Ionicons name="pencil-outline" size={16} color="white" />
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.btnEliminar}
          onPress={() => confirmarEliminar(item.id, item.paciente)}
        >
          <Ionicons name="trash-outline" size={16} color="white" />
        </TouchableOpacity>
      </View>
    </View>
  );

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#007AFF" />
        <Text style={styles.loadingText}>Cargando citas...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <View>
          <Text style={styles.title}>Citas</Text>
          <Text style={styles.count}>{citasFiltradas.length} citas</Text>
        </View>

        <TouchableOpacity style={styles.btnAgregar} onPress={abrirModalCrear}>
          <Ionicons name="add" size={24} color="white" />
        </TouchableOpacity>
      </View>

      {/* Filtros */}
      {/* 
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.filtros}
      >
        {["todos", "pendiente", "confirmada", "completada", "cancelada"].map(
          (estado) => (
            <TouchableOpacity
              key={estado}
              style={[
                styles.filtroBtn,
                filtroEstado === estado && styles.filtroActivo,
              ]}
              onPress={() => setFiltroEstado(estado)}
            >
              <Text
                style={[
                  styles.filtroText,
                  filtroEstado === estado && styles.filtroActivoText,
                ]}
              >
                {estado === "todos"
                  ? "Todas"
                  : estado.charAt(0).toUpperCase() + estado.slice(1)}
              </Text>
            </TouchableOpacity>
          )
        )}
      </ScrollView>*/}

      {/* Lista */}
      <FlatList
        data={citasFiltradas}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderCita}
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
            colors={["#007AFF"]}
          />
        }
        ListEmptyComponent={
          <View style={styles.emptyContainer}>
            <Text style={styles.emptyText}>No hay citas registradas</Text>
          </View>
        }
      />

      {/* Modal Formulario */}
      <Modal visible={modalVisible} animationType="slide" transparent={true}>
        <View style={styles.modalOverlay}>
          <View style={styles.modalContainer}>
            <ScrollView style={styles.modalContent}>
              {/* Header */}
              <View style={styles.modalHeader}>
                <Text style={styles.modalTitle}>
                  {citaEditando ? "Editar Cita" : "Nueva Cita"}
                </Text>
                <TouchableOpacity onPress={cerrarModal}>
                  <Ionicons name="close" size={24} color="#666" />
                </TouchableOpacity>
              </View>

              {/* Formulario */}
              <View style={styles.formGroup}>
                <Text style={styles.label}>Paciente *</Text>
                <View style={styles.pickerContainer}>
                  <Picker
                    selectedValue={formData.paciente_id}
                    onValueChange={(value) =>
                      setFormData({ ...formData, paciente_id: value })
                    }
                    style={styles.picker}
                  >
                    <Picker.Item label="Selecciona un paciente" value="" />
                    {pacientes.map((paciente) => (
                      <Picker.Item
                        key={paciente.id}
                        label={paciente.nombre}
                        value={paciente.id}
                      />
                    ))}
                  </Picker>
                </View>
              </View>

              <View style={styles.formGroup}>
                <Text style={styles.label}>Fecha *</Text>
                <TextInput
                  style={styles.input}
                  value={formData.fecha}
                  onChangeText={(text) =>
                    setFormData({ ...formData, fecha: text })
                  }
                  placeholder="YYYY-MM-DD (ej: 2024-01-15)"
                />
              </View>

              <View style={styles.formGroup}>
                <Text style={styles.label}>Hora *</Text>
                <TextInput
                  style={styles.input}
                  value={formData.hora}
                  onChangeText={(text) =>
                    setFormData({ ...formData, hora: text })
                  }
                  placeholder="HH:MM (ej: 14:30)"
                />
              </View>

              <View style={styles.formGroup}>
                <Text style={styles.label}>Odontólogo *</Text>
                <TextInput
                  style={styles.input}
                  value={formData.odontologo}
                  onChangeText={(text) =>
                    setFormData({ ...formData, odontologo: text })
                  }
                  placeholder="Nombre del odontólogo"
                />
              </View>

              <View style={styles.formGroup}>
                <Text style={styles.label}>Estado</Text>
                <View style={styles.pickerContainer}>
                  <Picker
                    selectedValue={formData.estado}
                    onValueChange={(value) =>
                      setFormData({ ...formData, estado: value })
                    }
                    style={styles.picker}
                  >
                    <Picker.Item label="Pendiente" value="pendiente" />
                    <Picker.Item label="Confirmada" value="confirmada" />
                    <Picker.Item label="Completada" value="completada" />
                    <Picker.Item label="Cancelada" value="cancelada" />
                  </Picker>
                </View>
              </View>

              {/* Botones */}
              <View style={styles.buttonContainer}>
                <TouchableOpacity
                  style={styles.btnCancelar}
                  onPress={cerrarModal}
                >
                  <Text style={styles.btnCancelarText}>Cancelar</Text>
                </TouchableOpacity>

                <TouchableOpacity
                  style={styles.btnGuardar}
                  onPress={guardarCita}
                >
                  <Text style={styles.btnGuardarText}>
                    {citaEditando ? "Actualizar" : "Crear"}
                  </Text>
                </TouchableOpacity>
              </View>
            </ScrollView>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  loadingText: {
    marginTop: 10,
    fontSize: 16,
    color: "#666",
  },
  header: {
    backgroundColor: "white",
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333",
  },
  count: {
    fontSize: 14,
    color: "#666",
    marginTop: 5,
  },
  btnAgregar: {
    backgroundColor: "#007AFF",
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
  },

  // Filtros
  filtros: {
    backgroundColor: "white",
    paddingVertical: 30,
    paddingHorizontal: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
  },
  filtroBtn: {
    paddingHorizontal: 20,
    paddingVertical: 20,
    marginHorizontal: 4,
    borderRadius: 15,
    backgroundColor: "#f0f0f0",
    minWidth: 60,
    alignItems: "center",
    justifyContent: "center", // ← Centra el contenido verticalmente
  },
  filtroActivo: {
    backgroundColor: "#007AFF",
    height: 40, // ← Altura fija para el filtro activo
     paddingVertical: 20,// ← Quitar el padding vertical para usar solo height
  },
  filtroText: {
    fontSize: 13,
    color: "#666",
    fontWeight: "500",
  },
  filtroActivoText: {
    color: "white",
    fontWeight: "600",
  },

  // Tarjeta de cita
  citaCard: {
    backgroundColor: "white",
    margin: 10,
    padding: 15,
    borderRadius: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  citaHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    marginBottom: 10,
  },
  paciente: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 2,
  },
  odontologo: {
    fontSize: 14,
    color: "#666",
  },
  estadoBadge: {
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 12,
  },
  estadoText: {
    color: "white",
    fontSize: 12,
    fontWeight: "bold",
    textTransform: "capitalize",
  },
  citaInfo: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 15,
  },
  infoItem: {
    flexDirection: "row",
    alignItems: "center",
  },
  infoText: {
    marginLeft: 5,
    fontSize: 14,
    color: "#666",
  },
  citaAcciones: {
    flexDirection: "row",
    justifyContent: "flex-end",
  },
  btnEditar: {
    backgroundColor: "#28a745",
    padding: 8,
    borderRadius: 5,
    marginRight: 10,
  },
  btnEliminar: {
    backgroundColor: "#dc3545",
    padding: 8,
    borderRadius: 5,
  },

  // Lista vacía
  emptyContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 50,
  },
  emptyText: {
    fontSize: 16,
    color: "#999",
  },

  // Modal
  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    justifyContent: "center",
    alignItems: "center",
  },
  modalContainer: {
    backgroundColor: "white",
    borderRadius: 10,
    width: "90%",
    maxHeight: "80%",
  },
  modalContent: {
    padding: 20,
  },
  modalHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#333",
  },
  formGroup: {
    marginBottom: 15,
  },
  label: {
    fontSize: 16,
    fontWeight: "500",
    color: "#333",
    marginBottom: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 5,
    padding: 12,
    fontSize: 16,
    backgroundColor: "#f9f9f9",
  },
  pickerContainer: {
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 5,
    backgroundColor: "#f9f9f9",
  },
  picker: {
    height: 50,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
  },
  btnCancelar: {
    flex: 1,
    padding: 15,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#ddd",
    alignItems: "center",
    marginRight: 10,
  },
  btnCancelarText: {
    fontSize: 16,
    color: "#666",
  },
  btnGuardar: {
    flex: 1,
    padding: 15,
    borderRadius: 5,
    backgroundColor: "#007AFF",
    alignItems: "center",
    marginLeft: 10,
  },
  btnGuardarText: {
    fontSize: 16,
    color: "white",
    fontWeight: "bold",
  },
});
