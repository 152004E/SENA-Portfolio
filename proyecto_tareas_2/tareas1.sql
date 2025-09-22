-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1:33065
-- Tiempo de generación: 22-09-2025 a las 05:22:37
-- Versión del servidor: 10.4.32-MariaDB
-- Versión de PHP: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `tareas_db`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tareas1`
--

CREATE TABLE `tareas1` (
  `id` int(11) NOT NULL,
  `titulo` varchar(50) DEFAULT NULL,
  `estado` enum('pendiente','completado') NOT NULL DEFAULT 'pendiente'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `tareas1`
--

INSERT INTO `tareas1` (`id`, `titulo`, `estado`) VALUES
(15, 'comprar carro', 'completado'),
(17, 'Comprar frutas en la plaza', 'pendiente'),
(18, 'Terminar proyecto de clase', 'pendiente'),
(19, 'Ir al gimnasio', 'pendiente'),
(20, 'Hablar con brayan del trabajo', 'pendiente'),
(21, 'Lavar la moto 🚲', 'pendiente'),
(22, 'Hacer mercado 🛒', 'pendiente'),
(23, 'Estudiar JavaScript 📚', 'pendiente'),
(25, 'hola', 'pendiente'),
(26, 'mama querida', 'completado');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `tareas1`
--
ALTER TABLE `tareas1`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `tareas1`
--
ALTER TABLE `tareas1`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=27;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
