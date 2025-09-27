## 🚀 Instalación de dependencias de navegación

Para que la app tenga navegación entre pantallas (Citas, Pacientes, etc.) usamos **React Navigation**.  
Ejecuta estos comandos después de clonar el proyecto:

```bash
# 1. Instalar React Navigation
npm install @react-navigation/native

# 2. Instalar dependencias requeridas por React Navigation
npm install react-native-screens react-native-safe-area-context react-native-gesture-handler react-native-reanimated react-native-vector-icons react-native-get-random-values

# 3. Instalar las Tabs (navegación inferior)
npm install @react-navigation/bottom-tabs


📂 src/ → Carpeta principal donde vive todo el código de tu app.
  📂 api/ → Aquí centralizamos las funciones para llamar a tu backend (Axios, fetch, etc.).
    📄 api.js → Aquí van funciones como obtenerPacientes, crearPaciente, eliminarPaciente, etc.
  📂 components/ → Componentes reutilizables, por ejemplo, un CardPaciente, un FormularioCita, etc.
  📂 screens/ → Todas las pantallas de la app.
    📄 pacientesScreen.js → Pantalla donde listamos y gestionamos pacientes (CRUD).
    📄 citasScreen.js → Pantalla donde listamos y gestionamos citas (CRUD).
```
