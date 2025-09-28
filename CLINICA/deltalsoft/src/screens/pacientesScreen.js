// src/screens/PacientesScreen.js

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

// Importamos nuestros servicios
import {
  obtenerPacientes,
  eliminarPaciente,
  crearPaciente as crearPacienteService,
  actualizarPaciente as actualizarPacienteService,
} from "../api/pacientesServices";

export default function PacientesScreen() {
  // 1. Estados para manejar los datos
  const [pacientes, setPacientes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);

  // 2. Estados para el formulario
  const [modalVisible, setModalVisible] = useState(false);
  const [pacienteEditando, setPacienteEditando] = useState(null);
  const [formData, setFormData] = useState({
    nombre: "",
    documento: "",
    telefono: "",
    correo: "",
  });

  // 3. Función para cargar pacientes desde tu PHP
  const cargarPacientes = async () => {
    try {
      console.log("🔄 Cargando pacientes...");
      const datos = await obtenerPacientes();
      console.log("✅ Pacientes cargados:", datos);
      setPacientes(datos);
    } catch (error) {
      console.error("❌ Error:", error);
      Alert.alert("Error", "No se pudieron cargar los pacientes");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    cargarPacientes();
  }, []);

  // 4. Función para eliminar paciente
  const confirmarEliminar = (id, nombre) => {
    console.log("🔵 Botón eliminar presionado - ID:", id, "Nombre:", nombre);

    Alert.alert(
      "Confirmar eliminación",
      `¿Estás seguro de eliminar a ${nombre}?`,
      [
        {
          text: "Cancelar",
          style: "cancel",
          onPress: () => console.log("🟠 Usuario canceló eliminación"),
        },
        {
          text: "Eliminar",
          style: "destructive",
          onPress: () => {
            console.log(
              "🟡 Usuario confirmó eliminación - ejecutando eliminar()"
            );
            eliminar(id);
          },
        },
      ]
    );
  };

  const eliminar = async (id) => {
    console.log("🟢 Función eliminar ejecutada con ID:", id);

    try {
      console.log("🔄 Eliminando paciente ID:", id);
      const response = await eliminarPaciente(id);
      console.log("✅ Respuesta del servicio:", response);

      if (response.success) {
        console.log("✅ Paciente eliminado exitosamente");
        Alert.alert(
          "Éxito",
          response.message || "Paciente eliminado correctamente"
        );
        cargarPacientes();
      } else {
        console.log("❌ No se pudo eliminar:", response.error);
        Alert.alert(
          "Error",
          response.error || "No se pudo eliminar el paciente"
        );
      }
    } catch (error) {
      console.error("❌ Error al eliminar:", error);
      Alert.alert("Error", "No se pudo eliminar el paciente");
    }
  };

  // 5. Funciones para crear/editar paciente
  const abrirModalCrear = () => {
    console.log("🟦 Abriendo modal para CREAR paciente");
    setPacienteEditando(null);
    setFormData({ nombre: "", documento: "", telefono: "", correo: "" });
    setModalVisible(true);
  };

  const abrirModalEditar = (paciente) => {
    console.log("🟨 Abriendo modal para EDITAR paciente:", paciente.id);
    setPacienteEditando(paciente);
    setFormData({
      nombre: paciente.nombre,
      documento: paciente.documento,
      telefono: paciente.telefono,
      correo: paciente.correo,
    });
    setModalVisible(true);
  };

  const cerrarModal = () => {
    console.log("🔴 Cerrando modal");
    setModalVisible(false);
    setPacienteEditando(null);
    setFormData({ nombre: "", documento: "", telefono: "", correo: "" });
  };

  const crearPaciente = async () => {
    try {
      console.log("🔄 Creando paciente:", formData);
      const response = await crearPacienteService(formData);
      console.log("✅ Respuesta crear:", response);

      if (response.success) {
        Alert.alert("Éxito", response.message);
        cerrarModal();
        cargarPacientes();
      } else {
        Alert.alert("Error", response.error);
      }
    } catch (error) {
      console.error("❌ Error al crear:", error);
      Alert.alert("Error", "No se pudo crear el paciente");
    }
  };

  const actualizarPaciente = async () => {
    try {
      console.log("🔄 Actualizando paciente ID:", pacienteEditando.id);
      const response = await actualizarPacienteService(
        pacienteEditando.id,
        formData
      );
      console.log("✅ Respuesta actualizar:", response);

      if (response.success) {
        Alert.alert("Éxito", response.message);
        cerrarModal();
        cargarPacientes();
      } else {
        Alert.alert("Error", response.error);
      }
    } catch (error) {
      console.error("❌ Error al actualizar:", error);
      Alert.alert("Error", "No se pudo actualizar el paciente");
    }
  };

  const guardarPaciente = () => {
    // Validar campos obligatorios
    if (!formData.nombre.trim() || !formData.documento.trim()) {
      Alert.alert("Error", "Nombre y documento son obligatorios");
      return;
    }

    if (pacienteEditando) {
      actualizarPaciente(); // Es edición
    } else {
      crearPaciente(); // Es creación
    }
  };

  // 6. Función para el pull-to-refresh
  const onRefresh = async () => {
    setRefreshing(true);
    await cargarPacientes();
    setRefreshing(false);
  };

  // 7. Renderizar cada paciente en la lista
  const renderPaciente = ({ item }) => (
    <View style={styles.pacienteCard}>
      <View style={styles.pacienteInfo}>
        <Text style={styles.nombre}>{item.nombre}</Text>
        <Text style={styles.documento}>Doc: {item.documento}</Text>
        <Text style={styles.contacto}>{item.telefono}</Text>
        <Text style={styles.contacto}>{item.correo}</Text>
      </View>

      <View style={styles.acciones}>
        <TouchableOpacity
          style={styles.btnEditar}
          onPress={() => abrirModalEditar(item)}
        >
          <Ionicons name="pencil-outline" size={20} color="white" />
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.btnEliminar}
          onPress={() => confirmarEliminar(item.id, item.nombre)}
        >
          <Ionicons name="trash-outline" size={20} color="white" />
        </TouchableOpacity>
      </View>
    </View>
  );

  // 8. Pantalla de carga
  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#007AFF" />
        <Text style={styles.loadingText}>Cargando pacientes...</Text>
      </View>
    );
  }

  // 9. Renderizar la pantalla principal
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <View>
          <Text style={styles.title}>Pacientes</Text>
          <Text style={styles.count}>{pacientes.length} pacientes</Text>
        </View>

        <TouchableOpacity style={styles.btnAgregar} onPress={abrirModalCrear}>
          <Ionicons name="add" size={24} color="white" />
        </TouchableOpacity>
      </View>

      {/* Lista */}
      <FlatList
        data={pacientes}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderPaciente}
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
            colors={["#007AFF"]}
          />
        }
        ListEmptyComponent={
          <View style={styles.emptyContainer}>
            <Text style={styles.emptyText}>No hay pacientes registrados</Text>
          </View>
        }
      />

      {/* Modal Formulario */}
      <Modal visible={modalVisible} animationType="slide" transparent={true}>
        <View style={styles.modalOverlay}>
          <View style={styles.modalContainer}>
            <ScrollView style={styles.modalContent}>
              {/* Header del modal */}
              <View style={styles.modalHeader}>
                <Text style={styles.modalTitle}>
                  {pacienteEditando ? "Editar Paciente" : "Nuevo Paciente"}
                </Text>
                <TouchableOpacity onPress={cerrarModal}>
                  <Ionicons name="close" size={24} color="#666" />
                </TouchableOpacity>
              </View>

              {/* Campos del formulario */}
              <View style={styles.formGroup}>
                <Text style={styles.label}>Nombre *</Text>
                <TextInput
                  style={styles.input}
                  value={formData.nombre}
                  onChangeText={(text) =>
                    setFormData({ ...formData, nombre: text })
                  }
                  placeholder="Ingresa el nombre completo"
                />
              </View>

              <View style={styles.formGroup}>
                <Text style={styles.label}>Documento *</Text>
                <TextInput
                  style={styles.input}
                  value={formData.documento}
                  onChangeText={(text) =>
                    setFormData({ ...formData, documento: text })
                  }
                  placeholder="Número de documento"
                  keyboardType="numeric"
                />
              </View>

              <View style={styles.formGroup}>
                <Text style={styles.label}>Teléfono</Text>
                <TextInput
                  style={styles.input}
                  value={formData.telefono}
                  onChangeText={(text) =>
                    setFormData({ ...formData, telefono: text })
                  }
                  placeholder="Número de teléfono"
                  keyboardType="phone-pad"
                />
              </View>

              <View style={styles.formGroup}>
                <Text style={styles.label}>Correo</Text>
                <TextInput
                  style={styles.input}
                  value={formData.correo}
                  onChangeText={(text) =>
                    setFormData({ ...formData, correo: text })
                  }
                  placeholder="correo@ejemplo.com"
                  keyboardType="email-address"
                />
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
                  onPress={guardarPaciente}
                >
                  <Text style={styles.btnGuardarText}>
                    {pacienteEditando ? "Actualizar" : "Crear"}
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

// 10. Estilos completos
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
  pacienteCard: {
    backgroundColor: "white",
    margin: 10,
    padding: 15,
    borderRadius: 8,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  pacienteInfo: {
    flex: 1,
  },
  nombre: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 5,
  },
  documento: {
    fontSize: 14,
    color: "#666",
    marginBottom: 2,
  },
  contacto: {
    fontSize: 12,
    color: "#888",
  },
  acciones: {
    flexDirection: "row",
  },
  btnEditar: {
    backgroundColor: "#28a745",
    padding: 10,
    borderRadius: 5,
    marginRight: 5,
  },
  btnEliminar: {
    backgroundColor: "#ff4444",
    padding: 10,
    borderRadius: 5,
  },
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

  // Estilos del Modal
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
