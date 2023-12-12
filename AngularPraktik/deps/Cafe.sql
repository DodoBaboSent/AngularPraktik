-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Хост: 127.0.0.1:3306
-- Время создания: Дек 12 2023 г., 15:37
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
(2, 'meat', 0, 10, 'meat', 0, 'https://images.immediate.co.uk/production/volatile/sites/30/2023/01/Ponzu-tofu-poke-bowl-8733c67.jpg?quality=90&resize=440,400'),
(10, 'Ponzu Tofudsdasdsdsd', 1, 10, 'Tofu', 0, ''),
(12, 'meatmeat', 0, 123, 'meat', 0, ''),
(13, 'Ponzu Tofudds', 1, 10, 'Tofu', 0, ''),
(14, 'Not Tofu', 1, 10, 'Tofu', 0, 'https://images.immediate.co.uk/production/volatile/sites/30/2023/01/Ponzu-tofu-poke-bowl-8733c67.jpg?quality=90&resize=440,400'),
(15, 'Ponzu Tofuddaaf', 0, 10, 'Met', 0, ''),
(16, 'Ponzu Tofu', 1, -3, 'Tofu', 0, 'https://images.immediate.co.uk/production/volatile/sites/30/2023/01/Ponzu-tofu-poke-bowl-8733c67.jpg?quality=90&resize=440,400'),
(17, 'Ponzu Tofuвфывфыв', 1, 10, 'Tofu', 0, 'https://images.immediate.co.uk/production/volatile/sites/30/2023/01/Ponzu-tofu-poke-bowl-8733c67.jpg?quality=90&resize=440,400'),
(18, 'МЯЯЯЯЯЯЯЯЯЯЯЯЯЯЯЯЯСО', 0, 10, 'Мясо', 0, 'https://images.immediate.co.uk/production/volatile/sites/30/2023/01/Ponzu-tofu-poke-bowl-8733c67.jpg?quality=90&resize=440,400'),
(19, 'Карааги', 0, 10, 'Курица', 0, 'https://images.immediate.co.uk/production/volatile/sites/30/2023/01/Ponzu-tofu-poke-bowl-8733c67.jpg?quality=90&resize=440,400'),
(20, 'Мисо', 1, 10, 'Суп', 0, 'https://images.immediate.co.uk/production/volatile/sites/30/2023/01/Ponzu-tofu-poke-bowl-8733c67.jpg?quality=90&resize=440,400'),
(21, 'Тест', 0, 10, 'Tofu', 0, 'https://images.immediate.co.uk/production/volatile/sites/30/2023/01/Ponzu-tofu-poke-bowl-8733c67.jpg?quality=90&resize=440,400');

-- --------------------------------------------------------

--
-- Структура таблицы `PersonTable`
--

CREATE TABLE `PersonTable` (
  `Id` int NOT NULL,
  `Login` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `Password` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `Role` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Дамп данных таблицы `PersonTable`
--

INSERT INTO `PersonTable` (`Id`, `Login`, `Password`, `Role`) VALUES
(1, 'admin', 'admin', 'admin'),
(3, 'kal', 'kalich', 'user');

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
('20231205155211_Initial', '7.0.12'),
('20231207104115_Tokens', '7.0.12');

--
-- Индексы сохранённых таблиц
--

--
-- Индексы таблицы `MenuCafeTable`
--
ALTER TABLE `MenuCafeTable`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `PersonTable`
--
ALTER TABLE `PersonTable`
  ADD PRIMARY KEY (`Id`);

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
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=22;

--
-- AUTO_INCREMENT для таблицы `PersonTable`
--
ALTER TABLE `PersonTable`
  MODIFY `Id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
