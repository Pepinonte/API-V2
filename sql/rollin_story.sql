SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "Europe/Paris";

CREATE TABLE `actuality` (
  `actuality_id` int NOT NULL AUTO_INCREMENT,
  `actuality_title` varchar(100) NOT NULL,
  `actuality_content` varchar(10000) NOT NULL,
  `actuality_picture` varchar(1000) NOT NULL,
  `actuality_creation_date` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `actuality_link` varchar(1000) DEFAULT NULL,
  `actuality_update_date` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (actuality_id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

CREATE TABLE `user` (
  `user_id` int NOT NULL AUTO_INCREMENT,
  `user_name` varchar(100) NOT NULL,
  `user_password` varchar(100) NOT NULL,
  `user_email` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `user_creation_date` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `user_last_login` datetime DEFAULT NULL,
  `user_profile_picture` varchar(100) DEFAULT NULL,
  `user_biography` varchar(1000) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `user_email_verified` tinyint(1) NOT NULL DEFAULT '0',
  `user_country` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `user_zip_code` int DEFAULT NULL,
  `user_city` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `user_address` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `user_first_name` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `user_last_name` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  PRIMARY KEY (user_id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

CREATE TABLE `friendship_status` (
  `friendship_status_id` int NOT NULL AUTO_INCREMENT,
  `friendship_status_name` varchar(100) NOT NULL,
  PRIMARY KEY (friendship_status_id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

CREATE TABLE `friend_request` (
  `friend_request_id` int NOT NULL AUTO_INCREMENT,
  `friend_request_transmitter` int NOT NULL,
  `friend_request_receiver` int NOT NULL,
  `friend_request_date` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (friend_request_id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

CREATE TABLE `friendship` (
  `friendship` int NOT NULL AUTO_INCREMENT,
  `friendship_transmitter` int NOT NULL,
  `friendship_receiver` int NOT NULL,
  `friendship_status_id` int NOT NULL,
  `friendship_date_status` datetime NOT NULL ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (friendship)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

CREATE TABLE `item_type` (
  `item_type_id` int NOT NULL AUTO_INCREMENT,
  `item_type_name` varchar(100) NOT NULL,
  `item_type_description` varchar(100) NOT NULL,
  PRIMARY KEY (item_type_id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

CREATE TABLE `item` (
  `item_id` int NOT NULL AUTO_INCREMENT,
  `item_name` varchar(100) NOT NULL,
  `item_description` varchar(1000) DEFAULT NULL,
  `item_price` float NOT NULL,
  `item_picture` varchar(100) DEFAULT NULL,
  `item_author` int NOT NULL,
  `item_file` varchar(100) NOT NULL,
  `item_type_id` int NOT NULL,
  `item_date_upload` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (item_id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

CREATE TABLE `notification_type` (
  `notification_type_id` int NOT NULL AUTO_INCREMENT,
  `notification_type_name` varchar(100) NOT NULL,
  `notification_type_description` varchar(1000) NOT NULL,
  PRIMARY KEY (notification_type_id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

CREATE TABLE `bill` (
  `bill_id` int NOT NULL AUTO_INCREMENT,
  `user_id` int NOT NULL,
  `purchase_id` int NOT NULL,
  `bill_total_price` float NOT NULL,
  `bill_date` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `bill_file` varchar(100) NOT NULL,
  PRIMARY KEY (bill_id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

CREATE TABLE `blocked` (
  `blocked_id` int NOT NULL AUTO_INCREMENT,
  `user_id` int NOT NULL,
  `blocked_user_id` int NOT NULL,
  `blocked_date` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (blocked_id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

CREATE TABLE `cart` (
  `cart_id` int NOT NULL AUTO_INCREMENT,
  `user_id` int NOT NULL,
  PRIMARY KEY (cart_id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

CREATE TABLE `item_cart` (
  `item_cart_id` int NOT NULL AUTO_INCREMENT,
  `cart_id` int NOT NULL,
  `item_id` int NOT NULL,
  PRIMARY KEY (item_cart_id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

CREATE TABLE `item_purchase` (
  `item_purchase_id` int NOT NULL AUTO_INCREMENT,
  `purchase_id` int NOT NULL,
  `item_id` int NOT NULL,
  PRIMARY KEY (item_purchase_id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

CREATE TABLE `item_wishlist` (
  `item_wishlist_id` int NOT NULL AUTO_INCREMENT,
  `wishlist_id` int NOT NULL,
  `item_id` int NOT NULL,
  PRIMARY KEY (item_wishlist_id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

CREATE TABLE `notification` (
  `notification_id` int NOT NULL AUTO_INCREMENT,
  `user_id` int NOT NULL,
  `notification_type_id` int NOT NULL,
  `notification_date` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (notification_id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

CREATE TABLE `pack` (
  `pack_id` int NOT NULL AUTO_INCREMENT,
  `pack_name` varchar(100) NOT NULL,
  `pack_description` varchar(1000) DEFAULT NULL,
  `pack_price` float NOT NULL,
  `pack_type_id` int NOT NULL,
  `pack_picture` varchar(100) NOT NULL,
  `pack_author` int NOT NULL,
  `pack_date_upload` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (pack_id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

CREATE TABLE `pack_cart` (
  `pack_cart_id` int NOT NULL AUTO_INCREMENT,
  `cart_id` int NOT NULL,
  `pack_id` int NOT NULL,
  PRIMARY KEY (pack_cart_id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

CREATE TABLE `pack_item` (
  `pack_item_id` int NOT NULL AUTO_INCREMENT,
  `pack_id` int NOT NULL,
  `item_id` int NOT NULL,
  PRIMARY KEY (pack_item_id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

CREATE TABLE `pack_purchase` (
  `pack_purchase_id` int NOT NULL AUTO_INCREMENT,
  `purchase_id` int NOT NULL,
  `pack_id` int NOT NULL,
  PRIMARY KEY (pack_purchase_id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

CREATE TABLE `pack_type` (
  `pack_type_id` int NOT NULL AUTO_INCREMENT,
  `pack_type_name` varchar(100) NOT NULL,
  `pack_type_description` varchar(1000) NOT NULL,
  PRIMARY KEY (pack_type_id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

CREATE TABLE `pack_wishlist` (
  `pack_wishlist_id` int NOT NULL AUTO_INCREMENT,
  `wishlist_id` int NOT NULL,
  `pack_id` int NOT NULL,
  PRIMARY KEY (pack_wishlist_id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

CREATE TABLE `private_message` (
  `private_message_id` int NOT NULL AUTO_INCREMENT,
  `private_message_transmitter` int NOT NULL,
  `private_message_receiver` int NOT NULL,
  `private_message_content` varchar(5000) NOT NULL,
  `private_message_date` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (private_message_id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

CREATE TABLE `purchase` (
  `purchase_id` int NOT NULL AUTO_INCREMENT,
  `user_id` int NOT NULL,
  `purchase_date` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (purchase_id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

CREATE TABLE `service` (
  `service_id` int NOT NULL AUTO_INCREMENT,
  `service_name` varchar(100) NOT NULL,
  `service_description` varchar(1000) DEFAULT NULL,
  `service_price` float NOT NULL,
  `service_type_id` int NOT NULL,
  `service_author` int NOT NULL,
  `service_date_upload` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (service_id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

CREATE TABLE `service_cart` (
  `service_cart_id` int NOT NULL AUTO_INCREMENT,
  `cart_id` int NOT NULL,
  `service_id` int NOT NULL,
  PRIMARY KEY (service_cart_id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

CREATE TABLE `service_purchase` (
  `service_purchase_id` int NOT NULL AUTO_INCREMENT,
  `purchase_id` int NOT NULL,
  `service_id` int NOT NULL,
  PRIMARY KEY (service_purchase_id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

CREATE TABLE `service_type` (
  `service_type_id` int NOT NULL AUTO_INCREMENT,
  `service_type_name` varchar(100) NOT NULL,
  `service_type_description` varchar(1000) NOT NULL,
  PRIMARY KEY (service_type_id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

CREATE TABLE `service_wishlist` (
  `service_wishlist_id` int NOT NULL AUTO_INCREMENT,
  `wishlist_id` int NOT NULL,
  `service_id` int NOT NULL,
  PRIMARY KEY (service_wishlist_id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

CREATE TABLE `subscription` (
  `subscription_id` int NOT NULL AUTO_INCREMENT,
  `user_id` int NOT NULL,
  `subscription_type_id` int NOT NULL,
  `subscription_start_date` datetime NOT NULL,
  `subscription_stop_date` datetime NOT NULL,
  PRIMARY KEY (subscription_id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

CREATE TABLE `subscription_purchase` (
  `subscription_purchase_id` int NOT NULL AUTO_INCREMENT,
  `purchase_id` int NOT NULL,
  `subscription_id` int NOT NULL,
  PRIMARY KEY (subscription_purchase_id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

CREATE TABLE `subscription_type` (
  `subscription_type_id` int NOT NULL AUTO_INCREMENT,
  `subscription_type_name` varchar(100) NOT NULL,
  `subscription_type_description` varchar(1000) NOT NULL,
  `subscription_type_price` float NOT NULL,
  PRIMARY KEY (subscription_type_id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

CREATE TABLE `wishlist` (
  `wishlist_id` int NOT NULL AUTO_INCREMENT,
  `user_id` int NOT NULL,
  PRIMARY KEY (wishlist_id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

ALTER TABLE cart
ADD FOREIGN KEY (user_id) REFERENCES user(user_id);

ALTER TABLE bill
ADD FOREIGN KEY (user_id) REFERENCES user(user_id),
ADD FOREIGN KEY (purchase_id) REFERENCES purchase(purchase_id);

ALTER TABLE blocked
ADD FOREIGN KEY (user_id) REFERENCES user(user_id),
ADD FOREIGN KEY (blocked_user_id) REFERENCES user(user_id);

ALTER TABLE friendship
ADD FOREIGN KEY (friendship_transmitter) REFERENCES user(user_id),
ADD FOREIGN KEY (friendship_receiver) REFERENCES user(user_id),
ADD FOREIGN KEY (friendship_status_id) REFERENCES friendship_status(friendship_status_id);

ALTER TABLE friend_request
ADD FOREIGN KEY (friend_request_transmitter) REFERENCES user(user_id),
ADD FOREIGN KEY (friend_request_receiver) REFERENCES user(user_id);

ALTER TABLE item
ADD FOREIGN KEY (item_author) REFERENCES user(user_id),
ADD FOREIGN KEY (item_type_id) REFERENCES item_type(item_type_id);

ALTER TABLE item_cart
ADD FOREIGN KEY (item_id) REFERENCES item(item_id),
ADD FOREIGN KEY (cart_id) REFERENCES cart(cart_id);

ALTER TABLE item_purchase
ADD FOREIGN KEY (item_id) REFERENCES item(item_id),
ADD FOREIGN KEY (purchase_id) REFERENCES purchase(purchase_id);

ALTER TABLE item_wishlist
ADD FOREIGN KEY (item_id) REFERENCES item(item_id),
ADD FOREIGN KEY (wishlist_id) REFERENCES wishlist(wishlist_id);

ALTER TABLE notification
ADD FOREIGN KEY (notification_type_id) REFERENCES notification_type(notification_type_id),
ADD FOREIGN KEY (user_id) REFERENCES user(user_id);

ALTER TABLE pack
ADD FOREIGN KEY (pack_author) REFERENCES user(user_id),
ADD FOREIGN KEY (pack_type_id) REFERENCES pack_type(pack_type_id);

ALTER TABLE pack_cart
ADD FOREIGN KEY (pack_id) REFERENCES pack(pack_id),
ADD FOREIGN KEY (cart_id) REFERENCES cart(cart_id);

ALTER TABLE pack_item
ADD FOREIGN KEY (pack_id) REFERENCES pack(pack_id),
ADD FOREIGN KEY (item_id) REFERENCES item(item_id);

ALTER TABLE pack_purchase
ADD FOREIGN KEY (pack_id) REFERENCES pack(pack_id),
ADD FOREIGN KEY (purchase_id) REFERENCES purchase(purchase_id);

ALTER TABLE pack_wishlist
ADD FOREIGN KEY (pack_id) REFERENCES pack(pack_id),
ADD FOREIGN KEY (wishlist_id) REFERENCES wishlist(wishlist_id);

ALTER TABLE private_message
ADD FOREIGN KEY (private_message_transmitter) REFERENCES user(user_id),
ADD FOREIGN KEY (private_message_receiver) REFERENCES user(user_id);

ALTER TABLE purchase
ADD FOREIGN KEY (user_id) REFERENCES user(user_id);

ALTER TABLE service
ADD FOREIGN KEY (service_author) REFERENCES user(user_id),
ADD FOREIGN KEY (service_type_id) REFERENCES service_type(service_type_id);

ALTER TABLE service_cart
ADD FOREIGN KEY (service_id) REFERENCES service(service_id),
ADD FOREIGN KEY (cart_id) REFERENCES cart(cart_id);

ALTER TABLE service_purchase
ADD FOREIGN KEY (service_id) REFERENCES service(service_id),
ADD FOREIGN KEY (purchase_id) REFERENCES purchase(purchase_id);

ALTER TABLE service_wishlist
ADD FOREIGN KEY (service_id) REFERENCES service(service_id),
ADD FOREIGN KEY (wishlist_id) REFERENCES wishlist(wishlist_id);

ALTER TABLE subscription
ADD FOREIGN KEY (user_id) REFERENCES user(user_id),
ADD FOREIGN KEY (subscription_type_id) REFERENCES subscription_type(subscription_type_id);

ALTER TABLE subscription_purchase
ADD FOREIGN KEY (subscription_id) REFERENCES subscription(subscription_id),
ADD FOREIGN KEY (purchase_id) REFERENCES purchase(purchase_id);

ALTER TABLE wishlist
ADD FOREIGN KEY (user_id) REFERENCES user(user_id);

COMMIT;