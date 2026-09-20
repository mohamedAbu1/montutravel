CREATE DATABASE IF NOT EXISTS `montutravel` CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
USE `montutravel`;

CREATE TABLE IF NOT EXISTS categories (id CHAR(36) PRIMARY KEY, created_at DATETIME NULL, images JSON NULL, name JSON NOT NULL);
CREATE TABLE IF NOT EXISTS cities (id CHAR(36) PRIMARY KEY, created_at DATETIME NULL, images JSON NULL, name JSON NOT NULL);
CREATE TABLE IF NOT EXISTS currency_rates (id CHAR(36) PRIMARY KEY, currency VARCHAR(10) NOT NULL, rate DECIMAL(12,6) NOT NULL, updated_at DATETIME NULL);
CREATE TABLE IF NOT EXISTS trips (
  id CHAR(36) PRIMARY KEY, title JSON NOT NULL, description JSON NULL, cover_image TEXT NULL,
  solo_price DECIMAL(12,2) NULL, group_price DECIMAL(12,2) NULL, created_at DATETIME NULL,
  priceLevel VARCHAR(50) NULL, updated_at DATETIME NULL, duration VARCHAR(50) NULL,
  currency VARCHAR(10) NULL, duration_unit VARCHAR(30) NULL, gallery_images JSON NULL,
  discount_percent DECIMAL(5,2) NULL
);
CREATE TABLE IF NOT EXISTS trip_categories (id CHAR(36) PRIMARY KEY, created_at DATETIME NULL, trip_id CHAR(36) NOT NULL, category_id CHAR(36) NOT NULL, INDEX(trip_id), INDEX(category_id));
CREATE TABLE IF NOT EXISTS trip_cities (id CHAR(36) PRIMARY KEY, created_at DATETIME NULL, trip_id CHAR(36) NOT NULL, city_id CHAR(36) NOT NULL, INDEX(trip_id), INDEX(city_id));
CREATE TABLE IF NOT EXISTS trip_days (id CHAR(36) PRIMARY KEY, created_at DATETIME NULL, trip_id CHAR(36) NOT NULL, day_number INT NOT NULL, INDEX(trip_id));
CREATE TABLE IF NOT EXISTS day_activities (id CHAR(36) PRIMARY KEY, created_at DATETIME NULL, time VARCHAR(100) NULL, activity_translations JSON NULL, day_id CHAR(36) NOT NULL, INDEX(day_id));
CREATE TABLE IF NOT EXISTS includes (id CHAR(36) PRIMARY KEY, created_at DATETIME NULL, trip_id CHAR(36) NOT NULL, include_translations JSON NULL, INDEX(trip_id));
CREATE TABLE IF NOT EXISTS reviews (id CHAR(36) PRIMARY KEY, created_at DATETIME NULL, trip_id CHAR(36) NOT NULL, user_id CHAR(36) NULL, comment TEXT NULL, avatar_url TEXT NULL, time VARCHAR(100) NULL, name VARCHAR(255) NULL, rating DECIMAL(3,1) NULL, INDEX(trip_id));
CREATE TABLE IF NOT EXISTS purchases (id CHAR(36) PRIMARY KEY, created_at DATETIME NULL, trip_id CHAR(36) NOT NULL, user_id CHAR(36) NULL, has_children BOOLEAN NULL, has_pets BOOLEAN NULL, has_guide BOOLEAN NULL, num_persons INT NULL, num_children INT NULL, pet_type JSON NULL, guide_languages JSON NULL, arrival_date DATE NULL, departure_date DATE NULL, updated_at DATETIME NULL, platform VARCHAR(50) NULL, status VARCHAR(50) NULL, user_name VARCHAR(255) NULL, user_email VARCHAR(255) NULL, user_image TEXT NULL, INDEX(user_id), INDEX(trip_id));
CREATE TABLE IF NOT EXISTS messages (id CHAR(36) PRIMARY KEY, created_at DATETIME NULL, content TEXT NULL, sender_type VARCHAR(50) NULL, user_name VARCHAR(255) NULL, user_image TEXT NULL, status VARCHAR(50) NULL, updated_at DATETIME NULL, admin_id CHAR(36) NULL, reply_to CHAR(36) NULL, user_id CHAR(36) NULL, INDEX(user_id));
CREATE TABLE IF NOT EXISTS notifications (id CHAR(36) PRIMARY KEY, admin_id CHAR(36) NULL, event_type VARCHAR(100) NULL, message TEXT NULL, created_at DATETIME NULL, is_read BOOLEAN NULL, user_name VARCHAR(255) NULL, user_email VARCHAR(255) NULL, user_image TEXT NULL, trip_id CHAR(36) NULL, user_id CHAR(36) NULL, message_id CHAR(36) NULL, type VARCHAR(100) NULL, comment_id CHAR(36) NULL);
CREATE TABLE IF NOT EXISTS push_tokens (id CHAR(36) PRIMARY KEY, user_id CHAR(36) NULL, token TEXT NOT NULL, created_at DATETIME NULL, INDEX(user_id));
