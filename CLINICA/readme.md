# 🦷 DentalSoft - Aplicación Móvil de Gestión Clínica

Aplicación móvil desarrollada con **React Native** y **Expo** para gestionar pacientes y citas de una clínica odontológica. Conecta con un backend PHP/MySQL existente.

## 📋 Tabla de Contenidos

- [Características](#-características)
- [Requisitos](#-requisitos)
- [Instalación](#-instalación)
- [Configuración](#-configuración)
- [Estructura del Proyecto](#-estructura-del-proyecto)
- [Uso](#-uso)
- [API Backend](#-api-backend)
- [Troubleshooting](#-troubleshooting)

## ✨ Características

### Gestión de Pacientes
- ✅ Listar todos los pacientes
- ✅ Crear nuevos pacientes
- ✅ Editar información de pacientes
- ✅ Eliminar pacientes (con validación de citas asociadas)
- ✅ Búsqueda en tiempo real

### Gestión de Citas
- ✅ Listar todas las citas con diseño de tarjetas
- ✅ Crear nuevas citas
- ✅ Editar citas existentes
- ✅ Eliminar citas
- ✅ Filtros por estado (Pendiente, Confirmada, Completada, Cancelada)
- ✅ Selección de pacientes desde dropdown
- ✅ Badges de colores según el estado

### Características Generales
- Pull-to-refresh en todas las listas
- Validación de formularios
- Manejo de errores
- Confirmaciones antes de eliminar
- Responsive design

## 🛠 Requisitos

### Software necesario:
- **Node.js** (v14 o superior)
- **npm** o **yarn**
- **Expo CLI** (`npm install -g expo-cli`)
- **XAMPP** (Apache + MySQL) corriendo en tu computadora
- **Expo Go** app en tu teléfono (opcional, para testing móvil)

### Backend:
- Base de datos MySQL con las tablas `pacientes` y `citas`
- Archivos PHP (`pacientes.php`, `citas.php`, `conexion.php`) funcionando en XAMPP

## 📦 Instalación

### 1. Clonar el repositorio
```bash
git clone <tu-https://github.com/152004E/SENA-Portfolio.git>
cd deltalsoft
```

### 2. Instalar dependencias base
```bash
npm install
```

### 3. Instalar dependencias de navegación
```bash
# React Navigation core
npm install @react-navigation/native

# Dependencias requeridas
npm install react-native-screens react-native-safe-area-context react-native-gesture-handler react-native-reanimated react-native-vector-icons react-native-get-random-values

# Navegación por tabs
npm install @react-navigation/bottom-tabs

# Picker para selects
npm install @react-native-picker/picker
```

### 4. Instalar Axios (para peticiones HTTP)
```bash
npm install axios
```

## ⚙️ Configuración

### 1. Configurar la URL de tu API

Edita el archivo `src/api/config.js`:

```javascript
// Para usar en navegador web (localhost)
const API_BASE_URL = 'http://localhost/SENA-Portfolio/CLINICA/clinicaPhp';

// Para usar en teléfono (reemplaza con TU IP)
// const API_BASE_URL = 'http://192.168.X.X/SENA-Portfolio/CLINICA/clinicaPhp';

export const API_ENDPOINTS = {
  pacientes: `${API_BASE_URL}/pacientes.php`,
  citas: `${API_BASE_URL}/citas.php`
};
```

### 2. Encontrar tu IP local (para usar en teléfono)

**Windows:**
```bash
ipconfig
```
Busca "Adaptador de LAN inalámbrica Wi-Fi" → "Dirección IPv4"

**Mac/Linux:**
```bash
ifconfig | grep "inet "
```

### 3. Verificar que XAMPP esté corriendo

- Abre XAMPP Control Panel
- Apache debe estar en verde (puerto 80)
- MySQL debe estar en verde (puerto 3306)

### 4. Probar la conexión

Abre en tu navegador (o en el navegador del teléfono):
```
http://TU_IP/SENA-Portfolio/CLINICA/clinicaPhp/pacientes.php
```

Debes ver un JSON con tus pacientes.

## 📂 Estructura del Proyecto

```
deltalsoft/
├── src/
│   ├── api/
│   │   ├── config.js              # Configuración de URLs del backend
│   │   ├── pacientesService.js    # Funciones CRUD de pacientes
│   │   └── citasService.js        # Funciones CRUD de citas
│   ├── components/
│   │   └── FormularioPaciente.js  # Modal para crear/editar pacientes
│   └── screens/
│       ├── pacientesScreen.js     # Pantalla de gestión de pacientes
│       └── citasScreen.js         # Pantalla de gestión de citas
├── App.js                         # Navegación principal (Tabs)
├── index.js                       # Punto de entrada
├── package.json                   # Dependencias del proyecto
└── app.json                       # Configuración de Expo
```

### Descripción de archivos clave:

**`src/api/config.js`**
- Centraliza las URLs del backend
- Fácil de cambiar entre localhost y red local

**`src/api/pacientesService.js`**
- `obtenerPacientes()` - GET: Lista todos los pacientes
- `crearPaciente(datos)` - POST: Crea un nuevo paciente
- `actualizarPaciente(id, datos)` - PUT: Actualiza un paciente
- `eliminarPaciente(id)` - DELETE: Elimina un paciente

**`src/api/citasService.js`**
- `obtenerCitas()` - GET: Lista todas las citas con nombres de pacientes
- `crearCita(datos)` - POST: Crea una nueva cita
- `actualizarCita(id, datos)` - PUT: Actualiza una cita
- `eliminarCita(id)` - DELETE: Elimina una cita

**`src/screens/pacientesScreen.js`**
- Lista de pacientes con búsqueda
- Formulario modal para crear/editar
- Validación de campos
- Confirmación antes de eliminar

**`src/screens/citasScreen.js`**
- Diseño de tarjetas para las citas
- Filtros por estado
- Dropdown de pacientes
- Badges de colores por estado

## 🚀 Uso

### Iniciar la aplicación

```bash
npm start
# o
npx expo start
```

### Opciones de ejecución:

- Presiona `w` - Abrir en navegador web
- Presiona `a` - Abrir en emulador Android
- Presiona `i` - Abrir en simulador iOS
- Escanea el QR con **Expo Go** app en tu teléfono

### Limpiar caché (si hay problemas):
```bash
npx expo start -c
```

## 🔌 API Backend

Tu backend PHP debe tener estos endpoints funcionando:

### Pacientes (`pacientes.php`)

**GET** - Listar pacientes
```
GET http://tu-ip/clinicaPhp/pacientes.php
```

**POST** - Crear paciente
```json
POST http://tu-ip/clinicaPhp/pacientes.php
Content-Type: application/json

{
  "nombre": "Juan Pérez",
  "documento": "12345678",
  "telefono": "3001234567",
  "correo": "juan@example.com"
}
```

**PUT** - Actualizar paciente
```json
PUT http://tu-ip/clinicaPhp/pacientes.php
Content-Type: application/json

{
  "id": 1,
  "nombre": "Juan Pérez Actualizado",
  "documento": "12345678",
  "telefono": "3001234567",
  "correo": "juan@example.com"
}
```

**DELETE** - Eliminar paciente
```json
DELETE http://tu-ip/clinicaPhp/pacientes.php
Content-Type: application/json

{
  "id": 1
}
```

### Citas (`citas.php`)

**GET** - Listar citas
```
GET http://tu-ip/clinicaPhp/citas.php
```
Retorna citas con JOIN a pacientes para mostrar nombres.

**POST** - Crear cita
```json
POST http://tu-ip/clinicaPhp/citas.php
Content-Type: application/json

{
  "paciente_id": 1,
  "fecha": "2025-10-15",
  "hora": "14:30:00",
  "odontologo": "Dr. García",
  "estado": "pendiente"
}
```

**PUT** - Actualizar cita
```json
PUT http://tu-ip/clinicaPhp/citas.php
Content-Type: application/json

{
  "id": 1,
  "fecha": "2025-10-16",
  "hora": "15:00:00",
  "odontologo": "Dr. López",
  "estado": "confirmada"
}
```

**DELETE** - Eliminar cita
```json
DELETE http://tu-ip/clinicaPhp/citas.php
Content-Type: application/json

{
  "id": 1
}
```

## 🐛 Troubleshooting

### Error: "Network Error" al cargar datos

**Causa:** La URL en `config.js` no es correcta o XAMPP no está corriendo.

**Solución:**
1. Verifica que XAMPP Apache esté en verde
2. Prueba la URL en el navegador: `http://tu-ip/clinicaPhp/pacientes.php`
3. Si estás en teléfono, usa tu IP local (no `localhost`)
4. Asegúrate de que teléfono y PC estén en la misma Wi-Fi

### Error: "Property 'confirm' doesn't exist"

**Causa:** Usaste `confirm()` del navegador en lugar de `Alert.alert()`.

**Solución:** Reemplaza:
```javascript
// ❌ Mal
if (confirm("¿Eliminar?")) { ... }

// ✅ Bien
Alert.alert("Confirmar", "¿Eliminar?", [
  { text: "Cancelar", style: "cancel" },
  { text: "OK", onPress: () => { ... } }
]);
```

### Error: "A navigator can only contain 'Screen'"

**Causa:** Hay espacios en blanco o comentarios dentro del `<Tab.Navigator>`.

**Solución:** Asegúrate de que solo haya componentes `<Tab.Screen>` directamente dentro.

### La IP cambió y la app ya no conecta

**Causa:** Las IPs dinámicas cambian al reiniciar el router o conectarse a otra red.

**Solución:**
1. Ejecuta `ipconfig` de nuevo
2. Actualiza la IP en `src/api/config.js`
3. Reinicia Expo con `npx expo start -c`

### No puedo eliminar un paciente que tiene citas

**Causa:** Tu PHP valida que no se eliminen pacientes con citas asociadas.

**Solución:** Esto es correcto. Primero elimina las citas del paciente, luego elimina al paciente.

## 📱 Testing

### Testing en navegador:
```bash
npm start
# Presiona 'w'
```

### Testing en teléfono:
1. Instala **Expo Go** desde Play Store / App Store
2. Asegúrate de estar en la misma Wi-Fi que tu PC
3. Escanea el QR que aparece en la terminal
4. La app se abrirá en Expo Go

## 🤝 Contribuir

1. Fork el proyecto
2. Crea una rama (`git checkout -b feature/nueva-funcionalidad`)
3. Commit tus cambios (`git commit -m 'Agregar nueva funcionalidad'`)
4. Push a la rama (`git push origin feature/nueva-funcionalidad`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto es de código abierto bajo la licencia MIT.

## 👨‍💻 Autor

**Emerson Reyes**
- Proyecto desarrollado como parte del programa SENA

---

**Última actualización:** Septiembre 2025