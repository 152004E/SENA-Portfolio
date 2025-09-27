
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import CitasScreen from "./src/screens/citasScreen";
import PacientesScreen from "./src/screens/pacientesScreen";
import { Ionicons } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size }) => {
            let iconName;

            if (route.name === "Citas") {
              iconName = "calendar-outline";
            } else if (route.name === "Pacientes") {
              iconName = "people-outline";
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: "#0077b6",
          tabBarInactiveTintColor: "gray",
          headerShown: false,
        })}
      >
        <Tab.Screen name="Citas" component={CitasScreen} />
        <Tab.Screen name="Pacientes" component={PacientesScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}