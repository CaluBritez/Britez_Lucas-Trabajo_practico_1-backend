-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 28-08-2023 a las 20:33:34
-- Versión del servidor: 10.4.28-MariaDB
-- Versión de PHP: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `tumusica`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `canciones`
--

CREATE TABLE `canciones` (
  `id` int(11) NOT NULL,
  `id_playlist` int(11) NOT NULL,
  `artista` varchar(100) NOT NULL,
  `cancion` varchar(100) NOT NULL,
  `estado` tinyint(1) DEFAULT 1,
  `createdAt` datetime NOT NULL DEFAULT current_timestamp(),
  `updatedAt` datetime NOT NULL DEFAULT current_timestamp(),
  `deletedAt` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `canciones`
--

INSERT INTO `canciones` (`id`, `id_playlist`, `artista`, `cancion`, `estado`, `createdAt`, `updatedAt`, `deletedAt`) VALUES
(1, 1, 'Coldplay', 'Clocks', 1, '2023-08-28 13:23:50', '2023-08-28 13:23:50', NULL),
(2, 1, 'Wos', 'Canguro', 1, '2023-08-28 13:25:21', '2023-08-28 13:25:21', NULL),
(3, 1, 'ElectroChongo', 'Fiesta Negra', 1, '2023-08-28 13:26:31', '2023-08-28 13:26:31', NULL),
(4, 1, 'Cerati', 'Tu Locura', 1, '2023-08-28 13:27:14', '2023-08-28 13:27:14', NULL),
(5, 2, 'Snoop Dogg', 'Only Sheet', 1, '2023-08-28 13:29:50', '2023-08-28 13:29:50', NULL),
(6, 2, 'Eminem', 'Saturday', 1, '2023-08-28 13:30:20', '2023-08-28 13:30:20', NULL),
(7, 3, 'Jaden', 'On my own', 1, '2023-08-28 13:32:06', '2023-08-28 13:32:06', NULL),
(8, 3, 'Imagine Dragons', 'Believer', 1, '2023-08-28 13:32:43', '2023-08-28 13:32:43', NULL),
(9, 2, 'Intoxicados', 'Esta saliendo el sol', 1, '2023-08-28 17:58:39', '2023-08-28 17:58:39', NULL),
(10, 6, 'Mana', 'Primavera azul', 1, '2023-08-28 18:20:56', '2023-08-28 18:20:56', NULL);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `playlists`
--

CREATE TABLE `playlists` (
  `id` int(11) NOT NULL,
  `id_usuario` int(11) NOT NULL,
  `nombre` varchar(100) NOT NULL,
  `visible` tinyint(1) DEFAULT 1,
  `estado` tinyint(1) DEFAULT 1,
  `createdAt` datetime NOT NULL DEFAULT current_timestamp(),
  `updatedAt` datetime NOT NULL DEFAULT current_timestamp(),
  `deletedAt` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `playlists`
--

INSERT INTO `playlists` (`id`, `id_usuario`, `nombre`, `visible`, `estado`, `createdAt`, `updatedAt`, `deletedAt`) VALUES
(1, 1, 'Electronica', 1, 1, '2023-08-28 13:13:35', '2023-08-28 13:13:35', NULL),
(2, 1, 'Chill', 1, 1, '2023-08-28 13:27:33', '2023-08-28 13:27:33', NULL),
(3, 2, 'Rock', 1, 1, '2023-08-28 13:31:23', '2023-08-28 13:31:23', NULL),
(5, 2, 'Full Bob Marley', 1, 1, '2023-08-28 17:51:02', '2023-08-28 17:51:02', NULL),
(6, 4, 'Romanticos', 1, 1, '2023-08-28 18:19:28', '2023-08-28 18:19:28', NULL);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

CREATE TABLE `usuarios` (
  `id` int(11) NOT NULL,
  `usuario` varchar(100) NOT NULL,
  `password` varchar(100) NOT NULL,
  `estado` tinyint(1) DEFAULT 1,
  `createdAt` datetime NOT NULL DEFAULT current_timestamp(),
  `updatedAt` datetime NOT NULL DEFAULT current_timestamp(),
  `deletedAt` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`id`, `usuario`, `password`, `estado`, `createdAt`, `updatedAt`, `deletedAt`) VALUES
(1, 'Maroni', '4212315456', 1, '2023-08-28 13:10:57', '2023-08-28 13:10:57', NULL),
(2, 'Perrito Barrios', '456789', 1, '2023-08-28 13:30:52', '2023-08-28 13:30:52', NULL),
(3, 'Richard', '$2b$10$XYvSwSVHcZoHa3a/jB21AeqY8O68nlWi18vevM2ykzvJnwYsCYM4W', 1, '2023-08-28 14:37:26', '2023-08-28 14:37:26', NULL),
(4, 'Silvana', '$2b$10$YQAVWmrO.GH4DW1hzCzm8ehxGRy9pOnBl9ZuS3RTgc0z0jlQHeNXq', 1, '2023-08-28 18:18:45', '2023-08-28 18:18:45', NULL);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `canciones`
--
ALTER TABLE `canciones`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_playlist` (`id_playlist`);

--
-- Indices de la tabla `playlists`
--
ALTER TABLE `playlists`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_usuario` (`id_usuario`);

--
-- Indices de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `canciones`
--
ALTER TABLE `canciones`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT de la tabla `playlists`
--
ALTER TABLE `playlists`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `canciones`
--
ALTER TABLE `canciones`
  ADD CONSTRAINT `canciones_ibfk_1` FOREIGN KEY (`id_playlist`) REFERENCES `playlists` (`id`) ON UPDATE CASCADE;

--
-- Filtros para la tabla `playlists`
--
ALTER TABLE `playlists`
  ADD CONSTRAINT `playlists_ibfk_1` FOREIGN KEY (`id_usuario`) REFERENCES `usuarios` (`id`) ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
