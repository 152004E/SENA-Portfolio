import { useState, useEffect } from "react";
import { View, Text, TextInput, Button, FlatList, Alert, Platform } from "react-native"; // ➡ agrega Platform

import {
  obtenerTareas,
  agregarTareas as apiAgregarTarea,
  eliminarTareas as apiEliminarTarea,
  cambiarEstadoTareas as apiCambiarEstado
} from "../../api";

export default function HomeScreen() {
  const [tareas, setTareas] = useState<{ id: number; titulo: string; estado: string }[]>([]);
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

  const agregarTarea=async()=>{
    if(!nuevaTarea.trim()){
      Alert.alert("Aviso","La tarea no puede estar vacia.");
      return;
    }

    try{
      await apiAgregarTarea(nuevaTarea);
      setNuevaTarea("");
      cargarTareas();
    }catch(error){
      console.error("Error al agregar tarea: ", error);
      Alert.alert("Error","No se pudo agregar la tarea.");
    }
  };

  const cambiarEstado=async(id:number,estadoActual:string)=>{
    try{
      await apiCambiarEstado(id,estadoActual);
      cargarTareas();
    }catch(error){
      console.error("Error al cambiar estado: ", error);
      Alert.alert("Error","No se pudo cambiar el estado de la tarea.");
    }
  };

  const eliminarTarea= async (id:number)=>{
    const ejecutar=async()=>{
      try{
        await apiEliminarTarea(id);
        cargarTareas();
      }catch(error){
        console.error("Error al eliminar tarea: ", error);
        Alert.alert("Error","No se pudo eliminar la tarea.");
      }
    };
    if(Platform.OS==="web"){
      if(confirm("¿Seguro que desea eliminar la tarea?")){
        ejecutar();
      }
    }else{
      Alert.alert(
        "Confirmación",
        "¿Seguro que desea eliminar la tarea?",
        [
          {text:"Cancelar",style:"cancel"},
          {text:"Eliminar",style:"destructive",onPress:ejecutar},
        ]
      );
    }
  };



  return (
    <View style={{ flex: 1, padding: 20 }}>
      <Text style={{ fontSize: 20, marginBottom: 10 }}>📋 Mi Gestor de Tareas</Text>

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

      {tareas.length === 0 ? (
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
          data={tareas}
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

// import { Platform, StyleSheet } from 'react-native';

// import { HelloWave } from '@/components/HelloWave';
// import ParallaxScrollView from '@/components/ParallaxScrollView';
// import { ThemedText } from '@/components/ThemedText';
// import { ThemedView } from '@/components/ThemedView';

// export default function HomeScreen() {
//   return (
//     <ParallaxScrollView
//       headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
//       headerImage={
//         <Image
//           source={require('@/assets/images/partial-react-logo.png')}
//           style={styles.reactLogo}
//         />
//       }>
//       <ThemedView style={styles.titleContainer}>
//         <ThemedText type="title">Welcome!</ThemedText>
//         <HelloWave />
//       </ThemedView>
//       <ThemedView style={styles.stepContainer}>
//         <ThemedText type="subtitle">Step 1: Try it</ThemedText>
//         <ThemedText>
//           Edit <ThemedText type="defaultSemiBold">app/(tabs)/index.tsx</ThemedText> to see changes.
//           Press{' '}
//           <ThemedText type="defaultSemiBold">
//             {Platform.select({
//               ios: 'cmd + d',
//               android: 'cmd + m',
//               web: 'F12',
//             })}
//           </ThemedText>{' '}
//           to open developer tools.
//         </ThemedText>
//       </ThemedView>
//       <ThemedView style={styles.stepContainer}>
//         <ThemedText type="subtitle">Step 2: Explore</ThemedText>
//         <ThemedText>
//           {`Tap the Explore tab to learn more about what's included in this starter app.`}
//         </ThemedText>
//       </ThemedView>
//       <ThemedView style={styles.stepContainer}>
//         <ThemedText type="subtitle">Step 3: Get a fresh start</ThemedText>
//         <ThemedText>
//           {`When you're ready, run `}
//           <ThemedText type="defaultSemiBold">npm run reset-project</ThemedText> to get a fresh{' '}
//           <ThemedText type="defaultSemiBold">app</ThemedText> directory. This will move the current{' '}
//           <ThemedText type="defaultSemiBold">app</ThemedText> to{' '}
//           <ThemedText type="defaultSemiBold">app-example</ThemedText>.
//         </ThemedText>
//       </ThemedView>
//     </ParallaxScrollView>
//   );
// }

// const styles = StyleSheet.create({
//   titleContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     gap: 8,
//   },
//   stepContainer: {
//     gap: 8,
//     marginBottom: 8,
//   },
//   reactLogo: {
//     height: 178,
//     width: 290,
//     bottom: 0,
//     left: 0,
//     position: 'absolute',
//   },
// });
