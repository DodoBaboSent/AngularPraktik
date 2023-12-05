-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Хост: 127.0.0.1:3306
-- Время создания: Дек 05 2023 г., 19:15
-- Версия сервера: 8.0.30
-- Версия PHP: 8.0.22

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- База данных: `Cafe`
--

-- --------------------------------------------------------

--
-- Структура таблицы `MenuCafeTable`
--

CREATE TABLE `MenuCafeTable` (
  `id` int NOT NULL,
  `name` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci,
  `vegan` tinyint(1) NOT NULL,
  `price` int NOT NULL,
  `section` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `childrenMenu` tinyint(1) NOT NULL,
  `image` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Дамп данных таблицы `MenuCafeTable`
--

INSERT INTO `MenuCafeTable` (`id`, `name`, `vegan`, `price`, `section`, `childrenMenu`, `image`) VALUES
(1, 'Ponzu tofu', 1, 10, 'Tofu', 0, 'https://images.immediate.co.uk/production/volatile/sites/30/2023/01/Ponzu-tofu-poke-bowl-8733c67.jpg?quality=90&resize=440,400'),
(2, 'meat', 0, 10, 'meat', 0, 'https://images.immediate.co.uk/production/volatile/sites/30/2023/01/Ponzu-tofu-poke-bowl-8733c67.jpg?quality=90&resize=440,400');

-- --------------------------------------------------------

--
-- Структура таблицы `__EFMigrationsHistory`
--

CREATE TABLE `__EFMigrationsHistory` (
  `MigrationId` varchar(150) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `ProductVersion` varchar(32) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Дамп данных таблицы `__EFMigrationsHistory`
--

INSERT INTO `__EFMigrationsHistory` (`MigrationId`, `ProductVersion`) VALUES
('20231205155211_Initial', '7.0.12');

--
-- Индексы сохранённых таблиц
--

--
-- Индексы таблицы `MenuCafeTable`
--
ALTER TABLE `MenuCafeTable`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `__EFMigrationsHistory`
--
ALTER TABLE `__EFMigrationsHistory`
  ADD PRIMARY KEY (`MigrationId`);

--
-- AUTO_INCREMENT для сохранённых таблиц
--

--
-- AUTO_INCREMENT для таблицы `MenuCafeTable`
--
ALTER TABLE `MenuCafeTable`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
