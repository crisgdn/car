-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: Dec 08, 2022 at 03:34 AM
-- Server version: 5.7.36
-- PHP Version: 7.4.26

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `db_minicar`
--

-- --------------------------------------------------------

--
-- Table structure for table `tbl_car`
--

DROP TABLE IF EXISTS `tbl_car`;
CREATE TABLE IF NOT EXISTS `tbl_car` (
  `car_id` mediumint(8) UNSIGNED NOT NULL,
  `id` varchar(300) NOT NULL,
  `name` text NOT NULL,
  `image` varchar(300) NOT NULL,
  `subtitle` text NOT NULL,
  `comparemobile` varchar(300) NOT NULL,
  `comparedesktop` varchar(300) NOT NULL,
  `priceimg` varchar(300) NOT NULL,
  `pricetitle` text NOT NULL,
  `pricesubtitle` text NOT NULL,
  `pricerate` varchar(300) NOT NULL,
  `pricemonthly` varchar(300) NOT NULL,
  `engine` varchar(300) NOT NULL,
  `output` varchar(300) NOT NULL,
  `boreandstroke` varchar(300) NOT NULL,
  `km` varchar(300) NOT NULL,
  `transmission` varchar(300) NOT NULL,
  `compressionratio` varchar(300) NOT NULL,
  `displacement` varchar(300) NOT NULL,
  PRIMARY KEY (`car_id`)
) ENGINE=MyISAM DEFAULT CHARSET=ucs2;

--
-- Dumping data for table `tbl_car`
--

INSERT INTO `tbl_car` (`car_id`, `id`, `name`, `image`, `subtitle`, `comparemobile`, `comparedesktop`, `priceimg`, `pricetitle`, `pricesubtitle`, `pricerate`, `pricemonthly`, `engine`, `output`, `boreandstroke`, `km`, `transmission`, `compressionratio`, `displacement`) VALUES
(1, 'ctd', 'MINI 3 DOOR', 'F56-S.png', 'The original icon that started it all.', '3door-compare-mobile.svg', '3door-compare-desktop.svg', '23HA-en.png', 'MINI COOPER 3 DOOR', 'All-Inclusive Price: $34,056', '5.49%', '$517', '3 Cylinder 12 Valve Twin Power Turbo', 'Bore and Stroke', '82.0 x 94.6', '8.0', '6-Speed Manual', '11', '1,499'),
(2, 'cfd', 'THE MINI 5 DOOR', 'F55-S.png', 'The iconic MINI with extra room, for those who lead a slightly fuller life.', '5door-compare-mobile.svg', '5door-compare-desktop.svg', '23HG-en.png', 'MINI COOPER 5 DOOR', 'All-Inclusive Price: $35,156', '5.49%', '$517', '3 Cylinder 12 Valve Twin Power Turbo', 'Bore and Stroke', '82.0 x 94.6', '8.0', '6-Speed Manual', '11', '1,499'),
(3, 'ccd', 'THE MINI CONVERTIBLE', 'F57-S.png', 'The free spirit, featuring an open top for limitless open-air excitement.', 'convertible-compare-mobile.svg', 'convertible-compare-desktop.svg', '23VA-en.png', 'MINI COOPER CONVERTIBLE', 'All-Inclusive Price: $40,956', '5.99%', '$590.59', '3 Cylinder 12 Valve Twin Power Turbo', '134 hp @ 4,500 - 6,000', '82.0 x 94.6', '8.7', '6-Speed Manual', '11', '1,499');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
