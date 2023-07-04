-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Hôte : mysql:3306
-- Généré le : mar. 04 juil. 2023 à 09:36
-- Version du serveur : 8.0.33
-- Version de PHP : 8.1.19

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `rollin_story`
--

-- --------------------------------------------------------

--
-- Structure de la table `actuality`
--

CREATE TABLE `actuality` (
  `actuality_id` int NOT NULL,
  `actuality_title` varchar(100) NOT NULL,
  `actuality_content` varchar(10000) NOT NULL,
  `actuality_picture` varchar(1000) NOT NULL,
  `actuality_creation_date` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `actuality_link` varchar(1000) DEFAULT NULL,
  `actuality_update_date` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Structure de la table `bill`
--

CREATE TABLE `bill` (
  `bill_id` int NOT NULL,
  `user_id` int NOT NULL,
  `purchase_id` int NOT NULL,
  `bill_total_price` float NOT NULL,
  `bill_date` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `bill_file` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Structure de la table `blocked`
--

CREATE TABLE `blocked` (
  `blocked_id` int NOT NULL,
  `user_id` int NOT NULL,
  `blocked_user_id` int NOT NULL,
  `blocked_date` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Structure de la table `cart`
--

CREATE TABLE `cart` (
  `cart_id` int NOT NULL,
  `user_id` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Structure de la table `friendship`
--

CREATE TABLE `friendship` (
  `friendship` int NOT NULL,
  `friendship_transmitter` int NOT NULL,
  `friendship_receiver` int NOT NULL,
  `friendship_status_id` int NOT NULL,
  `friendship_date_status` datetime NOT NULL ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Structure de la table `friendship_status`
--

CREATE TABLE `friendship_status` (
  `friendship_status_id` int NOT NULL,
  `friendship_status_name` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Structure de la table `friend_request`
--

CREATE TABLE `friend_request` (
  `friend_request_id` int NOT NULL,
  `friend_request_transmitter` int NOT NULL,
  `friend_request_receiver` int NOT NULL,
  `friend_request_date` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Structure de la table `item`
--

CREATE TABLE `item` (
  `item_id` int NOT NULL,
  `item_name` varchar(100) NOT NULL,
  `item_description` varchar(1000) DEFAULT NULL,
  `item_price` float NOT NULL,
  `item_picture` varchar(100) DEFAULT NULL,
  `item_author` int NOT NULL,
  `item_file` varchar(100) NOT NULL,
  `item_type_id` int NOT NULL,
  `item_date_upload` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Structure de la table `item_cart`
--

CREATE TABLE `item_cart` (
  `item_cart_id` int NOT NULL,
  `cart_id` int NOT NULL,
  `item_id` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Structure de la table `item_purchase`
--

CREATE TABLE `item_purchase` (
  `item_purchase_id` int NOT NULL,
  `purchase_id` int NOT NULL,
  `item_id` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Structure de la table `item_type`
--

CREATE TABLE `item_type` (
  `item_type_id` int NOT NULL,
  `item_type_name` varchar(100) NOT NULL,
  `item_type_description` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Structure de la table `item_wishlist`
--

CREATE TABLE `item_wishlist` (
  `item_wishlist_id` int NOT NULL,
  `wishlist_id` int NOT NULL,
  `item_id` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Structure de la table `notification`
--

CREATE TABLE `notification` (
  `notification_id` int NOT NULL,
  `user_id` int NOT NULL,
  `notification_type_id` int NOT NULL,
  `notification_date` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Structure de la table `notification_type`
--

CREATE TABLE `notification_type` (
  `notification_type_id` int NOT NULL,
  `notification_type_name` varchar(100) NOT NULL,
  `notification_type_description` varchar(1000) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Structure de la table `pack`
--

CREATE TABLE `pack` (
  `pack_id` int NOT NULL,
  `pack_name` varchar(100) NOT NULL,
  `pack_description` varchar(1000) DEFAULT NULL,
  `pack_price` float NOT NULL,
  `pack_type_id` int NOT NULL,
  `pack_picture` varchar(100) NOT NULL,
  `pack_author` int NOT NULL,
  `pack_date_upload` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Structure de la table `pack_cart`
--

CREATE TABLE `pack_cart` (
  `pack_cart_id` int NOT NULL,
  `cart_id` int NOT NULL,
  `pack_id` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Structure de la table `pack_item`
--

CREATE TABLE `pack_item` (
  `pack_item_id` int NOT NULL,
  `pack_id` int NOT NULL,
  `item_id` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Structure de la table `pack_purchase`
--

CREATE TABLE `pack_purchase` (
  `pack_purchase_id` int NOT NULL,
  `purchase_id` int NOT NULL,
  `pack_id` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Structure de la table `pack_type`
--

CREATE TABLE `pack_type` (
  `pack_type_id` int NOT NULL,
  `pack_type_name` varchar(100) NOT NULL,
  `pack_type_description` varchar(1000) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Structure de la table `pack_wishlist`
--

CREATE TABLE `pack_wishlist` (
  `pack_wishlist_id` int NOT NULL,
  `wishlist_id` int NOT NULL,
  `pack_id` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Structure de la table `private_message`
--

CREATE TABLE `private_message` (
  `private_message_id` int NOT NULL,
  `private_message_transmitter` int NOT NULL,
  `private_message_receiver` int NOT NULL,
  `private_message_content` varchar(5000) NOT NULL,
  `private_message_date` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Structure de la table `purchase`
--

CREATE TABLE `purchase` (
  `purchase_id` int NOT NULL,
  `user_id` int NOT NULL,
  `purchase_date` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Structure de la table `service`
--

CREATE TABLE `service` (
  `service_id` int NOT NULL,
  `service_name` varchar(100) NOT NULL,
  `service_description` varchar(1000) DEFAULT NULL,
  `service_price` float NOT NULL,
  `service_type_id` int NOT NULL,
  `service_author` int NOT NULL,
  `service_date_upload` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Structure de la table `service_cart`
--

CREATE TABLE `service_cart` (
  `service_cart_id` int NOT NULL,
  `cart_id` int NOT NULL,
  `service_id` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Structure de la table `service_purchase`
--

CREATE TABLE `service_purchase` (
  `service_purchase_id` int NOT NULL,
  `purchase_id` int NOT NULL,
  `service_id` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Structure de la table `service_type`
--

CREATE TABLE `service_type` (
  `service_type_id` int NOT NULL,
  `service_type_name` varchar(100) NOT NULL,
  `service_type_description` varchar(1000) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Structure de la table `service_wishlist`
--

CREATE TABLE `service_wishlist` (
  `service_wishlist_id` int NOT NULL,
  `wishlist_id` int NOT NULL,
  `service_id` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Structure de la table `subscription`
--

CREATE TABLE `subscription` (
  `subscription_id` int NOT NULL,
  `user_id` int NOT NULL,
  `subscription_type_id` int NOT NULL,
  `subscription_start_date` datetime NOT NULL,
  `subscription_stop_date` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Structure de la table `subscription_purchase`
--

CREATE TABLE `subscription_purchase` (
  `subscription_purchase_id` int NOT NULL,
  `purchase_id` int NOT NULL,
  `subscription_id` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Structure de la table `subscription_type`
--

CREATE TABLE `subscription_type` (
  `subscription_type_id` int NOT NULL,
  `subscription_type_name` varchar(100) NOT NULL,
  `subscription_type_description` varchar(1000) NOT NULL,
  `subscription_type_price` float NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Structure de la table `user`
--

CREATE TABLE `user` (
  `user_id` int NOT NULL,
  `user_name` varchar(100) NOT NULL,
  `user_password` varchar(100) NOT NULL,
  `user_email` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `user_creation_date` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `user_last_login` datetime DEFAULT NULL,
  `user_profile_picture` varchar(100) DEFAULT NULL,
  `user_biography` varchar(1000) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `user_email_verified` tinyint(1) NOT NULL DEFAULT '0',
  `user_zip_code` int DEFAULT NULL,
  `user_city` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `user_address` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `user_first_name` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `user_last_name` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Structure de la table `wishlist`
--

CREATE TABLE `wishlist` (
  `wishlist_id` int NOT NULL,
  `user_id` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `actuality`
--
ALTER TABLE `actuality`
  ADD PRIMARY KEY (`actuality_id`);

--
-- Index pour la table `bill`
--
ALTER TABLE `bill`
  ADD PRIMARY KEY (`bill_id`),
  ADD KEY `user_id` (`user_id`),
  ADD KEY `purchase_id` (`purchase_id`);

--
-- Index pour la table `blocked`
--
ALTER TABLE `blocked`
  ADD PRIMARY KEY (`blocked_id`),
  ADD KEY `user_id` (`user_id`),
  ADD KEY `blocked_user_id` (`blocked_user_id`);

--
-- Index pour la table `cart`
--
ALTER TABLE `cart`
  ADD PRIMARY KEY (`cart_id`),
  ADD KEY `user_id` (`user_id`);

--
-- Index pour la table `friendship`
--
ALTER TABLE `friendship`
  ADD PRIMARY KEY (`friendship`),
  ADD KEY `friendship_transmitter` (`friendship_transmitter`),
  ADD KEY `friendship_receiver` (`friendship_receiver`),
  ADD KEY `friendship_status_id` (`friendship_status_id`);

--
-- Index pour la table `friendship_status`
--
ALTER TABLE `friendship_status`
  ADD PRIMARY KEY (`friendship_status_id`);

--
-- Index pour la table `friend_request`
--
ALTER TABLE `friend_request`
  ADD PRIMARY KEY (`friend_request_id`),
  ADD KEY `friend_request_transmitter` (`friend_request_transmitter`),
  ADD KEY `friend_request_receiver` (`friend_request_receiver`);

--
-- Index pour la table `item`
--
ALTER TABLE `item`
  ADD PRIMARY KEY (`item_id`),
  ADD KEY `item_author` (`item_author`),
  ADD KEY `item_type_id` (`item_type_id`);

--
-- Index pour la table `item_cart`
--
ALTER TABLE `item_cart`
  ADD PRIMARY KEY (`item_cart_id`),
  ADD KEY `cart_id` (`cart_id`),
  ADD KEY `item_id` (`item_id`);

--
-- Index pour la table `item_purchase`
--
ALTER TABLE `item_purchase`
  ADD PRIMARY KEY (`item_purchase_id`),
  ADD KEY `purchase_id` (`purchase_id`),
  ADD KEY `item_id` (`item_id`);

--
-- Index pour la table `item_type`
--
ALTER TABLE `item_type`
  ADD PRIMARY KEY (`item_type_id`);

--
-- Index pour la table `item_wishlist`
--
ALTER TABLE `item_wishlist`
  ADD PRIMARY KEY (`item_wishlist_id`),
  ADD KEY `wishlist_id` (`wishlist_id`),
  ADD KEY `item_id` (`item_id`);

--
-- Index pour la table `notification`
--
ALTER TABLE `notification`
  ADD PRIMARY KEY (`notification_id`),
  ADD KEY `user_id` (`user_id`),
  ADD KEY `notification_type_id` (`notification_type_id`);

--
-- Index pour la table `notification_type`
--
ALTER TABLE `notification_type`
  ADD PRIMARY KEY (`notification_type_id`);

--
-- Index pour la table `pack`
--
ALTER TABLE `pack`
  ADD PRIMARY KEY (`pack_id`),
  ADD KEY `pack_type_id` (`pack_type_id`),
  ADD KEY `pack_author` (`pack_author`);

--
-- Index pour la table `pack_cart`
--
ALTER TABLE `pack_cart`
  ADD PRIMARY KEY (`pack_cart_id`),
  ADD KEY `cart_id` (`cart_id`),
  ADD KEY `pack_id` (`pack_id`);

--
-- Index pour la table `pack_item`
--
ALTER TABLE `pack_item`
  ADD PRIMARY KEY (`pack_item_id`),
  ADD KEY `pack_id` (`pack_id`),
  ADD KEY `item_id` (`item_id`);

--
-- Index pour la table `pack_purchase`
--
ALTER TABLE `pack_purchase`
  ADD PRIMARY KEY (`pack_purchase_id`),
  ADD KEY `purchase_id` (`purchase_id`),
  ADD KEY `pack_id` (`pack_id`);

--
-- Index pour la table `pack_type`
--
ALTER TABLE `pack_type`
  ADD PRIMARY KEY (`pack_type_id`);

--
-- Index pour la table `pack_wishlist`
--
ALTER TABLE `pack_wishlist`
  ADD PRIMARY KEY (`pack_wishlist_id`),
  ADD KEY `wishlist_id` (`wishlist_id`),
  ADD KEY `pack_id` (`pack_id`);

--
-- Index pour la table `private_message`
--
ALTER TABLE `private_message`
  ADD PRIMARY KEY (`private_message_id`),
  ADD KEY `private_message_transmitter` (`private_message_transmitter`),
  ADD KEY `private_message_receiver` (`private_message_receiver`);

--
-- Index pour la table `purchase`
--
ALTER TABLE `purchase`
  ADD PRIMARY KEY (`purchase_id`),
  ADD KEY `user_id` (`user_id`);

--
-- Index pour la table `service`
--
ALTER TABLE `service`
  ADD PRIMARY KEY (`service_id`),
  ADD KEY `service_type_id` (`service_type_id`),
  ADD KEY `service_author` (`service_author`);

--
-- Index pour la table `service_cart`
--
ALTER TABLE `service_cart`
  ADD PRIMARY KEY (`service_cart_id`),
  ADD KEY `cart_id` (`cart_id`),
  ADD KEY `service_id` (`service_id`);

--
-- Index pour la table `service_purchase`
--
ALTER TABLE `service_purchase`
  ADD PRIMARY KEY (`service_purchase_id`),
  ADD KEY `purchase_id` (`purchase_id`),
  ADD KEY `service_id` (`service_id`);

--
-- Index pour la table `service_type`
--
ALTER TABLE `service_type`
  ADD PRIMARY KEY (`service_type_id`);

--
-- Index pour la table `service_wishlist`
--
ALTER TABLE `service_wishlist`
  ADD PRIMARY KEY (`service_wishlist_id`),
  ADD KEY `wishlist_id` (`wishlist_id`),
  ADD KEY `service_id` (`service_id`);

--
-- Index pour la table `subscription`
--
ALTER TABLE `subscription`
  ADD PRIMARY KEY (`subscription_id`),
  ADD KEY `user_id` (`user_id`),
  ADD KEY `subscription_type_id` (`subscription_type_id`);

--
-- Index pour la table `subscription_purchase`
--
ALTER TABLE `subscription_purchase`
  ADD PRIMARY KEY (`subscription_purchase_id`),
  ADD KEY `purchase_id` (`purchase_id`),
  ADD KEY `subscription_id` (`subscription_id`);

--
-- Index pour la table `subscription_type`
--
ALTER TABLE `subscription_type`
  ADD PRIMARY KEY (`subscription_type_id`);

--
-- Index pour la table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`user_id`);

--
-- Index pour la table `wishlist`
--
ALTER TABLE `wishlist`
  ADD PRIMARY KEY (`wishlist_id`),
  ADD KEY `user_id` (`user_id`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `actuality`
--
ALTER TABLE `actuality`
  MODIFY `actuality_id` int NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `bill`
--
ALTER TABLE `bill`
  MODIFY `bill_id` int NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `blocked`
--
ALTER TABLE `blocked`
  MODIFY `blocked_id` int NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `cart`
--
ALTER TABLE `cart`
  MODIFY `cart_id` int NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `friendship`
--
ALTER TABLE `friendship`
  MODIFY `friendship` int NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `friendship_status`
--
ALTER TABLE `friendship_status`
  MODIFY `friendship_status_id` int NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `friend_request`
--
ALTER TABLE `friend_request`
  MODIFY `friend_request_id` int NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `item`
--
ALTER TABLE `item`
  MODIFY `item_id` int NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `item_cart`
--
ALTER TABLE `item_cart`
  MODIFY `item_cart_id` int NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `item_purchase`
--
ALTER TABLE `item_purchase`
  MODIFY `item_purchase_id` int NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `item_type`
--
ALTER TABLE `item_type`
  MODIFY `item_type_id` int NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `item_wishlist`
--
ALTER TABLE `item_wishlist`
  MODIFY `item_wishlist_id` int NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `notification`
--
ALTER TABLE `notification`
  MODIFY `notification_id` int NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `notification_type`
--
ALTER TABLE `notification_type`
  MODIFY `notification_type_id` int NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `pack`
--
ALTER TABLE `pack`
  MODIFY `pack_id` int NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `pack_cart`
--
ALTER TABLE `pack_cart`
  MODIFY `pack_cart_id` int NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `pack_item`
--
ALTER TABLE `pack_item`
  MODIFY `pack_item_id` int NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `pack_purchase`
--
ALTER TABLE `pack_purchase`
  MODIFY `pack_purchase_id` int NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `pack_type`
--
ALTER TABLE `pack_type`
  MODIFY `pack_type_id` int NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `pack_wishlist`
--
ALTER TABLE `pack_wishlist`
  MODIFY `pack_wishlist_id` int NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `private_message`
--
ALTER TABLE `private_message`
  MODIFY `private_message_id` int NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `purchase`
--
ALTER TABLE `purchase`
  MODIFY `purchase_id` int NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `service`
--
ALTER TABLE `service`
  MODIFY `service_id` int NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `service_cart`
--
ALTER TABLE `service_cart`
  MODIFY `service_cart_id` int NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `service_purchase`
--
ALTER TABLE `service_purchase`
  MODIFY `service_purchase_id` int NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `service_type`
--
ALTER TABLE `service_type`
  MODIFY `service_type_id` int NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `service_wishlist`
--
ALTER TABLE `service_wishlist`
  MODIFY `service_wishlist_id` int NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `subscription`
--
ALTER TABLE `subscription`
  MODIFY `subscription_id` int NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `subscription_purchase`
--
ALTER TABLE `subscription_purchase`
  MODIFY `subscription_purchase_id` int NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `subscription_type`
--
ALTER TABLE `subscription_type`
  MODIFY `subscription_type_id` int NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `user`
--
ALTER TABLE `user`
  MODIFY `user_id` int NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `wishlist`
--
ALTER TABLE `wishlist`
  MODIFY `wishlist_id` int NOT NULL AUTO_INCREMENT;

--
-- Contraintes pour les tables déchargées
--

--
-- Contraintes pour la table `cart`
--
ALTER TABLE `cart`
  ADD CONSTRAINT `cart_ibfk_1` FOREIGN KEY (`cart_id`) REFERENCES `pack_cart` (`cart_id`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  ADD CONSTRAINT `cart_ibfk_2` FOREIGN KEY (`cart_id`) REFERENCES `item_cart` (`cart_id`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  ADD CONSTRAINT `cart_ibfk_3` FOREIGN KEY (`cart_id`) REFERENCES `service_cart` (`cart_id`) ON DELETE RESTRICT ON UPDATE RESTRICT;

--
-- Contraintes pour la table `friendship_status`
--
ALTER TABLE `friendship_status`
  ADD CONSTRAINT `friendship_status_ibfk_1` FOREIGN KEY (`friendship_status_id`) REFERENCES `friendship` (`friendship_status_id`) ON DELETE RESTRICT ON UPDATE RESTRICT;

--
-- Contraintes pour la table `item`
--
ALTER TABLE `item`
  ADD CONSTRAINT `item_ibfk_1` FOREIGN KEY (`item_id`) REFERENCES `item_cart` (`item_id`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  ADD CONSTRAINT `item_ibfk_2` FOREIGN KEY (`item_id`) REFERENCES `item_purchase` (`item_id`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  ADD CONSTRAINT `item_ibfk_3` FOREIGN KEY (`item_id`) REFERENCES `item_wishlist` (`item_id`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  ADD CONSTRAINT `item_ibfk_4` FOREIGN KEY (`item_id`) REFERENCES `pack_item` (`item_id`) ON DELETE RESTRICT ON UPDATE RESTRICT;

--
-- Contraintes pour la table `item_type`
--
ALTER TABLE `item_type`
  ADD CONSTRAINT `item_type_ibfk_1` FOREIGN KEY (`item_type_id`) REFERENCES `item` (`item_type_id`) ON DELETE RESTRICT ON UPDATE RESTRICT;

--
-- Contraintes pour la table `notification_type`
--
ALTER TABLE `notification_type`
  ADD CONSTRAINT `notification_type_ibfk_1` FOREIGN KEY (`notification_type_id`) REFERENCES `notification` (`notification_type_id`) ON DELETE RESTRICT ON UPDATE RESTRICT;

--
-- Contraintes pour la table `pack`
--
ALTER TABLE `pack`
  ADD CONSTRAINT `pack_ibfk_1` FOREIGN KEY (`pack_id`) REFERENCES `pack_purchase` (`purchase_id`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  ADD CONSTRAINT `pack_ibfk_2` FOREIGN KEY (`pack_id`) REFERENCES `pack_cart` (`pack_id`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  ADD CONSTRAINT `pack_ibfk_3` FOREIGN KEY (`pack_id`) REFERENCES `pack_wishlist` (`pack_id`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  ADD CONSTRAINT `pack_ibfk_4` FOREIGN KEY (`pack_id`) REFERENCES `pack_item` (`pack_id`) ON DELETE RESTRICT ON UPDATE RESTRICT;

--
-- Contraintes pour la table `pack_type`
--
ALTER TABLE `pack_type`
  ADD CONSTRAINT `pack_type_ibfk_1` FOREIGN KEY (`pack_type_id`) REFERENCES `pack` (`pack_type_id`) ON DELETE RESTRICT ON UPDATE RESTRICT;

--
-- Contraintes pour la table `purchase`
--
ALTER TABLE `purchase`
  ADD CONSTRAINT `purchase_ibfk_1` FOREIGN KEY (`purchase_id`) REFERENCES `bill` (`purchase_id`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  ADD CONSTRAINT `purchase_ibfk_2` FOREIGN KEY (`purchase_id`) REFERENCES `item_purchase` (`purchase_id`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  ADD CONSTRAINT `purchase_ibfk_3` FOREIGN KEY (`purchase_id`) REFERENCES `pack_purchase` (`purchase_id`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  ADD CONSTRAINT `purchase_ibfk_4` FOREIGN KEY (`purchase_id`) REFERENCES `service_purchase` (`purchase_id`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  ADD CONSTRAINT `purchase_ibfk_5` FOREIGN KEY (`purchase_id`) REFERENCES `subscription_purchase` (`purchase_id`) ON DELETE RESTRICT ON UPDATE RESTRICT;

--
-- Contraintes pour la table `service`
--
ALTER TABLE `service`
  ADD CONSTRAINT `service_ibfk_1` FOREIGN KEY (`service_id`) REFERENCES `service_cart` (`service_id`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  ADD CONSTRAINT `service_ibfk_2` FOREIGN KEY (`service_id`) REFERENCES `service_purchase` (`service_id`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  ADD CONSTRAINT `service_ibfk_3` FOREIGN KEY (`service_id`) REFERENCES `service_wishlist` (`service_id`) ON DELETE RESTRICT ON UPDATE RESTRICT;

--
-- Contraintes pour la table `service_type`
--
ALTER TABLE `service_type`
  ADD CONSTRAINT `service_type_ibfk_1` FOREIGN KEY (`service_type_id`) REFERENCES `service` (`service_type_id`) ON DELETE RESTRICT ON UPDATE RESTRICT;

--
-- Contraintes pour la table `subscription`
--
ALTER TABLE `subscription`
  ADD CONSTRAINT `subscription_ibfk_1` FOREIGN KEY (`subscription_id`) REFERENCES `subscription_purchase` (`subscription_id`) ON DELETE RESTRICT ON UPDATE RESTRICT;

--
-- Contraintes pour la table `subscription_type`
--
ALTER TABLE `subscription_type`
  ADD CONSTRAINT `subscription_type_ibfk_1` FOREIGN KEY (`subscription_type_id`) REFERENCES `subscription` (`subscription_type_id`) ON DELETE RESTRICT ON UPDATE RESTRICT;

--
-- Contraintes pour la table `user`
--
ALTER TABLE `user`
  ADD CONSTRAINT `user_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `bill` (`user_id`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  ADD CONSTRAINT `user_ibfk_10` FOREIGN KEY (`user_id`) REFERENCES `notification` (`user_id`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  ADD CONSTRAINT `user_ibfk_11` FOREIGN KEY (`user_id`) REFERENCES `pack` (`pack_author`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  ADD CONSTRAINT `user_ibfk_12` FOREIGN KEY (`user_id`) REFERENCES `private_message` (`private_message_receiver`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  ADD CONSTRAINT `user_ibfk_13` FOREIGN KEY (`user_id`) REFERENCES `private_message` (`private_message_transmitter`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  ADD CONSTRAINT `user_ibfk_14` FOREIGN KEY (`user_id`) REFERENCES `purchase` (`user_id`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  ADD CONSTRAINT `user_ibfk_15` FOREIGN KEY (`user_id`) REFERENCES `service` (`service_author`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  ADD CONSTRAINT `user_ibfk_16` FOREIGN KEY (`user_id`) REFERENCES `subscription` (`user_id`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  ADD CONSTRAINT `user_ibfk_17` FOREIGN KEY (`user_id`) REFERENCES `wishlist` (`user_id`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  ADD CONSTRAINT `user_ibfk_2` FOREIGN KEY (`user_id`) REFERENCES `blocked` (`blocked_user_id`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  ADD CONSTRAINT `user_ibfk_3` FOREIGN KEY (`user_id`) REFERENCES `blocked` (`user_id`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  ADD CONSTRAINT `user_ibfk_4` FOREIGN KEY (`user_id`) REFERENCES `cart` (`user_id`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  ADD CONSTRAINT `user_ibfk_5` FOREIGN KEY (`user_id`) REFERENCES `friend_request` (`friend_request_receiver`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  ADD CONSTRAINT `user_ibfk_6` FOREIGN KEY (`user_id`) REFERENCES `friend_request` (`friend_request_transmitter`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  ADD CONSTRAINT `user_ibfk_7` FOREIGN KEY (`user_id`) REFERENCES `friendship` (`friendship_receiver`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  ADD CONSTRAINT `user_ibfk_8` FOREIGN KEY (`user_id`) REFERENCES `friendship` (`friendship_transmitter`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  ADD CONSTRAINT `user_ibfk_9` FOREIGN KEY (`user_id`) REFERENCES `item` (`item_author`) ON DELETE RESTRICT ON UPDATE RESTRICT;

--
-- Contraintes pour la table `wishlist`
--
ALTER TABLE `wishlist`
  ADD CONSTRAINT `wishlist_ibfk_1` FOREIGN KEY (`wishlist_id`) REFERENCES `item_wishlist` (`wishlist_id`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  ADD CONSTRAINT `wishlist_ibfk_2` FOREIGN KEY (`wishlist_id`) REFERENCES `pack_wishlist` (`wishlist_id`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  ADD CONSTRAINT `wishlist_ibfk_3` FOREIGN KEY (`wishlist_id`) REFERENCES `service_wishlist` (`wishlist_id`) ON DELETE RESTRICT ON UPDATE RESTRICT;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
